
// Pixelated Frankie Image Swap
$(document).ready(function() {
  let imgElement = $('#img-pixel-frankie');
  let imgPath = imgElement.attr('src');
  let basePath = imgPath.substring(0, imgPath.lastIndexOf('-') + 1);

  // Show/Hide dropdown menu
  $('#menu-button').click(function() {
    $('#dropdown-menu').toggle();
  });

  // Swap image on clicking an option
  $('.image-option').click(function(e) {
    e.preventDefault();
    let imageNumber = $(this).data('image');
    let newImgPath = `${basePath}${imageNumber}.jpg`;
    imgElement.attr('src', newImgPath);
    $('#dropdown-menu').hide();
  });
});


// Client-side validation and reCAPTCHA integration
// document.addEventListener('DOMContentLoaded', function() {
//   // Load reCAPTCHA
//   const recaptchaScript = document.createElement('script');
//   recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js');
//   document.head.appendChild(recaptchaScript);

//   // Get form element
//   const form = document.getElementById('contactForm');

//   // Add reCAPTCHA widget
//   recaptchaScript.onload = function() {
//     grecaptcha.render('recaptcha-container', {
//       'sitekey': 'your_site_key'
//     });
//   };

//   // Add form submission event
//   form.addEventListener('submit', function(event) {
//     // Validate form fields here
//     // ...
//     // If validation fails, use event.preventDefault() to stop form submission
//   });
// });



// Email to Formspree
var form = document.getElementById("my-form");
async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
}).then(response => {
  if (response.ok) {
    status.innerHTML = "Thanks for your submission! Frankie will be in touch with you.";
    form.reset()
  } else {
    response.json().then(data => {
    if (Object.hasOwn(data, 'errors')) {
      status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
    } else {
      status.innerHTML = "Oops! There was a problem submitting your form"
    }
  })
}
}).catch(error => {
  status.innerHTML = "Oops! There was a problem submitting your form";
});
}
form.addEventListener("submit", handleSubmit)
