(function ($) {
	'use strict';

	var deliciousaApp = {
		/* ---------------------------------------------
            ## Scroll top
         --------------------------------------------- */
		scroll_top: function () {
			$('body').append(
				"<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>"
			);
			var $scrolltop = $('#scroll-top');
			$(window).on('scroll', function () {
				if ($(this).scrollTop() > $(this).height()) {
					$scrolltop.addClass('btn-show').removeClass('btn-hide');
				} else {
					$scrolltop.addClass('btn-hide').removeClass('btn-show');
				}
			});
			$("a[href='#top']").on('click', function () {
				$('html, body').animate(
					{
						scrollTop: 0,
					},
					'normal'
				);
				return false;
			});
		},

		mobile_menu: function () {
			$('.site-navigation .mainmenu-wrap nav').meanmenu({
				meanMenuClose: 'X',
				meanMenuCloseSize: '18px',
				meanScreenWidth: '992',
				meanExpandableChildren: true,
				meanMenuContainer: '.mobile-menu',
			});
			if ($('.menu.right-menu').length) {
				var mobileLeftMenu = $(
					'.site-header .navigation-area .mainmenu-wrap .menu.right-menu ul li'
				)
					.clone()
					.appendTo('.mobile-menu .mean-bar .mean-nav ul');
			}
		},

	
		sticky_header: function () {
			if ($('#sticky-header').length) {
				var stickyMenu = $('.site-header').clone().appendTo('#sticky-header');
				$(window).on('scroll', function () {
					var w = $(window).width();
					if (w > 992) {
						if ($(this).scrollTop() > 350) {
							$('#sticky-header').slideDown(500);
						} else {
							$('#sticky-header').slideUp(500);
						}
					}
				});
			}
		},


		nav_scroller: function () {
			if ($('.site-header').length) {
				$('.menu ul').navScroll({
					mobileDropdown: true,
					mobileBreakpoint: 991,
					scrollSpy: true,
					navHeight: 65,
				});
			}
		},
		
		
	modal_popup: function(){
		$(document).ready(function(){
			$(".btn1").click(function(){
				$("#myModal").modal('show');
			});
		});
	},

		/* ---------------------------------------------
         function initializ
         --------------------------------------------- */
		initializ: function () {
			deliciousaApp.scroll_top();
			deliciousaApp.mobile_menu();
			deliciousaApp.sticky_header();
			deliciousaApp.nav_scroller();
			deliciousaApp.modal_popup()
		},
	};


	$(document).ready(function(){
		$(".btn").click(function(){
			$("#myModal").modal('show');
		});
	});
	/* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
	$(function () {
		deliciousaApp.initializ();
	});
})(jQuery);
