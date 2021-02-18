// var section
const pageStart = document.querySelector('.start-page');
const pageMain = document.querySelector('.main-page');
const pageVideo = document.querySelector('.video-page');
const navbar = document.querySelector('.navbar');
// var button
const btnStart = document.querySelector('.start-page button');
const iconBook = document.querySelector('.box-icon-book');
const iconYoutube = document.querySelector('.box-icon-youtube');
// var animation
const animation = document.querySelector('.move div');
const animation2 = document.querySelector('.move2 div');

//click start page button
btnStart.addEventListener('click', function() {
	animation.classList.add('page-animation');
	animation.parentElement.classList.remove('hide');
	setTimeout(function(){
		pageStart.classList.add('hide');
		pageMain.classList.remove('hide');
		navbar.classList.remove('hide');
	},500)
	setTimeout(function(){
		animation.parentElement.classList.add('hide');
		animation.classList.remove('page-animation');
	},1500)
})

// navbar click & page transition
iconBook.addEventListener('click', function() {
	if (iconBook.className == 'box-icon-book') {
		pageTransition();
		// stop video yt (jQuery)
		$('iframe').each(function(){
		  this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
		});
	}
})
iconYoutube.addEventListener('click', function() {
	if (iconYoutube.className == 'box-icon-youtube') {
		pageTransition();
	}
})
function pageTransition() {
		iconBook.classList.toggle('nav-active');
		iconYoutube.classList.toggle('nav-active');
		animation2.parentElement.classList.remove('hide');
		animation2.classList.add('page-animation2');

		setTimeout(function(){
			pageMain.classList.toggle('hide');
			pageVideo.classList.toggle('hide');
		},510)
		setTimeout(function(){
			animation2.parentElement.classList.add('hide');
			animation2.classList.remove('page-animation2');
		},1500)
}