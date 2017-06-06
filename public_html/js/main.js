// menu mobile
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

// main_page slider init
$(function() {
  $("#da-slider").cslider();
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

// order btn
$(".activity__link--modal").click(function() {
  $("#modal_order").addClass("modal--show");
  $(".modal_bg").css("display", "block");
});

$(".modal__close, .modal_bg").click(function() {
  $("#modal_call, #modal_order").removeClass("modal--show");
  $(".modal_bg").css("display", "none");
});

// send order form
$("#order, #call_form, #modal_form").submit(function() {
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
		$("#modal_call, #modal_order").removeClass("modal--show");
    // open modal
    $("#modal_done").addClass("modal--show");
    $(".modal_bg").css("display", "block");
    // close modal
    $(".modal__close, .modal_bg").click(function() {
      $("#modal_done").removeClass("modal--show");
      $(".modal_bg").css("display", "none");
    });
    $("#order, #call_form, #modal_form").trigger("reset");
  });
  return false;
});
