// image selection overlay

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

// birthday form

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
 * Get zodiac sign based on month and day.
 *
 * @param {number} month 
 * @param {number} day 
 * @return {string} - zodiac sign
 */
function getZodiacSign(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return 'Capricorn';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'Sagittarius';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        return 'Scorpio';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        return 'Libra';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return 'Virgo';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return 'Leo';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return 'Cancer';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        return 'Gemini';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return 'Taurus';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return 'Aries';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return 'Pisces';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return 'Aquarius';
    }
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
    const month = parseInt(date[1]);
    const day = parseInt(date[2]);

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

    const astro_sign = getZodiacSign(month, day);
    console.log('Zodiac Sign:', astro_sign);

    // redirect to corresponding page
    window.location.href = `subpages/${astro_sign.toLowerCase()}.html`;
}

if (form) {
    form.addEventListener('submit', handle_submit, false);
}

// show page accessibility info 
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

