# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript

### What I learned

I learned a way to select the sibling of the targeted element.

```js
accordion.addEventListener("click", (e) => {
  const elem = e.target;

  if (!elem.dataset.id) return;

  const btnElem =
    elem.tagName === "BUTTON"
      ? elem
      : elem.closest(".accordion__header").querySelector("button");
});
```

### Continued development

I want to continue focusing on CSS grid, JavaScript, and Semantic HTML. I want to get comfortable in those aspects of front-end development.

### Useful resources

- [chat.openai](https://chat.openai.com/) - This helped me identify the logic for changing the icon, whether it is active or not.

## Author

- Website - [Aaron](https://aaron-lomibao-portfolio.netlify.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/AaronL9)
