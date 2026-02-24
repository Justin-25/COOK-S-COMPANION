// Sidebar Menu when the user click the sidebar buton it will display this sidebar
function myFunction() {
    document.getElementById('sidebar').style.width = "100%";
}

function closeFunction() {
    document.getElementById('sidebar').style.width = "0";
}


// Sidebar Search when the user click the search.
function openSearch() {
    document.getElementById('searchBar').style.display = "inline-block";
}

function closeSearch() {
    document.getElementById('searchBar').style.display = "none";
}

// Dropdown Menu on the Sidebar.
var dropdown = document.getElementById('dropdown-btn');
var i = 0;

for ( i; i < dropdown.length; i++ ) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle('active');
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "flex") {
            dropdownContent.style.display === "none";
        } else {
            dropdownContent.style.display = "flex";
        }
    });
}

// Pagination of the Menu Cuisine
let currentPage = 1;
const totalPages = 5;

const paginationContainer = document.querySelector(".pagination nav ul");
let paginationPage = document.querySelector(".pagination-page");
const prevBtn = document.querySelector(".prev-pagination");
const nextBtn = document.querySelector(".next-pagination");

function renderPagination() {

    // Remove old page buttons
    let pageBtn = document.querySelectorAll('.pagination-page');
    pageBtn.forEach(function(button) {
        button.parentElement.remove();
    });

    // Add new page button
    let nextLi = nextBtn.parentElement; 

    // Create list item
    let createLi = document.createElement('li');

    // Create button
    let createBtn = document.createElement('button');
    createBtn.className = 'pagination-page active';
    createBtn.textContent = currentPage;

    // Assemble
    createLi.appendChild(createBtn);

    // Insert
    paginationContainer.insertBefore(createLi, nextLi)
    
    // Disable prevbtn if on first page
    if (currentPage === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    };

    // Disable nextBtn if on last page
    if (currentPage === totalPages) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    };
}

prevBtn.addEventListener('click', function() {
    // Dont go below page 1
    if (currentPage > 1) {
        currentPage--;
        renderPagination();
    };
});

nextBtn.addEventListener('click', function() {
    //Dont go above the totalPages
    if (currentPage < totalPages) {
        currentPage++;
        renderPagination();
    };
});

renderPagination();