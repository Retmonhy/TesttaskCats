/*Выезжающее меню*/
let burgerMenu = document.querySelector('.burger-menu');
let headerMenu = document.querySelector('.header-menu');

burgerMenu.addEventListener('click', handlerAdd);

function handlerAdd(){
	burgerMenu.classList.toggle('burger-menu_active');
	headerMenu.classList.toggle('header-menu_active');
};;
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
;

$('.like-btn', '.cat-block').on('click', function(){
	let hasLike_btn_clicked = $(this).hasClass('like-btn_clicked');
	let name = $(this).closest('.cat-block').find( '.cat__name', '.cat-block__description').html();

	$(this).toggleClass('like-btn_clicked');

	/*создадим элемент, который будем вставлять в favorti-notice*/
	let newCat = document.createElement('p');
	newCat.className = 'cat__nameHere';
	newCat.innerHTML = name;

	

	if (hasLike_btn_clicked) {
		 console.log(hasLike_btn_clicked);
		 return
	} else {
		favoritNotice(newCat);
		showNotice();
		setTimeout(function() { 
			hideNotice()		
		}, 2000);
	}
});	

$('.favorit-notice').on('click', function () {

});

function favoritNotice(catName) {

	let tret = $('.favorit-text');
	
	tret.append(catName);

	setTimeout(function () {
		catName.parentNode.removeChild(catName);
		// catName.remove();
	}, 2100);

};

function showNotice() {
	$('.favorit-notice').css('transform', 'translate(0, 0)')
};

function hideNotice() {
	$('.favorit-notice').css('transform', 'translate(-100%, 0)')
};


/*скрипт на кнопочку возврата к шапке*/
$('.scrollTop-button').on('click', function () {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
});

$(window).on('scroll', function(){
	if ($(this).scrollTop() > 300) {
		$('.scrollTop-button').fadeIn();
	} else {
		$('.scrollTop-button').fadeOut();
	}
});



/*Реализация сортировки*/


document.querySelector('.sort__cost').addEventListener("click", function(event) {
	event.preventDefault();
	let sort_cost_button = document.querySelector('.sort__cost');
	checkSortClass(sort_cost_button, 'sort__cost', 'data-cost');
});

document.querySelector('.sort__age').addEventListener("click", function(event) {
	event.preventDefault();
	let sort_age_button = document.querySelector('.sort__age');
	checkSortClass(sort_age_button, 'sort__age', 'data-age');
});

function checkSortClass(sort_button, sortClass, dataAttribute) {
	if (sort_button.classList.contains('sort_decrease')) {
		mySortIncrease(dataAttribute);//////////////////////////////////////////////
		$('.' + sortClass).removeClass('sort_decrease').addClass('sort_increase');
	}	else {
		mySortDecrease(dataAttribute);//////////////////////////////////////////////
		$('.' + sortClass).addClass('sort_decrease').removeClass('sort_increase');

	}
};
function mySortDecrease(dataAttribute) {
	let catsShop = document.querySelector('.cats-shop');

	for (let i = 0; i < catsShop.children.length; i++) {
		for (let j = i; j < catsShop.children.length; j++){
			if (+catsShop.children[i].getAttribute(dataAttribute) < +catsShop.children[j].getAttribute(dataAttribute)) {////////////
				replacedNode = catsShop.replaceChild(catsShop.children[j], catsShop.children[i]);
				insertAfter(replacedNode, catsShop.children[i]);

			}
		}
	}
}
function mySortIncrease(dataAttribute) {
	let catsShop = document.querySelector('.cats-shop');

	for (let i = 0; i < catsShop.children.length; i++) {
		for (let j = i; j < catsShop.children.length; j++){
			if (+catsShop.children[i].getAttribute(dataAttribute) > +catsShop.children[j].getAttribute(dataAttribute)) {///////////////
				replacedNode = catsShop.replaceChild(catsShop.children[j], catsShop.children[i]);
				insertAfter(replacedNode, catsShop.children[i]);

			}
		}
	}
}

function insertAfter(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}