
    // Handling filter buttons active state and aria-pressed toggle
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      });
    });

function searchTexturePacks() {
      const query = document.getElementById("search").value.toLowerCase();
      const packs = document.querySelectorAll("#texture-packs li");
      let found = false;
      // Clear previous results
      document.getElementById("search-result").textContent = '';
      packs.forEach(pack => {
        if (pack.textContent.toLowerCase().includes(query)) {
          pack.style.display = "list-item"; // Show matched item
          found = true;
        } else {
          pack.style.display = "none"; // Hide non-matched items
        }
      });
      // If no match is found, display message
      if (!found) {
        document.getElementById("search-result").textContent = "No matches found.";
      }
    }
