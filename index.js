/**
 * Name: Robert Bonglamphone
 * Date: October 17, 2022
 * Section: CSE 154 AC Allison Ho -
 *
 * This is the main javascript file with cooking recipes.
 * You can navigate between dishes by clicking on the button.
 * You can click on the moon icon to toggle between day and night mode and
 * keypress any character to spam new elements on the page.
*/
"use strict";
(function() {
  // keeps all the functions within local scope
  window.addEventListener("load", init);

  // initial document event handlers setup
  function init() {
    let buttons = qsa('button');
    let nightModeIcon = qs('#night-mode-icon');
    buttons.forEach(button => {
      button.addEventListener("click", nextRecipe);
    });
    window.addEventListener('keypress', konamiCode);
    nightModeIcon.addEventListener('click', toNightMode);
  }

  // retrieves element id
  function id(id) {
    return document.getElementById(id);
  }

  // retrieves element
  function qs(selector) {
    return document.querySelector(selector);
  }

  // retrieves element array
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  // switches between recipes
  function nextRecipe() {
    let section = qsa('section');
    for (let i = 0; i < section.length; i++) {
      section[i].classList.toggle('current-recipe');
    }
  }

  // italizes the header after keypress
  function konamiCode() {
    const header = qs('header');
    header.appendChild(createFoodScript());
    header.classList.add('konamiCode');
  }

  // Adds new string to spam the page
  function createFoodScript() {
    let paragraph = document.createElement('p');
    paragraph.textContent = "FOOD";
    return paragraph;
  }

  // Switches the colors and theme of the
  //page to be easier read both night and day
  function toNightMode() {
    let body = qs('body');
    let nav = qs('nav');
    let header = qs('h1');
    let article = qs('article');
    let sections = qsa('section');
    body.classList.toggle('nightModeBody');
    nav.classList.toggle('nightModeNav');
    header.classList.toggle('nightModeHead');
    article.classList.toggle('nightModeArt');
    sections.forEach(section => {
      section.classList.toggle('nightModeSec')
    });
    swapMoonIcon(body);
  }

  // switches icon from moon to sun and vice versa
  function swapMoonIcon(body) {
    let img = id('nightModeIcon');
    if (body.classList.contains('nightModeBody')) {
      img.src = "img/sun-icon.png";
      img.alt = "sun icon";
    } else {
      img.src = "img/moon-icon.png";
      img.alt = "moon icon";
    }
  }
})();

