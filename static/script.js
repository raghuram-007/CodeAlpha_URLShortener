 document.addEventListener("DOMContentLoaded", loadURLs);

    async function shortenURL() {
      const longUrl = document.getElementById("longUrl").value.trim();
      if (!longUrl) {
        alert("Please enter a URL!");
        return;
      }

      const response = await fetch("/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ long_url: longUrl }),
      });

      const data = await response.json();
      if (data.error) {
        alert(data.error);
        return;
      }

      const newUrl = {
        long: data.long_url,
        short: data.short_url,
      };

      saveURL(newUrl);
      addCard(newUrl);
      document.getElementById("longUrl").value = "";
    }

    function addCard(url) {
      const container = document.getElementById("cardsContainer");
      const card = document.createElement("div");
      card.className = "url-card";
      card.innerHTML = `
        <p><b>Long URL:</b> <a href="${url.long}" target="_blank">${url.long}</a></p>
        <p><b>Short URL:</b> <a href="${url.short}" target="_blank">${url.short}</a></p>
        <button onclick="copyToClipboard('${url.short}')">Copy Short URL</button>
      `;
      container.prepend(card);
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text);
      const msg = document.getElementById("message");
      msg.style.display = "block";
      setTimeout(() => (msg.style.display = "none"), 2000);
    }

    function saveURL(url) {
      const urls = JSON.parse(localStorage.getItem("urls")) || [];
      urls.push(url);
      localStorage.setItem("urls", JSON.stringify(urls));
    }

    function loadURLs() {
      const urls = JSON.parse(localStorage.getItem("urls")) || [];
      urls.forEach(addCard);
    }