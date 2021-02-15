const btnStart = document.querySelector('.start-page button');

const pageStart = document.querySelector('.start-page');
const pageMain = document.querySelector('.main-page');
const pageVideo = document.querySelector('.video-page');
const navbar = document.querySelector('.navbar');

const iconBook = document.querySelector('.book');
const iconYoutube = document.querySelector('.youtube');

const animation = document.querySelector('.move div');
const animation2 = document.querySelector('.move2 div');

const iframe = document.querySelector('iframe');

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



let myConfObj = { iframeMouseOver : false }
window.addEventListener('blur', function(){
	if(myConfObj.iframeMouseOver) {
		iframe.classList.add('played');
		console.log('clicked');
	}
})
document.querySelector('iframe').addEventListener('mouseover', function(){
	myConfObj.iframeMouseOver = true;
})
document.querySelector('iframe').addEventListener('mouseout', function(){
	myConfObj.iframeMouseOver = false;
})



iconBook.addEventListener('click', function() {
	if (iconBook.className != 'box-icon book nav-active') {
		pageTransition();
		if(iframe.className == 'played') stopVideo();
	}
})
iconYoutube.addEventListener('click', function() {
	if (iconYoutube.className != 'box-icon youtube nav-active') {
		pageTransition();
	}
})
iframe.addEventListener('click', function(){
	iframe.classList.add('played');
})

function pageTransition() {
		iconBook.classList.toggle('nav-active');
		iconYoutube.classList.toggle('nav-active');
		animation2.parentElement.classList.toggle('hide');
		animation2.classList.add('page-animation2');

		setTimeout(function(){
			pageMain.classList.toggle('hide');
			pageVideo.classList.toggle('hide');
		},500)
		setTimeout(function(){
			animation2.parentElement.classList.toggle('hide');
			animation2.classList.remove('page-animation2');
		},1500)
}

function stopVideo() {
	let iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	iframe.classList.remove('played');
}

