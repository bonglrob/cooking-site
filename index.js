/*   Name: Robert Bonglamphone
  Date: October 17, 2022
  Section: CSE 154 AC Allison Ho -

  This is the main javascript file with cooking recipes from japanese and
  lao cuisine. You can filter and navigate between dishes by clicking on the
  buttons. */
"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    // we now have access to the DOM tree!
    // set up your initial document event handlers here.
    const buttons = qsa('button');
    const nightModeIcon = qs('#nightModeIcon');
    buttons.forEach(button => {
      button.addEventListener("click", nextRecipe)
    });
    window.addEventListener('keypress', konamiCode);
    nightModeIcon.addEventListener('click', toNightMode);
  }

  function id(id) {
    return document.getElementById(id);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  function nextRecipe() {
    let section = qsa('section');
    for (let i = 0; i < section.length; i++) {
      section[i].classList.toggle('current-recipe');
    }
  }

  function konamiCode() {
    const header = qs('header');
    header.appendChild(createFoodScript());
    header.classList.add('konamiCode');
  }

/* Adds new string to spam the page*/
  function createFoodScript() {
    let paragraph = document.createElement('p');
    paragraph.textContent = "FOOD";
    return paragraph;
  }

/* Switches the colors and theme of the
page to be easier read both night and day */
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
      section.classList.toggle('nightModeSec');
    });
    swapMoonIcon(body);
  }

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


