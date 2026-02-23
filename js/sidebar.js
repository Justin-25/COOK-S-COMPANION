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