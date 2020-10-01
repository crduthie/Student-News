// JavaScript Document

function swapStyleSheet(sheet){
	
	"use strict";
	
	document.getElementById('pagestyle').setAttribute('href', sheet);
		
	$('link[href="style.css"]').prop('disabled', true);
	
}

$('#back_to_top').click(function() {  // When arrow is clicked
	
	"use strict";
	
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
	
});

$(document).ready(function(){
	
	"use strict";
	
	$('.button_text').click(function(){
		$('.button_press').addClass('active_0');
		$('.button_press_2').addClass('active_2');
		$('.button_text').addClass('disappear');
		$('.button_text_2').addClass('appear');
        $('.name').css('color', 'black');
        $('.date').css('color', 'black');
	});
	
	$('.button_text_2').click(function(){
		$('.button_press').removeClass('active_0');
		$('.button_press_2').removeClass('active_2');
		$('.button_text').removeClass('disappear');
		$('.button_text_2').removeClass('appear');
		$('.main_title_1').css('color', 'white');
		$('.main_title_2').css('color', 'white');
		$('.main_title_3').css('color', 'white');
		$('.main_title_4').css('color', 'white');
		$('.sub_title_1').css('color', 'white');
		$('.sub_title_2').css('color', 'white');
		$('.sub_title_3').css('color', 'white');
		$('.sub_title_4').css('color', 'white');
		$('.right_title_1').css('color', 'white');
		$('.right_title_2').css('color', 'white');
		$('.right_title_3').css('color', 'white');
		$('.right_title_4').css('color', 'white');
		$('.left_title').css('color', 'black');
        $('.title').css('color', 'black');
        $('.name').css('color', '#8B8B8B');
        $('.date').css('color', '#8B8B8B');
        $('.description').css('color', 'black');
        $('.information').css('color', 'black');
		$('.left_lower_title').css('color', 'black');
		$('.main_title_container_1').css('background', 'rgba(53,53,53,1.00)');
		$('.main_title_container_2').css('background', 'rgba(53,53,53,1.00)');
		$('.main_title_container_3').css('background', 'rgba(53,53,53,1.00)');
		$('.main_title_container_4').css('background', 'rgba(53,53,53,1.00)');
		$('.right_title_container').css('background', 'rgba(53,53,53,1.00)');
		$('.sub_background').css('background', 'rgba(66,66,66,1.00)');
		$('.left_lower_index').css('background', 'none');
		$('.sub').css('background', 'white');
	});
	
	$('.beige').click(function(){
		$('.main_title_container_1').css('background', '#f5f5dc');
		$('.main_title_container_2').css('background', '#f5f5dc');
		$('.main_title_container_3').css('background', '#f5f5dc');
		$('.main_title_container_4').css('background', '#f5f5dc');
		$('.sub_background').css('background', '#f5f5dc');
		$('.left_lower_index').css('background', '#f5f5dc');
		$('.right_title_container').css('background', '#f5f5dc');
		$('.sub').css('background', '#f5f5dc');
	});
	
	$('.grey').click(function(){
		$('.main_title_container_1').css('background', '#CDCDCD');
		$('.main_title_container_2').css('background', '#CDCDCD');
		$('.main_title_container_3').css('background', '#CDCDCD');
		$('.main_title_container_4').css('background', '#CDCDCD');
		$('.sub_background').css('background', '#CDCDCD');
		$('.left_lower_index').css('background', '#CDCDCD');
		$('.right_title_container').css('background', '#CDCDCD');
		$('.sub').css('background', '#CDCDCD');
	});
	
	$('.sage_green').click(function(){
		$('.main_title_container_1').css('background', '#77815c');
		$('.main_title_container_2').css('background', '#77815c');
		$('.main_title_container_3').css('background', '#77815c');
		$('.main_title_container_4').css('background', '#77815c');
		$('.sub_background').css('background', '#77815c');
		$('.left_lower_index').css('background', '#77815c');
		$('.right_title_container').css('background', '#77815c');
		$('.sub').css('background', '#77815c');
	});
	
	$('.peach').click(function(){
		$('.main_title_container_1').css('background', '#EDD1B0');
		$('.main_title_container_2').css('background', '#EDD1B0');
		$('.main_title_container_3').css('background', '#EDD1B0');
		$('.main_title_container_4').css('background', '#EDD1B0');
		$('.sub_background').css('background', '#EDD1B0');
		$('.left_lower_index').css('background', '#EDD1B0');
		$('.right_title_container').css('background', '#EDD1B0');
		$('.sub').css('background', '#EDD1B0');
	});
	
	$('.orange').click(function(){
		$('.main_title_container_1').css('background', '#EDDD6E');
		$('.main_title_container_2').css('background', '#EDDD6E');
		$('.main_title_container_3').css('background', '#EDDD6E');
		$('.main_title_container_4').css('background', '#EDDD6E');
		$('.sub_background').css('background', '#EDDD6E');
		$('.left_lower_index').css('background', '#EDDD6E');
		$('.right_title_container').css('background', '#EDDD6E');
		$('.sub').css('background', '#EDDD6E');
	});
	
	$('.yellow').click(function(){
		$('.main_title_container_1').css('background', '#F8FD89');
		$('.main_title_container_2').css('background', '#F8FD89');
		$('.main_title_container_3').css('background', '#F8FD89');
		$('.main_title_container_4').css('background', '#F8FD89');
		$('.sub_background').css('background', '#F8FD89');
		$('.left_lower_index').css('background', '#F8FD89');
		$('.right_title_container').css('background', '#F8FD89');
		$('.sub').css('background', '#F8FD89');
	});
	
	$('.main_color_title').on( "click",function(){
		$('.color_box').toggleClass('remove');
	});
	
	$('.black').click(function(){
		$('.main_title_1').css('color', 'black');
		$('.main_title_2').css('color', 'black');
		$('.main_title_3').css('color', 'black');
		$('.main_title_4').css('color', 'black');
		$('.sub_title_1').css('color', 'black');
		$('.sub_title_2').css('color', 'black');
		$('.sub_title_3').css('color', 'black');
		$('.sub_title_4').css('color', 'black');
		$('.right_title_1').css('color', 'black');
		$('.right_title_2').css('color', 'black');
		$('.right_title_3').css('color', 'black');
		$('.right_title_4').css('color', 'black');
		$('.left_lower_title').css('color', 'black');
		$('.left_title').css('color', 'black');
		$('.title').css('color', 'black');
		$('.name').css('color', 'black');
		$('.date').css('color', 'black');
		$('.description').css('color', 'black');
		$('.information').css('color', 'black');
	});
	
	$('.white').click(function(){
		$('.main_title_1').css('color', 'white');
		$('.main_title_2').css('color', 'white');
		$('.main_title_3').css('color', 'white');
		$('.main_title_4').css('color', 'white');
		$('.sub_title_1').css('color', 'white');
		$('.sub_title_2').css('color', 'white');
		$('.sub_title_3').css('color', 'white');
		$('.sub_title_4').css('color', 'white');
		$('.right_title_1').css('color', 'white');
		$('.right_title_2').css('color', 'white');
		$('.right_title_3').css('color', 'white');
		$('.right_title_4').css('color', 'white');
		$('.left_lower_title').css('color', 'white');
		$('.left_title').css('color', 'white');
		$('.title').css('color', 'white');
		$('.name').css('color', 'white');
		$('.date').css('color', 'white');
		$('.description').css('color', 'white');
		$('.information').css('color', 'white');
	});
	
	$('.light_grey').click(function(){
		$('.main_title_1').css('color', 'rgba(175,175,175,1.00)');
		$('.main_title_2').css('color', 'rgba(175,175,175,1.00)');
		$('.main_title_3').css('color', 'rgba(175,175,175,1.00)');
		$('.main_title_4').css('color', 'rgba(175,175,175,1.00)');
		$('.sub_title_1').css('color', 'rgba(175,175,175,1.00)');
		$('.sub_title_2').css('color', 'rgba(175,175,175,1.00)');
		$('.sub_title_3').css('color', 'rgba(175,175,175,1.00)');
		$('.sub_title_4').css('color', 'rgba(175,175,175,1.00)');
		$('.right_title_1').css('color', 'rgba(175,175,175,1.00)');
		$('.right_title_2').css('color', 'rgba(175,175,175,1.00)');
		$('.right_title_3').css('color', 'rgba(175,175,175,1.00)');
		$('.right_title_4').css('color', 'rgba(175,175,175,1.00)');
		$('.left_lower_title').css('color', 'rgba(175,175,175,1.00)');
		$('.left_title').css('color', 'rgba(175,175,175,1.00)');
		$('.title').css('color', 'rgba(175,175,175,1.00)');
		$('.name').css('color', 'rgba(175,175,175,1.00)');
		$('.date').css('color', 'rgba(175,175,175,1.00)');
		$('.description').css('color', 'rgba(175,175,175,1.00)');
		$('.information').css('color', 'rgba(175,175,175,1.00)');
	});
	
	$('.dark_grey').click(function(){
		$('.main_title_1').css('color', 'rgba(87,87,87,1.00)');
		$('.main_title_2').css('color', 'rgba(87,87,87,1.00)');
		$('.main_title_3').css('color', 'rgba(87,87,87,1.00)');
		$('.main_title_4').css('color', 'rgba(87,87,87,1.00)');
		$('.sub_title_1').css('color', 'rgba(87,87,87,1.00)');
		$('.sub_title_2').css('color', 'rgba(87,87,87,1.00)');
		$('.sub_title_3').css('color', 'rgba(87,87,87,1.00)');
		$('.sub_title_4').css('color', 'rgba(87,87,87,1.00)');
		$('.right_title_1').css('color', 'rgba(87,87,87,1.00)');
		$('.right_title_2').css('color', 'rgba(87,87,87,1.00)');
		$('.right_title_3').css('color', 'rgba(87,87,87,1.00)');
		$('.right_title_4').css('color', 'rgba(87,87,87,1.00)');
		$('.left_lower_title').css('color', 'rgba(87,87,87,1.00)');
		$('.left_title').css('color', 'rgba(87,87,87,1.00)');
		$('.title').css('color', 'rgba(87,87,87,1.00)');
		$('.name').css('color', 'rgba(87,87,87,1.00)');
		$('.date').css('color', 'rgba(87,87,87,1.00)');
		$('.description').css('color', 'rgba(87,87,87,1.00)');
		$('.information').css('color', 'rgba(87,87,87,1.00)');
	});
	
	$('.main_color_title_2').on( "click",function(){
		$('.color_box_2').toggleClass('remove');
	});
	
});