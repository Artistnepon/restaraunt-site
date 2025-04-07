"use strict";

document.getElementById("menuButton").addEventListener("click", function () {
    scrollToElement("menu");
});

document.getElementById("teamButton").addEventListener("click", function () {
    scrollToElement("team");
});

document.getElementById("eventsButton").addEventListener("click", function () {
    scrollToElement("events");
});

document.getElementById("contactsButton").addEventListener("click", function () {
    scrollToElement("contacts");
});

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        console.error("Element with ID '" + elementId + "' not found.");
    }
}