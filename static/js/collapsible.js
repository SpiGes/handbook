/**
 * This script adds toggle functionality to elements intended to be collapsible.
 * It waits for the entire document to load before initializing. Once loaded,
 * it attaches click event listeners to elements with the class "collapsible-toggle".
 * Clicking a toggle element will show or hide the immediately following sibling element,
 * allowing for a simple collapsible/expandable section without additional dependencies.
 */
document.addEventListener('DOMContentLoaded', function () {
    // Fetches all elements with the class name 'collapsible-toggle'
    var coll = document.getElementsByClassName("collapsible-toggle");

    // Iterates through the toggle elements to attach click event listeners
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            // Accesses the next sibling element which is the content to be shown/hidden
            var content = this.nextElementSibling;

            // Toggles the display style: if it is block (visible), it changes it to none (hidden), and vice versa
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});