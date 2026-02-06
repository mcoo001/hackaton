const dropdown = document.getElementById("dropdown");
const goBtn = document.getElementById("goBtn");

// Load config file
fetch("./config.json")
  .then(response => response.json())
  .then(data => {
    data.items.forEach(item => {
      const option = document.createElement("option");
      option.value = item.url;
      option.textContent = item.label;
      dropdown.appendChild(option);
    });
  })
  .catch(error => {
    console.error("Error loading config:", error);
  });

// Go button logic
goBtn.addEventListener("click", () => {
  const selectedUrl = dropdown.value;

  if (!selectedUrl) {
    alert("Please select an option first.");
    return;
  }

  window.open(selectedUrl, "_blank");
});
