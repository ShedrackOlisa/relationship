document.getElementById('darkModeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});


function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        menuToggle.classList.add('open');
    } else {
        menu.style.display = 'none';
        menuToggle.classList.remove('open');
    }
}


window.onload = function() { var yearElement = document.getElementById("currentYear"); var currentYear = new Date().getFullYear(); yearElement.textContent = currentYear; };



 
 
    
// Get elements
var searchButton = document.getElementById("searchButton");
var searchContainer = document.getElementById("searchContainer");

// Add click event listener to search button
searchButton.addEventListener("click", function() {
  // Toggle search icon to close icon
  var searchIcon = searchButton.querySelector("i");
  searchIcon.classList.toggle("fa-search");
  searchIcon.classList.toggle("fa-times");

  // Show search container
  searchContainer.style.display = "block";
});

// Function to close search container
function closeSearch() {
  // Toggle search icon to search icon
  var searchIcon = searchButton.querySelector("i");
  searchIcon.classList.toggle("fa-times");
  searchIcon.classList.toggle("fa-search");

  // Hide search container
  searchContainer.style.display = "none";
}

function search() {
  var query = document.getElementById("searchInput").value.toLowerCase();
  var searchData = [
    { title: "Sample Article 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://via.placeholder.com/150", url: "https://example.com/article1" },
    { title: "Sample Article 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://via.placeholder.com/150", url: "https://example.com/article2" },
    { title: "Sample Article 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "https://via.placeholder.com/150", url: "https://example.com/article3" }
  ];

  var searchResults = searchData.filter(function(item) {
    return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
  });

  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  var searchResultsDiv = document.getElementById("searchResults");
  searchResultsDiv.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    searchResultsDiv.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(function(result) {
    var resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = "<h3>" + result.title + "</h3><img src='" + result.image + "' alt='" + result.title + "'><p>" + result.content + "</p>";
    // Add click event listener to navigate to URL
    resultDiv.addEventListener("click", function() {
      window.location.href = result.url;
    });
    searchResultsDiv.appendChild(resultDiv);
  });
}