/* image selection overlay */

var image = document.getElementsByClassName('grid-item');
for (var i = 0; i < image.length; i++) {
    image[i].addEventListener('mouseover', mouseOverEffect);
    image[i].addEventListener('mouseout', mouseOutEffect);
}

function mouseOverEffect() {
    this.classList.add("image-selector");
}
function mouseOutEffect() {
    this.classList.remove("image-selector");
}

/* birthday form */

const form = document.querySelector('form');
const error_list = document.querySelector('.errors');

/**
 * Logs the birthday information.
 *
 * @param {Array} birthday - An array containing the year, month, and day of the birthday
 * @return {Object} The date object containing the year, month, and day
 */
function log_birthday(birthday) {
    const date = {
        year: birthday[0],
        month: birthday[1],
        day: birthday[2],
    };
    return date;
}

/**
 * Custom form validation
 * 'errors' array will hold validation error
 *
 * @param {Object} event - The event object
 * @return {boolean} Whether the form submission should continue
 */
function handle_submit(event) {
    event.preventDefault();
    console.group('Form submission');
    console.log(form);
    console.log(form?.elements);
    console.log(form?.elements['birthday'].value);
    console.groupEnd();

    const bdayInputVal = form.elements['birthday'].value;
    console.log(bdayInputVal);
    const date = bdayInputVal.split("-");
    

    const errors = [];

    if (errors.length) {
        errors.forEach((error) => {
            const li = document.createElement('li');
            const text = document.createTextNode(error);

            li.appendChild(text);
            console.log('errors', errors);
            error_list.appendChild(li);
            error_list.hidden = 0;
        });
        return false;
    } else {
        error_list.hidden = 1;
        error_list.innerHTML = '';
    }

    const date_object = log_birthday(form.elements['birthday'].value.split('-'));
    console.log('date_object', date_object);
}

if (form) {
    form.addEventListener('submit', handle_submit, false);
}

/* show page accessibility info */
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}