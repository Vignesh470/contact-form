# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop Solution:
![](./design/solution%20-%20desktop.png)

Mobile Solution:
![](./design/solution%20-%20mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript


### What I learned

```js
if (inputsValidated) {
        submit();
        form.reset();
        setTimeout(function() {
            document.getElementById("submit-note").style.display = "none";
        }, 8000);
    }
```

### Useful resources

- ["novalidate" in form submit](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/#:~:text=You%20can%20stop%20browser%20validation%20by%3A%20adding%20a,formnovalidate%20attribute%20to%20the%20submission%20button%20or%20image) - This article helped me on how to stop the automatic validation by browser.

- [How to set textarea rows and cols using CSS?](https://stackoverflow.com/questions/2034544/textareas-rows-and-cols-attribute-in-css) - This tutorial helped me to setting the rows and columns of textarea using CSS. 

## Author

- Frontend Mentor - [Vignesh470](https://www.frontendmentor.io/profile/Vignesh470)
- My Website - [Vignesh Portfolio](https://vignesh470.github.io/Vignesh-Portfolio-website)
- LinkedIn profile - [Vignesh J](https://www.linkedin.com/in/vignesh-j-005a6291/)
- Github profile - [Vignesh470](https://github.com/Vignesh470)