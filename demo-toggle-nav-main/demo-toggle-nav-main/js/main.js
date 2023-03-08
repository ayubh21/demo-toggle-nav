// Step 1. Select the element to add an event listner on, in this case its the button element.

// Step 2. Add a click event to the button icon
const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', function(){
    // When the button is clicked show the nav element.
    // by adding the class name show-nav to it

    document.querySelector('nav').classList.toggle('show-nav');
})

// Step 3. Link to javaScript, we want it to load last so use a defer attribute.
