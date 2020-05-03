(function($) {

	"use strict";
	
	/* ================ Choose your template theme color, skin and layout. ================ */
	
	var $theme		= 'light',		// available values: 'light','dark'.
		//$skin		= 'default',	// available values: 'default','1','2','3','4','5','6','7','8','9','10','11','12'.
		$layout		= 'wide',		// available values: 'wide','boxed'.
		$bodyclass	= 'bg1',		// available values: patterns : 'bg1','bg2','bg3','bg4','bg5','bg6','bg7','bg8','bg9','bg10' & fixed background images: 'bg11','bg12','bg13' // this will be applied on boxed layout only.
		//$rtl		= '1'			// 0 is false and 1 is true
		$page_transition	= '1';			// 0 to disable page transitions.
		
	var theme_css	= $('#theme_css').attr('href'),
		theme_name	= theme_css.substring(theme_css.lastIndexOf("/") + 1, theme_css.length),
		th_nam		= theme_name.replace('.css',''),
		theme_url 	= theme_css.replace(theme_name,'');
	
	if($theme == th_nam || th_nam == 'light'){
		$('#theme_css').attr('href',theme_url+$theme+'.css');
	}else{
		$('#theme_css').attr('href',theme_url+th_nam+'.css');
	}
	
	if($layout != 'wide'){
		$('.pageWrapper').addClass('boxed');
		$('body').addClass($bodyclass)
	}
	
	if($page_transition == '1'){
		$('.pageWrapper').addClass('animsition');
	}
	
	/********************* DEMO STYLE SWITCHER **********************/
	var soonURL 	= window.location.href.indexOf("coming-soon"),
		intro		= window.location.href.indexOf("home.html"),
		loginURL	= window.location.href.indexOf("login");
	
	if( soonURL >= 0 || loginURL >= 0 || intro >= 0){
		
	}else{
		
		$('body').prepend('<input type="hidden" id="mainCol" /><input type="hidden" id="darkerCol" /><input type="hidden" id="shapes" /><div class="tools"><a class="show-tools fa fa-cog" href="#"></a><div class="inner-tools"><h4 class="main-color bold uppercase">Style Settings</h4><div class="chang-style tools-block"><h5>Choose color</h5><input id="sel_color" type="text" /> </div><div class="tools-block"><h5>Choose Shapes</h5><div class="shapes"><ul><li><a id="new-angle" href="#"><span class="fa fa-bars angled md-icon main-bg"></span></a></li><li><a id="round" href="#"><span class="fa fa-bars round2 md-icon main-bg"></span></a></li><li><a id="border5px" href="#"><span class="fa fa-bars border5px md-icon main-bg"></span></a></li><li><a id="square" href="#"><span class="fa fa-bars md-icon main-bg"></span></a></li><li><a id="right-angle" href="#"><span class="fa fa-bars right-angle md-icon main-bg"></span></a></li><li><a id="left-angle" href="#"><span class="fa fa-bars left-angle md-icon main-bg"></span></a></li><li><a id="top-angle" href="#"><span class="fa fa-bars top-angle md-icon main-bg"></span></a></li><li><a id="bottom-angle" href="#"><span class="fa fa-bars bottom-angle md-icon main-bg"></span></a></li></ul></div></div><div class="tools-block"><h5>Change Layout</h5><div class="layout"><a class="btn btn-bordered wide-s" href="#">Wide</a> <a class="btn btn-bordered boxed-s" href="#">Boxed</a> </div></div><div class="tools-block"><h5>Theme Color</h5><div class="Main"><a class="btn btn-bordered light" data-link="assets/css/light.css" href="#">Light</a> <a class="btn btn-bordered dark" data-link="assets/css/dark.css" href="#">Dark</a> </div></div><div class="patterns tools-block"><h5>Boxed Layout Backgrounds</h5><ul><li><a class="bg1" href="#"></a></li><li><a class="bg2" href="#"></a></li><li><a class="bg3" href="#"></a></li><li><a class="bg4" href="#"></a></li><li><a class="bg5" href="#"></a></li><li><a class="bg6" href="#"></a></li><li><a class="bg7" href="#"></a></li><li><a class="bg8" href="#"></a></li><li><a class="bg9" href="#"></a></li><li><a class="bg10" href="#"></a></li><li><a class="bg11" href="#"></a></li><li><a class="bg12" href="#"></a></li><li><a class="bg13" href="#"></a></li></ul></div><div class="tools-block rtl-sel"><h5>RTL Layout</h5><input type="checkbox" class="checkbox" value="0" id="rtl" /> </div><div class="options"><a class="btn btn-default reset-s" href="#">Reset</a> <a class="btn btn-green download-s" href="#" data-toggle="modal" data-target="#down"><i class="fa fa-download"></i>GET Skin CSS</a> </div></div></div>');
				
		var toolLeft 		= $('.tools').css('left'),
			theme 			= $('#theme_css').attr('href'),
			skin			= $('#changeCol').html(),
			main_color 		= $('#mainCol').val(),
			darker_color 	= $('#darkerCol').val();			
		
		if (jQuery.cookie('rtl')) {
			var rtlV =  $.cookie('rtl');
			$('#rtl').val(rtlV);
		}
		
		if (jQuery.cookie('shapeC')) {
			var shapeV =  $.cookie('shapeC');
			$('#shapes').val(shapeV);
		}else{
			$('#shapes').val('new-angle');
		}

				
		if (jQuery.cookie('mainCol')) {
			var mainCol_v =  $.cookie('mainCol');
			$('#mainCol').val(mainCol_v);
		}else{
			var mainCol_v =  '#a9bf04';
		}
		
		if (jQuery.cookie('darkerCol')) {
			var darkerCol_v =  $.cookie('darkerCol');
			$('#darkerCol').val(darkerCol_v);
		}else{
			var darkerCol_v =  '#8ba100';
		}
		
		var defCol = '.feature-img:hover figure a,.full-heading.main-bg:before,.accordion.style-1 .panel>.panel-heading h4 a:not(.collapsed):before,.accordion.style-3 .panel>.panel-heading h4 a:not(.collapsed),.black-bg:hover>a,.blog-posts .post-item:hover .post-content,.box-5:hover,.bquote-2,.comment-list .comment-content h6,.dark-bg:not(.top-head):hover a,.darker-bg:hover a,.diamond.colored:after,.diamonds:hover,.diamonds:hover a,.feature-img2:hover figure a,.filter-by ul li:after,.filter-by.style-2 ul li.active a,.filter-by.style-3 ul li.active a,.filter-by:not(.style-2) ul li.active a,.filter-by:not(.style-3) ul li.active a,.flex-control-paging li a.flex-active,.footer-3 .footer-top .social-list li a:hover,.footer-middle h3:after,.head-4:after,.head-5:after,.head-8:before,.header-9 .top-nav>ul>li.mega-menu:hover>span:after,.header-9 .top-nav>ul>li.mega-menu:hover>span:before,.header-9 .top-nav>ul>li:not(.mega-menu):hover:after,.header-9 .top-nav>ul>li:not(.mega-menu):hover:before,.heading-full [class*=head-]:after,.heading-full [class*=head-]:before,.icon-box .filled i:hover,.icon-box.box-1 .outlined i:after,.icon-box.box-1.bordered .inner:after,.icon-box.box-1.bordered .inner:before,.icon-box.box-1.bordered:after,.icon-box.box-1.bordered:before,.icon-box.gry-border-1:hover,.icon-box.gry-border-2:hover h3,.icon-box:hover .filled i,.icons-style-1:hover .btn,.item-img .product-buttons a:hover,.list-grid a.selected,.login-box-lg .login-inner:after,.main-bg,.main-heading .heading-separator:after,.minimal-socials li a:hover,.modal-header,.nav-border-bottom li.mega-menu .inner-mega:after,.nav-border-bottom>ul>li:after,.nav-border-left li.mega-menu .inner-mega:after,.nav-border-left>ul>li:after,.nav-border-right li.mega-menu .inner-mega:after,.nav-border-right>ul>li:after,.nav-border-top li.mega-menu .inner-mega:after,.nav-border-top>ul>li:after,.on-sale,.owl-theme .owl-controls .owl-page.active span,.owl-theme .owl-controls.clickable .owl-page:hover span,.pagination ul li.selected,.pagination.bar-1 ul li a:hover,.pagination.bar-3 ul:after,.pagination.bottom-border ul li:hover,.portfolio-item .fav:hover,.portfolio-item .link:hover,.portfolio-item .zoom:hover,.post-icon,.post-item:hover .bottom_tools a,.pricing-tbl.style-1.selected .btn,.pricing-tbl.style-1:hover .btn,.pricing-tbl.style-2.selected .btn,.pricing-tbl.style-2.selected h3,.pricing-tbl.style-2:hover .btn,.pricing-tbl.style-2:hover h3,.pricing-tbl.style-3.selected,.pricing-tbl.style-3:hover,.pricing-tbl.style-4.selected .btn,.pricing-tbl.style-4.selected .plan-head,.pricing-tbl.style-4.selected .plan-head:after,.pricing-tbl.style-4.selected .plan-head:before,.pricing-tbl.style-4:hover .btn,.pricing-tbl.style-4:hover .plan-head,.pricing-tbl.style-4:hover .plan-head:after,.pricing-tbl.style-4:hover .plan-head:before,.progress-bars .bar .bar-in,.saf-tags.hover-effect li:hover,.side-one li a,.sidebar_widgets .widget-head:after,.sidebar_widgets li.widget:after,.sidebar_widgets li.widget:before,.slick-dots li.slick-active button,.social-list li:not(.main-bg) a:hover,.tabs-style-ballon .nav-tabs>li.active>a,.tabs-style-bg .nav-tabs>li.active a:after,.tabs-style-bottomline li.active:after,.tabs-style-lg.style-1 .nav-tabs>li.active>a,.team-box.box-1:hover .team-details,.team-box.box-2:hover,.team-box.box-2:hover .team-pos,.timeline .post-item .timeline_date .inner_date:before,.timeline .post-item .timeline_date:before,.top-bar .social-list li a:hover,.top-bar.main-bg li.dropdown ul,.top-head.boxed-transparent .bot-line,.top-head.boxed-transparent .logo:after,.top-head.boxed-transparent .logo:before,.top-head.header-2 .top-cart>a:before,.top-head.header-2 .top-nav>ul>li.selected>a,.top-head.header-2 .top-nav>ul>li.selected>span>a,.top-head.header-2 .top-nav>ul>li:hover>a,.top-head.header-2 .top-nav>ul>li:hover>span>a,.top-head.header-2 .top-search>a:before,.top-head.header-5 .top-nav>ul>li .inner-mega:before,.top-head.header-5 .top-nav>ul>li:before,.top-head.header-6 .top-nav>ul>li .inner-mega:before,.top-head.header-6 .top-nav>ul>li.mega-menu:hover>a,.top-head.header-6 .top-nav>ul>li:hover:before,.top-head.header-6 .top-nav>ul>li:hover>a:before,.top-head.header-6 .top-nav>ul>li>span>a:before,.top-head.header-8 .top-nav>ul>li.selected>a,.top-head.header-8 .top-nav>ul>li.selected>span>a,.top-head.header-8 .top-nav>ul>li:hover>a,.top-head.header-8 .top-nav>ul>li:hover>span>a,.top-nav.colored-submenu ul li ul,.top-shop-links a:hover,.tri-line:before,footer .tags li a:hover,footer .tags.hover-effect a:after,input[type=radio]:checked+label>span>span,li.outlined.rectangle:hover{\n	background-color:'+mainCol_v+';\n	color:#fff;\n	text-shadow:1px 1px 1px rgba(0,0,0,.15)\n}\n.inner-magazine .blog-posts .post-item:hover .post-content,.tp-caption.Photography-Menuitem:hover, .p-style5 figure .icon-links a:hover:before,.Photography-Menuitem:hover{\n	background-color:'+mainCol_v+' !important;\n}\n.accordion.style-1 .panel>.panel-heading h4 a:not(.collapsed),.accordion.style-4 .panel>.panel-heading h4 a:not(.collapsed),.big-heart:before,.blog-posts .post-item:hover .post-content .post-icon,.btn.main-border.btn-outlined,.divider i.to-top,.footer-bottom .footer-menu li a:hover,.footer-menu a:hover,.icon-box.box-1:hover .transparent i,.icon-box.box-1:hover h3,.icon-box.gry-border-1:hover i,.icons-style-1:hover .heading,.icons-style-1:hover i.animat-icon,.icons-style-2:hover .heading,.item-price,.main-color,.main-color a,.menu-widget li a:hover,.nav-animate>ul>li>a span:after,.nav-animate>ul>li>span>a span:after,.post-item .post-info h2 a,.pricing-tbl.style-1.selected .price-lg,.pricing-tbl.style-1.selected h3,.pricing-tbl.style-1:hover .price-lg,.pricing-tbl.style-1:hover h3,.pricing-tbl.style-2.selected .price-lg,.pricing-tbl.style-2:hover .price-lg,.pricing-tbl.style-4.selected .plan-head i,.pricing-tbl.style-4:hover .plan-head i,.side-nav>ul>li.hasChildren.selected:after,.side-nav>ul>li.hasChildren:hover:after,.side-nav>ul>li.selected>a,.side-nav>ul>li:hover>a,.social-list li.main-color a,.tabs nav ul li.active a,.testimonials-2 p:after,.testimonials-2 p:before,.timeline .post-item:nth-child(even) .timeline_date .day,.timeline .post-item:nth-child(even) .timeline_date .month,.top-bar ul li i,.top-head .top-nav>ul>li.selected>a,.top-head .top-nav>ul>li.selected>span>a,.top-head.dark-transparent .top-nav>ul>li:hover>a,.top-head.transparent .top-nav>ul>li.hasChildren:hover>a:after,.top-head.transparent .top-nav>ul>li:hover>a,.top-nav ul li a span:before,.top-nav ul li.selected>a,.top-nav ul li.selected>span>a,.top-nav ul li:hover>a,.top-nav>ul>li.hasChildren:hover>a:after,.top-nav>ul>li.hasChildren:hover>span>a:after,.tweets-widget .tweets_txt span,.widget-tweets a,.widget.custom-menu-widget ul li.selected:before,a:hover{\n	color:'+mainCol_v+'\n}\n.close-modal.main-color,.new-nav>ul>li.selected>a,.one-page .current a{\n	color:'+mainCol_v+' !important;\n}\n.accordion .panel.main-bg,.btn.main-bg,.contact-widget .social-list .diamond.outlined a:hover:after,.feature-img:hover figure:before,.flex-control-paging li a.flex-active,.heading-full [class*=head-],.icon-box.gry-border-2:hover,.icons-style-2 i,.img-icon,.main-border,.owl-theme .owl-controls .owl-page.active span,.owl-theme .owl-controls.clickable .owl-page:hover span,.pricing-tbl.selected,.pricing-tbl.style-4.no-margin.selected,.pricing-tbl.style-4.selected .plan-head:before,.pricing-tbl.style-4:hover .plan-head:before,.pricing-tbl:hover,.testimonials-2 .testimonials-img,.tri-line,footer .tags li:hover,footer .tags.hover-effect a:hover,li.outlined.circle:hover,li.outlined.rectangle:hover{\n	border-color:'+mainCol_v+'!important\n}\n.accordion.style-1 .panel>.panel-heading h4 a:not(.collapsed),.accordion.style-4 .panel>.panel-heading h4 a:not(.collapsed),.bquote-3,.filter-by,.head-3 b:before,.head-4 b:before,.icons-style-2:hover .heading,.inner-menu ul ul,.p-style4 .name-holder,.page-title.title-5 h3,.pagination.bottom-border ul li,.pricing-tbl.style-2:hover h3,.sidebar_widgets li.widget,.tabs-style-ballon .tab-content .tab-pane,.testimonials-3 .testimonials-bg,.toolsBar,.top-bar li ul,.top-search .search-box{\n	border-bottom-color:'+mainCol_v+'\n}\n.tabs-style-ballon.vertical .tab-content .tab-pane{\n	border-right-color:'+mainCol_v+'\n}\n.cart-box,.head-3 b:after,.pricing-tbl.style-2.selected h3:after,.pricing-tbl.style-2:hover h3:after,.pricing-tbl.style-2:hover h3:before,.tabs-style-default .nav-tabs>li.active>a,.tabs-style-default .nav-tabs>li.active>a:focus,.tabs-style-default .nav-tabs>li.active>a:hover{\n	border-top-color:'+mainCol_v+'\n}\n.bquote-3 span.bottom,.top-nav ul ul ul:before,.icon-box-small i.left-angle.main-bg b:before{\n	border-color:transparent '+mainCol_v+' transparent transparent\n}\n.bquote-3 .bottom:after,.bquote-4 span.main-bg:after,.feature-img:hover figure a:before,.tabs-style-bottomline li.active:before,#to-top:before{\n	border-color:transparent transparent '+mainCol_v+'\n}\n.icon-box-small i.right-angle.main-bg b:before,.head-triangle:after,.right-arrow.main-bg:after{\n	border-color:transparent transparent transparent '+mainCol_v+'\n}\n.accordion.style-4 .panel>.panel-heading h4 a:not(.collapsed):before,.filter-by.style-2 ul li.active:after,.filter-by.style-3 ul li.active:after,.heading-full-color .tri-angle-down,.tabs-style-ballon li.active a:after,.tabs-style-lg.style-1 .nav-tabs>li.active>a:before,.testimonials-3 .testimonials-bg:after{\n	border-color:'+mainCol_v+' transparent transparent\n}\n.tabs-style-bottomline li:last-child::after{\n	border-color:transparent '+mainCol_v+' transparent\n}\n.section-full-bg.main-bg .tri,.fun-icon.main-bg.lg-icon:after,.filter-by ul li.active a:after{\n	border-color:'+mainCol_v+' transparent transparent transparent\n}\n.icon-box .filled i:after{\n	box-shadow:0 0 0 1px '+mainCol_v+'\n}\n.btn.main-bg.btn-3d{\n	-webkit-box-shadow:0 5px 0 '+mainCol_v+';box-shadow:0 4px 0 '+mainCol_v+'\n}\n.inner-menu ul>li.selected>a,.inner-menu ul>li:hover>a,.post-item:hover .bottom_tools,.testimonials-1 .testimonials-bg:after,.testimonials-1 .testimonials-bg:before,.top-bar.main-bg .social-list li a:hover,.top-head .full.main-bg .top-nav>ul>li:hover,a.main-bg:hover{\n	background-color:'+darkerCol_v+'\n}\n.section-full-bg.alter-bg:before,.section-full-bg.alter-bg:after,.alter-bg,.btn.main-bg:hover,.side-nav>ul>li>ul li.selected,.side-nav>ul>li>ul li:hover,.social-list li.diamond:hover,.team-box .team-details .social-list li a:hover,.team-box.box-2:hover .team-name,.top-bar ul>li.dropdown.open>a,.top-bar ul>li>a:hover,.top-head .full.main-bg .top-nav>ul>li.selected{\n	background-color:'+darkerCol_v+';color:#fff\n}\n.lg-box:hover,.top-head.header-8 .top-nav>ul>li.selected>a,.top-head.header-8 .top-nav>ul>li.selected>span>a,.top-head.header-8 .top-nav>ul>li:hover>a,.top-head.header-8 .top-nav>ul>li:hover>span>a,.top-nav ul{\n	border-color:'+darkerCol_v+'\n}\n.testimonials-1 .testimonials-img:before{\n	border-color:transparent transparent transparent '+darkerCol_v+'\n}\n.testimonials-1 .testimonials-img:after{\n	border-color:transparent '+darkerCol_v+' transparent transparent\n}\n';
		
		$('head').append('<style id="changeCol" type="text/css">'+defCol+'</style>');
		
		if (jQuery.cookie('mainBg')) {
			var mainbgV =  $.cookie('mainBg');
			$('body').removeAttr('class').addClass(mainbgV);
		}
		
		if (jQuery.cookie('theme')) {
			var mainstV =  $.cookie('theme');
			if(mainstV == ".Main .light") {
				$('.Main .btn').removeClass('main-bg');
				$(".Main .light").addClass('main-bg');
				$('#theme_css').attr('href',$(".Main .light").attr('data-link'));
			}else {
				$('.Main .btn').removeClass('main-bg');
				$(".Main .dark").addClass('main-bg');
				$('#theme_css').attr('href',$(".Main .dark").attr('data-link'));
			}
		}

		if (jQuery.cookie('mainLayout')) {
			var mainlyV =  $.cookie('mainLayout');
			if(mainlyV == ".boxed-s") {
				$('.layout .btn').removeClass('main-bg');
				$('body').addClass('bg1');
				$('.pageWrapper').addClass('boxed');
				$('.boxed-s').addClass('main-bg');
			}else {
				$('.layout .btn').removeClass('main-bg');
				$('.wide-s').addClass('main-bg');
				$('body').removeAttr('class');
				$('.pageWrapper').removeClass('boxed');
			}
		}
		
		/* site tools */		
		$('.show-tools').on("click",function(e){
			e.preventDefault();
	    	if($(this).parent().css('left') == toolLeft){
	    		$(this).parent().animate({left:'0px'});
	    	}else if($(this).parent().css('left') == '0px'){
	    		$(this).parent().animate({left:toolLeft});
	    	}
		});
		
		var updateStyle = function (color){
			
			if(color) {
				main_color = color.toHexString();
				darker_color = LightenDarkenColor(main_color, -30);
			}
			
			skin = '.feature-img:hover figure a,.full-heading.main-bg:before,.accordion.style-1 .panel>.panel-heading h4 a:not(.collapsed):before,.accordion.style-3 .panel>.panel-heading h4 a:not(.collapsed),.black-bg:hover>a,.blog-posts .post-item:hover .post-content,.box-5:hover,.bquote-2,.comment-list .comment-content h6,.dark-bg:not(.top-head):hover a,.darker-bg:hover a,.diamond.colored:after,.diamonds:hover,.diamonds:hover a,.feature-img2:hover figure a,.filter-by ul li:after,.filter-by.style-2 ul li.active a,.filter-by.style-3 ul li.active a,.filter-by:not(.style-2) ul li.active a,.filter-by:not(.style-3) ul li.active a,.flex-control-paging li a.flex-active,.footer-3 .footer-top .social-list li a:hover,.footer-middle h3:after,.head-4:after,.head-5:after,.head-8:before,.header-9 .top-nav>ul>li.mega-menu:hover>span:after,.header-9 .top-nav>ul>li.mega-menu:hover>span:before,.header-9 .top-nav>ul>li:not(.mega-menu):hover:after,.header-9 .top-nav>ul>li:not(.mega-menu):hover:before,.heading-full [class*=head-]:after,.heading-full [class*=head-]:before,.icon-box .filled i:hover,.icon-box.box-1 .outlined i:after,.icon-box.box-1.bordered .inner:after,.icon-box.box-1.bordered .inner:before,.icon-box.box-1.bordered:after,.icon-box.box-1.bordered:before,.icon-box.gry-border-1:hover,.icon-box.gry-border-2:hover h3,.icon-box:hover .filled i,.icons-style-1:hover .btn,.item-img .product-buttons a:hover,.list-grid a.selected,.login-box-lg .login-inner:after,.main-bg,.main-heading .heading-separator:after,.minimal-socials li a:hover,.modal-header,.nav-border-bottom li.mega-menu .inner-mega:after,.nav-border-bottom>ul>li:after,.nav-border-left li.mega-menu .inner-mega:after,.nav-border-left>ul>li:after,.nav-border-right li.mega-menu .inner-mega:after,.nav-border-right>ul>li:after,.nav-border-top li.mega-menu .inner-mega:after,.nav-border-top>ul>li:after,.on-sale,.owl-theme .owl-controls .owl-page.active span,.owl-theme .owl-controls.clickable .owl-page:hover span,.pagination ul li.selected,.pagination.bar-1 ul li a:hover,.pagination.bar-3 ul:after,.pagination.bottom-border ul li:hover,.portfolio-item .fav:hover,.portfolio-item .link:hover,.portfolio-item .zoom:hover,.post-icon,.post-item:hover .bottom_tools a,.pricing-tbl.style-1.selected .btn,.pricing-tbl.style-1:hover .btn,.pricing-tbl.style-2.selected .btn,.pricing-tbl.style-2.selected h3,.pricing-tbl.style-2:hover .btn,.pricing-tbl.style-2:hover h3,.pricing-tbl.style-3.selected,.pricing-tbl.style-3:hover,.pricing-tbl.style-4.selected .btn,.pricing-tbl.style-4.selected .plan-head,.pricing-tbl.style-4.selected .plan-head:after,.pricing-tbl.style-4.selected .plan-head:before,.pricing-tbl.style-4:hover .btn,.pricing-tbl.style-4:hover .plan-head,.pricing-tbl.style-4:hover .plan-head:after,.pricing-tbl.style-4:hover .plan-head:before,.progress-bars .bar .bar-in,.saf-tags.hover-effect li:hover,.side-one li a,.sidebar_widgets .widget-head:after,.sidebar_widgets li.widget:after,.sidebar_widgets li.widget:before,.slick-dots li.slick-active button,.social-list li:not(.main-bg) a:hover,.tabs-style-ballon .nav-tabs>li.active>a,.tabs-style-bg .nav-tabs>li.active a:after,.tabs-style-bottomline li.active:after,.tabs-style-lg.style-1 .nav-tabs>li.active>a,.team-box.box-1:hover .team-details,.team-box.box-2:hover,.team-box.box-2:hover .team-pos,.timeline .post-item .timeline_date .inner_date:before,.timeline .post-item .timeline_date:before,.top-bar .social-list li a:hover,.top-bar.main-bg li.dropdown ul,.top-head.boxed-transparent .bot-line,.top-head.boxed-transparent .logo:after,.top-head.boxed-transparent .logo:before,.top-head.header-2 .top-cart>a:before,.top-head.header-2 .top-nav>ul>li.selected>a,.top-head.header-2 .top-nav>ul>li.selected>span>a,.top-head.header-2 .top-nav>ul>li:hover>a,.top-head.header-2 .top-nav>ul>li:hover>span>a,.top-head.header-2 .top-search>a:before,.top-head.header-5 .top-nav>ul>li .inner-mega:before,.top-head.header-5 .top-nav>ul>li:before,.top-head.header-6 .top-nav>ul>li .inner-mega:before,.top-head.header-6 .top-nav>ul>li.mega-menu:hover>a,.top-head.header-6 .top-nav>ul>li:hover:before,.top-head.header-6 .top-nav>ul>li:hover>a:before,.top-head.header-6 .top-nav>ul>li>span>a:before,.top-head.header-8 .top-nav>ul>li.selected>a,.top-head.header-8 .top-nav>ul>li.selected>span>a,.top-head.header-8 .top-nav>ul>li:hover>a,.top-head.header-8 .top-nav>ul>li:hover>span>a,.top-nav.colored-submenu ul li ul,.top-shop-links a:hover,.tri-line:before,footer .tags li a:hover,footer .tags.hover-effect a:after,input[type=radio]:checked+label>span>span,li.outlined.rectangle:hover{\n	background-color:'+main_color+';\n	color:#fff;\n	text-shadow:1px 1px 1px rgba(0,0,0,.15)\n}\n.inner-magazine .blog-posts .post-item:hover .post-content,.tp-caption.Photography-Menuitem:hover, .p-style5 figure .icon-links a:hover:before,.Photography-Menuitem:hover{\n	background-color:'+main_color+' !important;\n}\n.accordion.style-1 .panel>.panel-heading h4 a:not(.collapsed),.accordion.style-4 .panel>.panel-heading h4 a:not(.collapsed),.big-heart:before,.blog-posts .post-item:hover .post-content .post-icon,.btn.main-border.btn-outlined,.divider i.to-top,.footer-bottom .footer-menu li a:hover,.footer-menu a:hover,.icon-box.box-1:hover .transparent i,.icon-box.box-1:hover h3,.icon-box.gry-border-1:hover i,.icons-style-1:hover .heading,.icons-style-1:hover i.animat-icon,.icons-style-2:hover .heading,.item-price,.main-color,.main-color a,.menu-widget li a:hover,.nav-animate>ul>li>a span:after,.nav-animate>ul>li>span>a span:after,.post-item .post-info h2 a,.pricing-tbl.style-1.selected .price-lg,.pricing-tbl.style-1.selected h3,.pricing-tbl.style-1:hover .price-lg,.pricing-tbl.style-1:hover h3,.pricing-tbl.style-2.selected .price-lg,.pricing-tbl.style-2:hover .price-lg,.pricing-tbl.style-4.selected .plan-head i,.pricing-tbl.style-4:hover .plan-head i,.side-nav>ul>li.hasChildren.selected:after,.side-nav>ul>li.hasChildren:hover:after,.side-nav>ul>li.selected>a,.side-nav>ul>li:hover>a,.social-list li.main-color a,.tabs nav ul li.active a,.testimonials-2 p:after,.testimonials-2 p:before,.timeline .post-item:nth-child(even) .timeline_date .day,.timeline .post-item:nth-child(even) .timeline_date .month,.top-bar ul li i,.top-head .top-nav>ul>li.selected>a,.top-head .top-nav>ul>li.selected>span>a,.top-head.dark-transparent .top-nav>ul>li:hover>a,.top-head.transparent .top-nav>ul>li.hasChildren:hover>a:after,.top-head.transparent .top-nav>ul>li:hover>a,.top-nav ul li a span:before,.top-nav ul li.selected>a,.top-nav ul li.selected>span>a,.top-nav ul li:hover>a,.top-nav>ul>li.hasChildren:hover>a:after,.top-nav>ul>li.hasChildren:hover>span>a:after,.tweets-widget .tweets_txt span,.widget-tweets a,.widget.custom-menu-widget ul li.selected:before,a:hover{\n	color:'+main_color+'\n}\n.close-modal.main-color,.new-nav>ul>li.selected>a,.one-page .current a{\n	color:'+main_color+' !important;\n}\n.accordion .panel.main-bg,.btn.main-bg,.contact-widget .social-list .diamond.outlined a:hover:after,.feature-img:hover figure:before,.flex-control-paging li a.flex-active,.heading-full [class*=head-],.icon-box.gry-border-2:hover,.icons-style-2 i,.img-icon,.main-border,.owl-theme .owl-controls .owl-page.active span,.owl-theme .owl-controls.clickable .owl-page:hover span,.pricing-tbl.selected,.pricing-tbl.style-4.no-margin.selected,.pricing-tbl.style-4.selected .plan-head:before,.pricing-tbl.style-4:hover .plan-head:before,.pricing-tbl:hover,.testimonials-2 .testimonials-img,.tri-line,footer .tags li:hover,footer .tags.hover-effect a:hover,li.outlined.circle:hover,li.outlined.rectangle:hover{\n	border-color:'+main_color+'!important\n}\n.accordion.style-1 .panel>.panel-heading h4 a:not(.collapsed),.accordion.style-4 .panel>.panel-heading h4 a:not(.collapsed),.bquote-3,.filter-by,.head-3 b:before,.head-4 b:before,.icons-style-2:hover .heading,.inner-menu ul ul,.p-style4 .name-holder,.page-title.title-5 h3,.pagination.bottom-border ul li,.pricing-tbl.style-2:hover h3,.sidebar_widgets li.widget,.tabs-style-ballon .tab-content .tab-pane,.testimonials-3 .testimonials-bg,.toolsBar,.top-bar li ul,.top-search .search-box{\n	border-bottom-color:'+main_color+'\n}\n.tabs-style-ballon.vertical .tab-content .tab-pane{\n	border-right-color:'+main_color+'\n}\n.cart-box,.head-3 b:after,.pricing-tbl.style-2.selected h3:after,.pricing-tbl.style-2:hover h3:after,.pricing-tbl.style-2:hover h3:before,.tabs-style-default .nav-tabs>li.active>a,.tabs-style-default .nav-tabs>li.active>a:focus,.tabs-style-default .nav-tabs>li.active>a:hover{\n	border-top-color:'+main_color+'\n}\n.bquote-3 span.bottom,.top-nav ul ul ul:before,.icon-box-small i.left-angle.main-bg b:before{\n	border-color:transparent '+main_color+' transparent transparent\n}\n.bquote-3 .bottom:after,.bquote-4 span.main-bg:after,.feature-img:hover figure a:before,.tabs-style-bottomline li.active:before,#to-top:before{\n	border-color:transparent transparent '+main_color+'\n}\n.icon-box-small i.right-angle.main-bg b:before,.head-triangle:after,.right-arrow.main-bg:after{\n	border-color:transparent transparent transparent '+main_color+'\n}\n.accordion.style-4 .panel>.panel-heading h4 a:not(.collapsed):before,.filter-by.style-2 ul li.active:after,.filter-by.style-3 ul li.active:after,.heading-full-color .tri-angle-down,.tabs-style-ballon li.active a:after,.tabs-style-lg.style-1 .nav-tabs>li.active>a:before,.testimonials-3 .testimonials-bg:after{\n	border-color:'+main_color+' transparent transparent\n}\n.tabs-style-bottomline li:last-child::after{\n	border-color:transparent '+main_color+' transparent\n}\n.section-full-bg.main-bg .tri,.fun-icon.main-bg.lg-icon:after,.filter-by ul li.active a:after{\n	border-color:'+main_color+' transparent transparent transparent\n}\n.icon-box .filled i:after{\n	box-shadow:0 0 0 1px '+main_color+'\n}\n.btn.main-bg.btn-3d{\n	-webkit-box-shadow:0 5px 0 '+main_color+';box-shadow:0 4px 0 '+main_color+'\n}\n.inner-menu ul>li.selected>a,.inner-menu ul>li:hover>a,.post-item:hover .bottom_tools,.testimonials-1 .testimonials-bg:after,.testimonials-1 .testimonials-bg:before,.top-bar.main-bg .social-list li a:hover,.top-head .full.main-bg .top-nav>ul>li:hover,a.main-bg:hover{\n	background-color:'+darker_color+'\n}\n.section-full-bg.alter-bg:before,.section-full-bg.alter-bg:after,.alter-bg,.btn.main-bg:hover,.side-nav>ul>li>ul li.selected,.side-nav>ul>li>ul li:hover,.social-list li.diamond:hover,.team-box .team-details .social-list li a:hover,.team-box.box-2:hover .team-name,.top-bar ul>li.dropdown.open>a,.top-bar ul>li>a:hover,.top-head .full.main-bg .top-nav>ul>li.selected{\n	background-color:'+darker_color+';color:#fff\n}\n.lg-box:hover,.top-head.header-8 .top-nav>ul>li.selected>a,.top-head.header-8 .top-nav>ul>li.selected>span>a,.top-head.header-8 .top-nav>ul>li:hover>a,.top-head.header-8 .top-nav>ul>li:hover>span>a,.top-nav ul{\n	border-color:'+darker_color+'\n}\n.testimonials-1 .testimonials-img:before{\n	border-color:transparent transparent transparent '+darker_color+'\n}\n.testimonials-1 .testimonials-img:after{\n	border-color:transparent '+darker_color+' transparent transparent\n}\n';
						
			
			$('#changeCol').html(skin);
			$('#css_content').html('<pre>'+skin+'</pre>');
			$.cookie("mainCol", main_color , {path: '/'});
			$.cookie("darkerCol", darker_color , {path: '/'});
		}
			
		var LightenDarkenColor = function (col, amt) {
	  
			var usePound = false;
			if (col[0] == "#") {
				col = col.slice(1);
				usePound = true;
			}
			var num = parseInt(col,16);
			var r = (num >> 16) + amt;
			if (r > 255) r = 255;
			else if  (r < 0) r = 0;
			var b = ((num >> 8) & 0x00FF) + amt;
			if (b > 255) b = 255;
			else if  (b < 0) b = 0;
			var g = (num & 0x0000FF) + amt;
			if (g > 255) g = 255;
			else if (g < 0) g = 0;
			return (usePound?"#":"") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
		
		}
		
		$('#sel_color').spectrum({
			flat:true,
			move:updateStyle,
			showInput: false,
			showButtons: false,
			color: mainCol_v,
			containerClassName: 'col-wrapper',
			showPalette: true,
			maxSelectionSize: 15,
		    palette: [ ],
		    showSelectionPalette: false,
		    selectionPalette: ["#1828ff", "#ed79e9", "#bf3404", "#880590", "#19e1ff", "#b90000", "#188283", "#da54e2", "#cac302", "#329900", "#00cdf2", "#fa1111", "#a9bf04"]
		});
		
		var $rtl = $('#rtl'),
			$rt;
		
		$rtl.on("click",function(){
			if($($rtl).attr('value') == '0'){
				$('head').append('<link rel="stylesheet" id="rtl-css" href="assets/css/rtl.css">');
				$.cookie("rtl", 1 , {path: '/'}  );
				$('.horizontal-slider,.slick-gal,.posts-gal,.break-news-slider,.banner-slick,.shop-ads-top,.product-zoom').css('direction','ltr');
			}else{
				$('#rtl-css').remove();
				$('.horizontal-slider,.slick-gal,.posts-gal,.break-news-slider,.banner-slick,.shop-ads-top,.product-zoom').css('direction','ltr');
				$.cookie("rtl", 0 , {path: '/'}  );
			}
		});
		
		$('.shape,html').addClass($('#shapes').val());
		$('.shapes ul li a[id='+$('#shapes').val()+']').addClass('selected');
		var allIDS = $(".shapes li a[id]").map(function() { return this.id; }).get();
  		
  		$('.shapes li').each(function(){
			$(this).find('a').on("click",function(e){
				e.preventDefault();
				$(".shapes li a").removeClass('selected');
				$(this).addClass('selected');
				var thisID = $(this).attr('id');
				$('.shape,html').removeClass(allIDS.join(" ")).addClass(thisID);
				$('#shapes').val(thisID);
				$.cookie("shapeC", thisID , {path: '/'}  );
			});
			
		});
		
		if($($rtl).attr('value') == '1'){
			$('head').append('<link rel="stylesheet" id="rtl-css" href="assets/css/rtl.css">');
			$('.horizontal-slider,.slick-gal,.posts-gal,.break-news-slider,.banner-slick,.shop-ads-top').css('direction','ltr');
		}
		
		
		/* wide - boxed */
		$('.wide-s').on("click",function(e){
			e.preventDefault();
			$('.pageWrapper').removeClass('boxed');
			$('.layout .btn').removeClass('main-bg');
			$(this).addClass('main-bg');
			$('body').removeAttr('class');
			$('#container,#masonry,#grid').isotope( 'reloadItems' ).isotope();
			$.cookie("mainLayout", '.wide-s' , {path: '/'}  );
		});
		
		$('.boxed-s').on("click",function(e){
			e.preventDefault();
			$('.pageWrapper').removeClass('boxed').addClass('boxed');
			$('.layout .btn').removeClass('main-bg');
			$(this).addClass('main-bg');
			$('body').addClass('bg1');
			$('#container,#masonry,#grid').isotope( 'reloadItems' ).isotope();
			$.cookie("mainLayout", '.boxed-s' , {path: '/'}  );
		});
		
		/* light - dark */
		$('.Main .light').each(function(){
			$(this).on("click",function(e){
				e.preventDefault();
				theme = $(this).attr('data-link');
				$('.Main .btn').removeClass('main-bg');
				$(this).addClass('main-bg');
				$('#theme_css').attr('href',theme);
				$.cookie("theme", '.Main .light' , {path: '/'}  );
			});
		});
		
		$('.Main .dark').each(function(){
			$(this).on("click",function(e){
				e.preventDefault();
				theme = $(this).attr('data-link');
				$('.Main .btn').removeClass('main-bg');
				$(this).addClass('main-bg');
				$('#theme_css').attr('href',theme);
				$.cookie("theme", '.Main .dark' , {path: '/'}  );
			});
		});
	
		/* patterns select */
		$('.patterns li').each(function(){
			var thisClass = $(this).find('a').attr('class');
			$(this).find('a').css('background','url("assets/images/patterns/'+thisClass+'.jpg")');
			$(this).find('a').on("click",function(e){
				e.preventDefault();
				if($('.pageWrapper').hasClass('boxed')){
					$('body').removeAttr('class').addClass(thisClass);
					$.cookie("mainBg", thisClass , {path: '/'}  );
				}else{
					alert('Please select Boxed Layout to apply the patterns.');
				}
			});
		});
		
		$('.reset-s').on("click",function(e){ 
			e.preventDefault();
			if($('.boxed-s').hasClass( "main-bg" )) {
				$('body').removeAttr('class');
				$('.pageWrapper').removeClass('boxed');
				$('.wide-s').addClass('main-bg');
				}
			$('#theme_css').attr('href',$(".Main .light").attr('data-link'));	
			$.cookie("theme", '.Main .light', { path: '/' });
			$('#changeCol').html('');
			$.cookie("mainCol", "#a9bf04" , {path: '/'});
			$.cookie("darkerCol", "#8ba100" , {path: '/'});
			$.cookie("mainBg", 'bg1', { path: '/' });
			$.cookie("mainLayout", '.wide-s', { path: '/' });
			$($rtl).attr('value','0');
			$.cookie("rtl", 0 , {path: '/'}  );
			$.cookie("shapeC", 'new-angle' , {path: '/'}  );
			$('.shape,html').removeClass(allIDS.join(" ")).addClass('new-angle');
			$('.shapes ul li:first-child a').addClass('selected');
			$('#shapes').val('new-angle');
			$('#rtl-css').remove();
			$($rtl).parent().removeClass("main-bg selected");
			$rt = false;
			$('.horizontal-slider,.slick-gal,.posts-gal,.break-news-slider,.banner-slick,.shop-ads-top').slick('unslick');
			runSlick();
			animatetweets();
			
			return false;
		});
		
		$('body').append('<div id="down" tabindex="-1" role="dialog" class="modal fade down-modal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="gridSystemModalLabel">Download Skin CSS file </h4> </div><div id="css_content" class="modal-body"><pre>'+$('#changeCol').html()+'</pre></div><div class="modal-footer"><a class="btn btn-small main-bg style-save" href="#">Download File</a></div></div></div></div>');
		
		var download = function (filename, text) {
		    var pom = document.createElement('a');
		    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		    pom.setAttribute('download', filename);
		
		    if (document.createEvent) {
		        var event = document.createEvent('MouseEvents');
		        event.initEvent('click', true, true);
		        pom.dispatchEvent(event);
		    }
		    else {
		        pom.click();
		    }
		}
		
		$('.style-save').on("click",function(e){ 
			e.preventDefault();
			download('skin.css', $('#changeCol').html());		
		});
		
		
	}

	
	/* ================ Page Preloader wrap inner. ================ */
	$('.page-loader').html('<div class="inner-l"><span></span><span></span><span></span></div>');
	
	/* ================ Check for Mobile. ================ */
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	 	$('html').addClass('touch');
	}else{
		$('html').addClass('no-touch');
	}
	$('.touch .fx').addClass('animated'); // disables mobile animations
		
	var ScrlTop = $(window).scrollTop();
	
	/* ================ Top Menu. ================ */
	var mnav = $('.nav-animate.top-nav > ul');
	var mainnav = $('.top-nav > ul');
	
	mnav.find(' > li').each(function(){
		var txtH = $(this).find('> a').text();
		$(this).find('> a').wrapInner('<span data-hover="'+txtH+'"/>');
	});
	mainnav.find('li').not('.mega-menu li').each(function(){
		var submenu = $(this).find('> ul');
		if (submenu.length){
			$(this).addClass('hasChildren');
		}
	});
	
	mainnav.find('li.mega-menu').each(function(){
		$(this).find('> a').wrap('<span class="inner-mega"></span>');
	});
	
	/* =================== Side Nav ===================== */
	if($('.header-left').length > 0){
		$('.pageWrapper').addClass('left-side-wrap');
	}
	if($('.header-right').length > 0){
		$('.pageWrapper').addClass('right-side-wrap');
	}
	if($('.side-nav').length > 0){
		var side_menu = $('.side-nav > ul'),
			items = side_menu.find('li');
		side_menu.find('ul').addClass('main-bg');
		items.each(function(){
			var ul = $(this).find('ul:first');
			if (ul.length){
				$(this).addClass('hasChildren');
			}
		});
	}
	
	/* ================ Show Hide Search box. ================ */
	$('.top-search .search-box').prepend('<a href="#" class="close-srch fa fa-times">X</a>');
	$('.top-search > a').on("click",function(){
		var sbox = $(this).parent().find('.search-box');
		if(sbox.is(':visible')){
			$(this).parent().find('.srch-overlay').remove();
			sbox.hide().removeClass('animated zoomInDown').addClass('fx');
			return false;
		}else{
			$(this).parent().append('<div class="srch-overlay"/>');
			sbox.show().delay(500).removeClass('fx').addClass('animated zoomInDown');
			return false;
		}
	});
	$('.close-srch').on("click",function(e){
		$(this).parent().parent().find('.srch-overlay').fadeOut(500).remove();
		$(this).parent().parent().find('.search-box').hide().removeClass('animated zoomInDown').addClass('fx');
		return false;
	});
	
	
	/* ================ Show Hide Cart box. ================ */
	$('.top-cart > a').on("click",function(){
		if($(this).parent().find('.cart-box').is(':visible')){
			$(this).parent().removeClass('selected').find('.cart-box').fadeOut(300);
			return false;
		}else{
			$(this).parent().addClass('selected').find('.cart-box').fadeIn(300);
			return false;
		}
	});
	
	$(document).on("mouseup",function(e){
		if($('.cart-box').is(':visible')){
			var targ = $(".cart-box");
			if (!targ.is(e.target) && targ.has(e.target).length === 0){
			$('.cart-box').fadeOut(300);
			$('.top-cart').removeClass('selected');
			}
		}
	});
	
	/* ================ Responsive Menu ================= */
	if($('.responsive-nav').length){
		
		var responsnav = $('.responsive-nav').find('nav').html();
		$('.pageWrapper').prepend('<a class="navbtn" href="#"><i class="fa fa-navicon"></i></a><div class="new-nav">'+responsnav+'</div>');
		$('.navbtn').on("click",function(e){
			e.preventDefault();
			if($('.pageWrapper').hasClass('responsive-body')){
				$(this).removeClass('active').find('i').removeClass('fa-times').addClass('fa-navicon');
				$('.new-nav').removeClass('active');
				$('.pageWrapper').removeClass('responsive-body');
				return false;
			}else{
				$(this).addClass('active').find('i').addClass('fa-times').removeClass('fa-navicon');
				$('.new-nav').addClass('active');
				$('.pageWrapper').addClass('responsive-body');
				return false;
			}
		});
		
		$('.new-nav li.hasChildren').find(' > a[href="#"]').on("click",function(e){
			e.preventDefault();
			$(this).parent().find('> ul').slideToggle();
			$(this).parent('li.hasChildren').toggleClass('active');
			return false;
		});
		
		$('.new-nav li.mega-menu.hasChildren').find('span.inner-mega > a[href="#"]').on("click",function(e){
			e.preventDefault();
			$(this).parent().parent().find('> ul').slideToggle();
			$(this).parent().parent('li.hasChildren').toggleClass('active');
			return false;
		});
		
		$('.new-nav li.hasChildren.mega-menu').find(' h4').on("click",function(e){
			e.preventDefault();
			$(this).parent().find('> ul').slideToggle();
			$(this).parent('li.hasChildren').toggleClass('active');
			return false;
		});
	}
	
	/* adjust submenu positions */
	var $sub = $('.top-nav ul ul');
	if($sub.length && $('.container').length){
		var $c = $('.container').width() + $('.container').offset().left + 30;
		$sub.each(function(){
			var $lft = $(this).offset().left + $(this).width() - 10;
			if( $lft > $c){
				$(this).addClass('rit-menu');
			}
		});
	}
	
	/* ================ boxed transparent header bottom line function =================== */
	if($('.top-head.boxed-transparent').length){
		var main_cont = $('.top-head.boxed-transparent > .container'),
			mW = main_cont.width(),			
			WW;
			
			if ($('.top-head.boxed-transparent .top-nav > ul > li.selected').length > 0){
				var selOff = $('.top-head.boxed-transparent .top-nav > ul > li.selected').offset().left,
					mOff = main_cont.offset().left,
					defW = selOff - mOff + ($('.top-head.boxed-transparent .top-nav > ul > li.selected').width() + 10);
					main_cont.append('<span class="bot-line"></span><span class="lft-line main-bg"></span>');
					$('.bot-line').css('width',defW + 'px');
			}else{
				var selOff = $('.top-head.boxed-transparent .logo').addClass('no-lines');
			}
		
		
		$('.top-head.boxed-transparent .top-nav > ul > li').each(function(){
			var thisOff = $(this).offset().left,
				thisW	= $(this).width() + 10;
			$(this).hover(function(){
				WW = thisOff - mOff + thisW;
				$('.bot-line').css('width',WW + 'px');
			},function(){
				$('.bot-line').css('width',defW + 'px');
			});
		});
	}
		
	/* ================ Back to top button. ================ */
	if (ScrlTop > 1) {
		$('#to-top').css({'transform':'translate3d(0,0,0)'});
	} else {
		$('#to-top').css({'transform':'translate3d(50px,50px,0)'});
	}
	$('#to-top,.divider .to-top').on("click",function(){
		$('html, body').animate({scrollTop: '0px'}, 800);
		return false;
	});
				
	/* ================ social links copy :after icon. ================ */
	$('.social-list li a').each(function(){
    	var contt = window.getComputedStyle(this,':before').content.replace(/\'/g, "").replace(/\"/g, "");
    	$(this).attr('data-hover',contt);
	});
	
	/* ================ Message boxes clode buttons. ================ */
	$('.msg-box').each(function(){
		$(this).prepend('<a class="close fa fa-times" href="#"></a>');
		$(this).find('a.close').on("click",function(e){
			e.preventDefault();
			$(this).parent().addClass('animated zoomOut').delay(500).queue(function(n) {
			  $(this).remove();
			});
			return false;
		});
	});
	
	/* ================ pager bar 3. ================ */
	$('.pagination.bar-3 ul').append('<div class="pager-slider"></div>');
	var page_n  = $('.pagination.bar-3 ul li.selected'),
		sel_pag = page_n.prevAll('li').length,
		sel_off = (sel_pag*40)+80;
	setTimeout(function(){
		$('.pager-slider').animate({width:sel_off+'px'},300);
	},2000);
	
	
	/* ================ Tabs. ================ */
	$('.nav-tabs a').on("click",function(e) {
		e.preventDefault();
		$(this).tab('show');
		return false;
	})
		
	$('.login-popup').on("click",function(e) {
		e.stopPropagation();
		return false;
	});
    
	$('.dropdown').on('show.bs.dropdown', function(e){
		var $dropdown = $(this).find('.dropdown-menu');
		var orig_margin_top = parseInt($dropdown.css('margin-top'),10);
		$dropdown.css({'margin-top': (orig_margin_top + 20) + 'px', opacity: 0}).animate({'margin-top': orig_margin_top + 'px', opacity: 1}, 300, function(){
			$(this).css({'margin-top':''});
		});
	});
   
	// Add slidedown & fadeout animation to dropdown
	$('.dropdown').on('hide.bs.dropdown', function(e){
		var $dropdown = $(this).find('.dropdown-menu');
		var orig_margin_top = parseInt($dropdown.css('margin-top'),10);
		$dropdown.css({'margin-top': orig_margin_top + 'px', opacity: 1, display: 'block'}).animate({'margin-top': (orig_margin_top + 20) + 'px', opacity: 0}, 300, function(){
			$(this).css({'margin-top':'', display:''});
		});
	});
	
	/* ================ Accordions. ================ */
	$('.accordion').collapse({
		toggle: false
	});
	$('.accordion.style-2 [data-toggle="collapse"]').each(function(){
		$(this).on("click",function(e) {
			e.preventDefault();
			var $par = $(this).parent().parent().parent();
			if(!$par.hasClass('main-bg')){
				$par.parent().find('.panel').removeClass('main-bg');
				$par.addClass('main-bg');
			}else{
				$par.removeClass('main-bg')
			}
		});
	});	
	
	/* ================ circliful charts. ================ */
	$('.c-chart').each(function(){
		$(this).waypoint(function() {
			$(this).circliful();
			var LH = $(this).find('.circle-text').css('line-height'),
				half = parseInt($(this).find('.circle-text-half').css('height'),10);
			if ($(this).hasClass('bottom-txt')){
				$(this).find('.fa').css('line-height',LH);
			}
			if ($(this).attr('data-type') == 'half'){
				$(this).css('height',half-48+'px');
			}
		},{offset: '90%',triggerOnce: true});
	});
	
	
	/* ================ Counter. ================ */
	$('.odometer').each(function(){
		$(this).waypoint(function() {
			var the = $(this),
			timerss = the.attr('data-timer');
			var timeout = setTimeout(function(){
				var initVal = the.attr('data-initial'),
				currVal = the.attr('data-value');
				the.html(currVal);
			},timerss);
		},{offset: '90%',triggerOnce: true});
	});	
	
	/* ================ flickr Photos. ================ */
	if ($('#flickrFeed').length > 0){    
		$('#flickrFeed').jflickrfeed({
			limit: 8,
			qstrings: {
			id: '45409431@N00'
		},
		itemTemplate: '<li><a href="{{image_b}}" class="zoom"><img src="{{image_s}}" alt="{{title}}" /><span class="img-overlay"></span></a></li>'
		});
	}
	
	/* flickr Photos many items. */
	if ($('#flickrFeed2').length > 0){    
		$('#flickrFeed2').jflickrfeed({
			limit: 16,
			qstrings: {
			id: '45409431@N00'
		},
		itemTemplate: '<li><a href="{{image_b}}" class="zoom"><img src="{{image_s}}" alt="{{title}}" /><span class="img-overlay"></span></a></li>'
		});
	}
	
	/* flickr Photos about me. */
	if ($('#flickrFeed3').length > 0){    
		$('#flickrFeed3').jflickrfeed({
			limit: 8,
			qstrings: {
			id: '45409431@N00'
		},
		itemTemplate: '<li><a href="{{image_b}}" class="zoom"><img src="{{image_s}}" alt="{{title}}" /><span class="img-overlay"></span></a></li>'
		});
	}
		
	/* ================ Coming Soon CountDown. ================ */
	if($(".digits").length > 0){
		$('.digits').countdown('2020/10/10').on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime('<ul>'
			+ '<li><span>%-w</span><p> week%!w </p> </li>'
			+ '<li><span>%-d</span><p> day%!d </p></li>'
			+ '<li><span>%H</span><p>Hours </p></li>'
			+ '<li><span>%M</span><p> Minutes </p></li>'
			+ '<li><span>%S</span><p> Seconds </p></li>'
			+'</ul>'));
		});
	}
    
    /* ================ Portfolio Filterable IsoTope. ================ */
	if($('#container').length){
		var $container = $('#container').isotope({
			layoutMode: 'fitRows'
		});
				
		$container.imagesLoaded( function() {
			$container.isotope();
		});
		
		$('#filters').on( 'click', 'a.filter', function(e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$container.isotope({ filter: filterValue });
			var $this = $(this);
			if ( $this.parent().hasClass('active') ) {
				return false;
			}
			var $optionSet = $this.parents('#filters');
			$optionSet.find('.active').removeClass('active');
			$this.parent().addClass('active');
		});
	}
	
	/* ================ Masonry IsoTope. ================ */
	if($('#masonry').length){
		var $masonry = $('#masonry').isotope({
			layoutMode: 'masonry',
			isFitWidth: true
		});
		
		$masonry.imagesLoaded( function() {
			$masonry.isotope();
		});
		
		$('#filters').on( 'click', 'a.filter', function(e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$masonry.isotope({ filter: filterValue });
			var $this = $(this);
			if ( $this.parent().hasClass('active') ) {
				return false;
			}
			var $optionSet = $this.parents('#filters');
			$optionSet.find('.active').removeClass('active');
			$this.parent().addClass('active');
		});
	}
	
	/* ================ Grid IsoTope. ================ */
	if($('#grid').length){
		var $grid = $('#grid').isotope({
			layoutMode: 'fitRows'
		});
		$grid.imagesLoaded( function() {
			$grid.isotope();
		});
	}
	
	/* ================ Social share blog buttons plugin. ================ */
	if($('#shareme').length){
		$('#shareme').sharrre({
			share: {
				twitter: true,
				facebook: true,
				googlePlus: true,
				linkedin: true
			},
			template: '<ul class="social-list"><li class="md-icon"><a href="#" data-toggle="tooltip" data-placement="top" title="facebook" class="fa fa-facebook facebook"></a></li><li class="md-icon"><a href="#" data-toggle="tooltip" data-placement="top" title="twitter" class="fa fa-twitter twitter"></a></li><li class="md-icon"><a href="#" data-toggle="tooltip" data-placement="top" title="google plus" class="fa fa-google-plus googleplus"></a></li><li class="md-icon"><a href="#" data-toggle="tooltip" data-placement="top" title="linkedin" class="fa fa-linkedin linkedin"></a></li><li class="md-icon no-icon"><a class="dark-bg">{total}</a></li></ul>',
			enableHover: false,
			enableTracking: true,
			url: document.location.href,
			render: function(api, options){
				$(api.element).on('click', '.twitter', function(e) {
					e.preventDefault();
					api.openPopup('twitter');
				});
				$(api.element).on('click', '.facebook', function(e) {
					e.preventDefault();
					api.openPopup('facebook');
				});
				$(api.element).on('click', '.googleplus', function(e) {
					e.preventDefault();
					api.openPopup('googlePlus');
				});
				$(api.element).on('click', '.linkedin', function(e) {
					e.preventDefault();
					api.openPopup('linkedin');
				});
				
				$('.social-list li a').each(function(){
			    	var contt = window.getComputedStyle(this,':before').content.replace(/\'/g, "").replace(/\"/g, "");
			    	$(this).attr('data-hover',contt);
				});
			}
		});
	}
	
	/* ================ Slick Sliders. ================ */
	
	var runSlick = function() {
	
		/* Horizontal slider */
		if($('.horizontal-slider').length > 0){
			
			$('.horizontal-slider').each(function(){
				var slides_n 	= parseInt($(this).attr('data-slides_count'),10),
					sscrol 		= parseInt($(this).attr('data-scroll_amount'),10),
					t_infinite 	= $(this).attr('data-slider-infinite'),
					t_arr 		= $(this).attr('data-slider-arrows'),
					speed_n 	= $(this).attr('data-slider-speed'),
					t_fade 		= $(this).attr('data-slider-fade'),
					t_dots 		= $(this).attr('data-slider-dots'),
					t_auto 		= $(this).attr('data-slider-auto'),
					fd 			= false,
					tinfinite 	= false,
					aut 		= false,
					arr 		= true,
					tdots 		= true,
					resp_n 		= 1;
				
				
				if(t_infinite == '1'){
					tinfinite = true;
				}
				if(t_auto == '1'){
					aut = true;
				}
				if(t_fade == '1'){
					fd = true;
				}
				if(t_arr == '0'){
					arr = false;
				}
				if(t_dots == '0'){
					tdots = false;
				}				
				if(slides_n > 2){
					resp_n = 2;
				}
				
				$(this).slick({
					slidesToShow: slides_n,
					slidesToScroll: sscrol,
					dots: tdots,
					infinite: tinfinite,
					speed: speed_n,
					rtl: $rt,
					fade: fd,
					autoplay: aut,
					arrows: arr,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: resp_n,
							slidesToScroll: resp_n
						}
					},
					{
						breakpoint: 640,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
				    }
				  ]
				});
			});
		}
		
		$('.slick-gal,.posts-gal').slick({
			dots: true,
			rtl: $rt,
			arrows: false,
		});		
				
		/* breaking news */
		$('.break-news-slider').slick({
			dots: false,
			arrows: true,
			vertical: true,
			rtl: $rt,
			slidesToShow: 1,
			touchMove: true,
			slidesToScroll: 1,
			autoplay:true
		});
		
		/* banner slick */
		$('.banner-slick').slick({
			dots: false,
			arrows: false,
			vertical: true,
			rtl: $rt,
			slidesToShow: 1,
			touchMove: true,
			slidesToScroll: 1,
			autoplay:true
		});
		
		$('.t_slider-1').each(function(){
			$(this).find('.slick-dots,.slick-prev,.slick-next').wrapAll('<div class="slider_controls" />');
		});
				
		/* shop slider */
		if($('.shop-ads-top').length){
			$('.shop-ads-top').slick({
				dots: true,
				rtl: $rt,
				infinite: true,
				autoplay: true,
				speed: 300,
				slidesToShow: 1,
				touchMove: true,
				arrows:false,
				slidesToScroll: 1
			});
		}
		
		/* ================= Product images zoom =============== */
		if($(".product-zoom").length){
			$('.product-zoom').slick({
				dots: true,
				rtl: $rt,
				arrows: false,
				autoplay: true,
				customPaging: function(slider, i) { 
				var sl = $(slider.$slides[i]).find('.zoom').attr('href');
				return '<img src=' + sl + ' />';
				},
			});
		}
	}
	
	runSlick();
	
	/* ================= Grid - List view =============== */
	$('.list-btn').on("click",function() {
		$('.grid-list').addClass('list');
		$('.grid-btn').removeClass('selected');
		$(this).addClass('selected');
		return false;
	});
	$('.grid-btn').on("click",function() {
		$('.grid-list').removeClass('list');
		$('.list-btn').removeClass('selected');
		$(this).addClass('selected');
		return false;
	});
	
	
	/* ================= increase decrease items textbox =============== */
	var num = $('#items-num').val();
	$('.add-items i.fa-plus').on("click",function(e){
		e.preventDefault();
		num ++;
		$('#items-num').attr('value',num);
		return false;
	});
	$('.add-items i.fa-minus').on("click",function(e){
		e.preventDefault();
		if (num > 1){
			num --;
			$('#items-num').attr('value',num);
		}
		return false;
	});
	
	
	/* ================= ajax Magnific popup =============== */
	
	$('.ajax-popup').magnificPopup({
		type: 'ajax',
		preloader: 'true',
		mainClass: '.mpf',
		closeOnContentClick: false,
		callbacks: {
			ajaxContentAdded: function() {
				this.content.addClass('newEff');
				this.content.find('.pro-img-slick').slick({
					dots: false,
					rtl: $rt,
					arrows: true,
				});
				var num = $('#items-num').val();
				$('.add-items i.fa-plus').on("click",function(e){
					e.preventDefault();
					num ++;
					$('#items-num').attr('value',num);
				});
				$('.add-items i.fa-minus').on("click",function(e){
					e.preventDefault();
					if (num > 1){
						num --;
						$('#items-num').attr('value',num);
					}
					return false;
				});
			}
		}
	});
	
	/* ================= Camera SlideShow =============== */	
	if($('.magazine-gallery').length){
		$('.magazine-gallery').camera({
			height: '400px',
			loader: 'none',
			pagination: false,
			thumbnails: true,
			fx: 'scrollTop'
		});
	}
	
	if($('.camera-slider').length){
		$('.camera-slider').camera({
			height: '600px',
			loader: 'none',
			pagination: true,
			thumbnails: true,
			fx: 'scrollTop'
		});
	}
	
	if($('.camera-slider-boxed').length){
		$('.camera-slider-boxed').camera({
			height: '600px',
			loader: 'none',
			pagination: false,
			thumbnails: true,
			fx: 'scrollTop'
		});
	}
		
	/* ================ Checkbox Styling. ================ */
