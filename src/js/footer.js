$('.subscribe-button').on('click', validate);
function validateEmail(email) {

	let regularExpression = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	  return regularExpression.test(String(email).toLowerCase());
}

function sendForm() {
    $(".error").text("Спасибо! Мы с Вами свяжемся.").css('color', '#fff').fadeIn();
  }
 
  // validate email and send form after success validation
  function validate() {
    let email = $(".email-input").val();
    let $error = $(".error");
    $error.text("");
 
    if (validateEmail(email)) {
      $error.fadeOut();
      sendForm();
    } else {

      $error.fadeIn();
      $error.text(email + " is not valid");
    }
    return false;
  }
