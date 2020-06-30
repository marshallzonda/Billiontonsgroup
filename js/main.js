$(document).ready(function(){
	$('.slider').slick({
		// Управление стрелками
		arrows:false,
		// Включение точек навигации
		dots:true,
		// Адаптивная высота слйдов
		adaptiveHeight:true,
		// Количество слайдов к показу
		slidesToShow:1,
		// Количество слайдов за одну прокрутку
		slidesToScroll:1,
		// скорость прокрутки слайдов
		speed:1000,
		// Анимация перелистывания
		easing:'linear',
		// Указывает на конечность слайда
		infinite:true,
		// Указывает с какого слайда будет начинатся пролистывание
		initialSlide:2,
		// Функции автороигрывания
		autoplay:true,
		autoplaySpeed:2500,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		// Функции свайпа, мышкой
		draggable:true,
		// пальцем на тачскринах
		swipe:true,
		touchThreshhold:10,
		touchMove:true,
		// Ожидание до конца анимации
		waitForAnimate:true,
		// Устанавливает главный елемент по центру
		centerMode:false,
		// Убирает отступы елемента адаптивен
		variableWidth:false,
	});
});