/*	var checkBox = $('.checkbox');
	$(checkBox).each(function(){
		$(this).wrap( "<span class='custom-checkbox'></span>" );
		if($(this).attr('value') == '1'){
			$(this).parent().addClass("selected main-bg");
		}
	});
	$(checkBox).on("click",function(){
		$(this).parent().toggleClass("selected main-bg");
		if ($(this).attr('value') == '1'){
			$(this).attr('value','0');
		}else{
			$(this).attr('value','1');
		}
		return false;
	});
	$('.custom-checkbox').append('<div class="switcher"/>');
	
	$('.custom-radio').find('label').prepend('<span><span></span></span>');*/
	
	var checkBox = $('.checkbox');
	$(checkBox).each(function(){
		$(this).wrap( "<span class='custom-checkbox'></span>" );
		if($(this).attr('value') == '1'){
			$(this).parent().addClass("selected main-bg");
		}
	});
	$(checkBox).on("click",function(){
		$(this).parent().toggleClass("selected main-bg");
		if ($(this).attr('value') == '1'){
			$(this).attr('value','0');
		}else{
			$(this).attr('value','1');
		}
		return true;
	});
	$('.custom-checkbox').append('<div class="switcher"/>');
	
	$('.custom-radio').find('label').prepend('<span><span></span></span>');
	
		
	/* =============== Window.load ================== */
	$(window).on("load",function(){
		
		/* =============== login box vertical alignment ================== */
		function loginpadding(){
			var winH 	= parseInt($(window).height(),10)/2,
				docH 	= parseInt($(window).height(),10),
				loginH 	= parseInt($('.login-box-lg').height(),10)/2,
				padd 	= winH - loginH;
			$('.login-page .pageWrapper').css('padding-top',padd+'px');
			$('.fullscreen').css('height',docH+'px');
		}
		
		loginpadding();
		
		$(window).resize(function(){
			loginpadding();
		});
		
		$('[data-toggle="tooltip"]').tooltip();
		$('[data-toggle="popover"]').popover();
		$('[data-toggle="dropdown"]').dropdown();
				
		/* ================ Progress Bars ================= */
		$('.progress-bar').each(function(){
			$(this).waypoint(function() {
				var num = $(this).attr('aria-valuenow'),
					percent = $.animateNumber.numberStepFactories.append('%');
				if($(this).parent().parent().parent().hasClass('tool-tip')){
					$(this).find('> span').animateNumber({number: num,numberStep: percent});
				}else{
					$(this).find('> span').animateNumber({number: num,numberStep: percent},num*20);
				}
				$(this).css('width',num+'%').animate({left:'0%',opacity:'1'},num*20);
				
				if(num <= 40){
					$(this).find('> span').addClass('sm-progress');
				}
			},{offset: '90%',triggerOnce: true});
		});
		
		/* ================= Magnific popup =============== */
		$('.zoom').magnificPopup({
			type:'image',
			gallery: {
				enabled: true
			}
		});
		
		/* ================ Waypoints: on scroll down animations. =============== */
		$('.no-touch .fx').waypoint(function() {
			var anim = $(this).attr('data-animate'),
				del = $(this).attr('data-animation-delay');
			$(this).addClass('animated '+anim).css({animationDelay: del + 'ms'});
		},{offset: '80%',triggerOnce: true});
		
		
		
		/* =============== fix parallax bg in safari. ================== */
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
			$('.tags').addClass('saf-tags');
		}else{			
			/* ============= Stick Header logo change ========================== */
			if (ScrlTop > 1) {
				if($('.top-head').attr('data-sticky') == "true"){
					$('.top-head').addClass('sticky-nav');
				}
			}else{
				$('.top-head').removeClass('sticky-nav');
			}
			
			$.stellar({
			horizontalScrolling: false,
			verticalScrolling: true,
			responsive: true,
			parallaxElements: true,
			verticalOffset:-4,
			hideDistantElements: false
		});
		
		if($('.parallax').length > 0){
			$('.parallax').each(function(){
				var pover = $(this).attr('data-overlay');
				if(pover != undefined){
					$(this).prepend('<div class="parallax-overlay" style="background-color:'+pover+'"></div>');
				}
			});
		}
			
		}
		
		if($('.top-head').hasClass('sticky-nav')){
			var logo = $('.logo').find('img').attr('src').replace("logo-light.png", "logo.png");
			$('.logo').find('img').attr('src',logo);
		}

		$('.modal[role="dialog"]').on('show.bs.modal', function (event) {
			$('.pageWrapper,#contentWrapper,.section,.section > .container').addClass('pos-static');
		});
		
		$('.modal[role="dialog"]').on('hide.bs.modal', function (event) {
			$('.pageWrapper,#contentWrapper,.section,.section > .container').removeClass('pos-static');
		});
		
		// youtube video in popup..
		var trigger = $("body").find('[data-toggle="modal"]');
		trigger.on("click",function () {
			var theModal = $(this).data("target"),
				videoSRC = $(this).attr("data-theVideo"),
				videoSRCauto = videoSRC + "?autoplay=1";
				$(theModal + ' iframe').attr('src', videoSRCauto);
			$(theModal + ' button.close').on("click",function () {
				$(theModal + ' iframe').attr('src', videoSRC);
			});
			$('.modal').on("click",function () {
				$(theModal + ' iframe').attr('src', videoSRC);
				return false;
			});
		});
		
		/* =============== One Page Navigation ================ */
		if($('.one-page').length){
			$('.one-page').onePageNav();
		}
		
		function one_nav(){
			if($('.one-2').length){
				var tp2 = $('#home').outerHeight();
				if(ScrlTop >= tp2 ){
					$('.one-2').removeClass('diamond-grid').find('li').removeClass('diamonds');
					$('.one-2').addClass('side-one');
				}else{
					$('.one-2').removeClass('side-one').addClass('diamond-grid').find('li').addClass('diamonds');
				}
			}
		}
		
		one_nav();
				
		$('.one-page a').on("click",function(){
			one_nav();
		});
		
		/* ================ Sticky nav. ================ */
		
		$(window).on("scroll",function(){
			var ScTop = $(window).scrollTop();
			
			/* ================ Sticky Nav. =============== */
			if($('.top-head').attr('data-sticky') == "true"){
				if (ScTop > 10) {
					$('.top-head').addClass('sticky-nav');
					if($('.top-head').hasClass('sticky-nav')){
						var logo = $('.logo').find('img').attr('src').replace("logo-light.png", "logo.png");
						$('.logo').find('img').attr('src',logo);
					}
				}else{
					$('.top-head').removeClass('sticky-nav');
					if($('.top-head').hasClass('dark') || $('.logo').hasClass('light')){
						var logo = $('.logo').find('img').attr('src').replace("logo.png", "logo-light.png");
						$('.logo').find('img').attr('src',logo);
					}
				}
			}
			if (ScTop > 1) {
				$('#to-top').css({'transform':'translate3d(0,0,0)'});
			} else {
				$('#to-top').css({'transform':'translate3d(50px,50px,0)'});
			}
			
			/* ================ One Page side menu. =============== */
			if($('#side_one').length > 0){
				var scrollHeight2 = $(document).scrollTop(),
					tp2 = $('#home').outerHeight();
				if($(this).scrollTop() > tp2 ){
					$('#side_one').css('left','0px');
				}else{
					$('#side_one').css('left','-100%');
				}
			}
			
			/* ================ One Page Function. =============== */
			one_nav();
			
		});
		
		/* ================ Preloader. ================ */
		$(".page-loader").delay(500).fadeOut(400);
		$('body').delay(400).removeAttr("style");
		
		if($('.animsition').length){
			$(".animsition").animsition({
				inClass: 'fade-in',
				outClass: 'fade-out',
				inDuration: 2000,
				outDuration: 800,
				linkElement: '.animsition-link',
				loading: true,
				loadingParentElement: 'body', //animsition wrapper element
				loadingClass: 'animsition-loading',
				loadingInner: '', // e.g '<img src="loading.svg" />'
				timeout: false,
				timeoutCountdown: 5000,
				onLoadEvent: true,
				browser: [ 'animation-duration', '-webkit-animation-duration'],
				overlay : false,
				overlayClass : 'animsition-overlay-slide',
				overlayParentElement : 'body',
				transition: function(url){ window.location.href = url; }
			});
		}
		
	});

})(jQuery);


// Latest tweets sliders.
var animatetweets = function (){
	
	$('.slick-s').slick({
		dots: false,
		arrows: true,
		vertical: true
	});
	$('.fade-slider').slick({
		dots: false,
		arrows: true,
		fade: true
	});
}
