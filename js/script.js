// When  the use click the buttom, toggle between hiding and showing the dropdown
function myFunction() {
    document.getElementById('list-dropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of dropdown
window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for ( i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}