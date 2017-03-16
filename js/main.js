$(document).ready(function($) {
	//developer funcitons
	pageWidget(['index', 'catalog', 'product', 'contacts']);
	getAllClasses('html', '.elements_list');
});

var $body,
	$menuTrigger;

$(document).ready(function($) {
	$body = $("body");
	$menuTrigger = $("#menu__trigger");

	$menuTrigger.on("click", function() {
		if ($body.hasClass("menu__open")) {
			$body.removeClass("menu__open");
			$(this).removeClass("active__mod");
		} else {
			$body.addClass("menu__open");
			$(this).addClass("active__mod");
		}
	});
});

// back to top
$("#back-top").hide();

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$("#back-top").fadeIn();
	} else {
		$("#back-top").fadeOut();
	}
});

$("#back-top").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 500);
	return false;
});

// - accordion
jQuery(document).ready(function() {
	var accordionsMenu = $(".sidebar__accordion");

	if (accordionsMenu.length > 0) {

		accordionsMenu.each(function() {
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on("change", "input[type='checkbox']", function() {
				var checkbox = $(this);
				console.log(checkbox.prop("checked"));
				(checkbox.prop("checked")) ? checkbox.siblings("ul").attr("style", "display:none;").slideDown(300): checkbox.siblings("ul").attr("style", "display:block;").slideUp(300);
			});
		});
	}
});

// call button
$("#call, #call-f").click(function() {
	$("#modal_call").addClass("modal--show");
	$(".modal_bg").css("display", "block");
});

$(".modal__close, .modal_bg").click(function() {
	$("#modal_call").removeClass("modal--show");
	$(".modal_bg").css("display", "none");
});

// easy form validate
// function validateForm(dir) {
// 	var form = dir;
// 	var name, phone;
// 	var error = [];
// 	// var checking;
// 	form.find("#order").html("");
// 	name = form.find("#name").val();
// 	phone = form.find("#phone").val();
// 	if (name === "") {
// 		error.push("Введите имя*");
// 	} else
// 	if (!/[А-Яа-яЁёa-zA-Z`\s]{1,100}/.test(name)) {
// 		error.push("*Мы ждём от Вас корректного имени");
// 	}
// 	if (phone === "") {
// 		error.push("Введите телефон*");
// 	} else
// 	if (!/[0-9()-\s+]{3,20}/.test(phone)) {
// 		error.push("*Введите корректный телефон");
// 	}
// 	if (error.length > 0) {
// 		$.each(error, function() {
// 			form.find(".errortext").append(this + "<br>");
// 		});
// 		return false;
// 	}
// 	return true;
// }

// $(".order-btn").on("submit", function(e) {
// 	var valid = validateForm($(this));
// 	if (!valid) {
// 		return false;
// 	}
// });
