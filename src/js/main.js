$('.like-btn', '.cat-block').on('click', function(){
	let hasLike_btn_clicked = $(this).hasClass('like-btn_clicked');
	let name = $(this).closest('.cat-block').find( '.cat__name', '.cat-block__description').html();

	$(this).toggleClass('like-btn_clicked');

	/*создадим элемент, который будем вставлять в favorti-notice*/
	let newCat = document.createElement('p');
	newCat.className = 'cat__nameHere';
	newCat.innerHTML = `${name}`;

	

	if (hasLike_btn_clicked) {
		 console.log(hasLike_btn_clicked);
		 return
	} else {
		favoritNotice(newCat);
		showNotice();
		setTimeout(() => {
			hideNotice()
		}, 2000);
	}
});	

$('.favorit-notice').on('click', () => {

});

function favoritNotice(catName) {

	let tret = $('.favorit-text');
	
	tret.append(catName);

	setTimeout(() => {
		catName.remove();
	}, 2100);

};

function showNotice() {
	$('.favorit-notice').css('transform', 'translate(0, 0)')
};

function hideNotice() {
	$('.favorit-notice').css('transform', 'translate(-100%, 0)')
};