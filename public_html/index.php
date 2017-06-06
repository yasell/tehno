<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="robots" content="index,follow">
	<meta name="msapplication-tap-highlight" content="no">
	<meta name="format-detection" content="telephone=no">
	<link rel="icon" type="image/x-icon" href="favicon.ico">
	<title>Оборудование для птицеводства в России, Казахстане, Беларуси: цены | Оборудование для птицефабрик - ООО ТехноМит.</title>
	<meta http-equiv="description" content="Покупайте оборудование для птицеводства и птицефабрик! Гарантия качества! Оборудование Szlachet Stal. Работаем по России, Казахстану и Беларуси!">
	<meta http-equiv="keywords" content="приемка птицы, убой, обесперивание, потрошение, обработка желудков и лап, охлаждение, деление птицы, размещение отходов, санитарное оборудование">
	<meta name="yandex-verification" content="5e590f726eed0de9">
	<meta name="google-site-verification" content="JDPX8Ialj4yhTWp_5h3Rz84kpt2nsPSUXRpPt1HcoCo">
	<link href="css/style.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
	<script src="js/modernizr.custom.28468.js"></script>

	<script>
  	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  	ga('create', 'UA-77393737-1', 'auto');
  	ga('send', 'pageview');
	</script>

</head>

<body>

	<div id="page" class="page-wrapper">

		<header class="header">

			<div class="header__top  container" data-style="display: flex;">
				<a class="logo" href="/">
					<span class="logo__img-wrapper">
						<img src="images/logo.png" alt="Техномит">
						<span class="logo__img-text"> Техно&#160;мит </span>
					</span>
					<p class="logo__text"> Инновационное оборудование европейского качества! </p>
				</a>
				<ul class="header__phone">
					<li class="header__phone-item">
						<!-- <span> Москва: </span> -->
						<!-- <a class="header__phone-link" href="tel:+375172001665"> +375 (17) 200-16-65 </a> -->
						<a class="header__phone-link" href="tel:+79051638820"> +7 (905) 163-88-20 </a>
					</li>
					<li class="header__phone-item">
						<!-- <span> Минск: </span> -->
						<a class="header__phone-link" href="tel:+375293437019"> +375 (29) 343-70-19 </a>
					</li>
				</ul>
				<button id="call" class="btn  btn--red"> Заказать звонок </button>
			</div>

			<div class="header__bottom">
				<div class="container">
					<div class="menu__trigger-wrap">
						<div id="menu__trigger" class="menu__trigger">
							<span class="menu__trigger-decor"></span>
						</div>
					</div>
					<nav class="header__menu-row">
						<ul class="header__menu-list" data-style="display: flex;">
							<li class="header__menu-item">
								<a href="/" class="header__menu-link"> Главная </a>
							</li>
							<li class="header__menu-item">
								<a href="?f=production" class="header__menu-link"> Оборудование </a>
							</li>
							<li class="header__menu-item">
								<a href="?f=production_zap" class="header__menu-link"> Запчасти </a>
							</li>
							<li class="header__menu-item">
								<a href="?f=service" class="header__menu-link"> Услуги </a>
							</li>
							<li class="header__menu-item">
								<a href="?f=inginiring" class="header__menu-link"> Инжиниринг </a>
							</li>
							<li class="header__menu-item">
								<a href="?f=contacts" class="header__menu-link"> Контакты </a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

		<main class="main">
			<?
				if (isset($_REQUEST['f']))
					 {
						 $f = $_REQUEST['f'];
						 $f = strtr($f, array(':'=> '', '//' => '', '/' => '', '.' => '', '&' => '', '=' => '', 'index' => 'main'));
						 $url = "$f.php";
						 if (@fopen($url, "r"))
						 {
							 include ("$f.php");
						 }
						 else
						 {
							 include ("main.php");
						 }
					 }
					 else
					 {
						 include ("main.php");
					 }
			?>
		</main>

		<footer class="footer">
			<div class="container" data-style="display: flex;">
				<div class="footer__item">
					<p class="footer__name"> ООО "ТехноМит" </p>
					<ul class="footer__nav">
						<li class="footer__nav-item"><a href="/"> Главная </a></li>
						<li class="footer__nav-item"><a href="?f=production"> Оборудование </a></li>
						<li class="footer__nav-item"><a href="?f=production_zap"> Запасные части </a></li>
						<li class="footer__nav-item"><a href="?f=service"> Услуги </a></li>
						<li class="footer__nav-item"><a href="?f=inginiring"> Инжиниринг </a></li>
						<li class="footer__nav-item"><a href="?f=contacts"> Контакты </a></li>
					</ul>
				</div>
				<div class="footer__item">
					<ul class="footer__call">
						<li class="footer__call-item  footer__name"> Телефоны </li>
						<li class="footer__call-item"><a href="tel:+375172001665">+375 (17) 200-16-65</a></li>
						<li class="footer__call-item"><a href="tel:+375299626447">+375 (29) 962-64-47</a></li>
						<li class="footer__call-item"><a href="tel:+375293437019">+375 (29) 343-70-19</a></li>
						<li class="footer__call-item"><a href="tel:+375291823826">+375 (29) 182-38-26</a></li>
						<li class="footer__call-item"><a href="mailto:tehnomeat@mail.ru">E-mail: tehnomeat@mail.ru</a></li>
					</ul>
					<button id="call-f" class="btn  btn--white"> Заказать звонок </button>
				</div>
				<div class="footer__item">
					<p class="footer__name"> Юридический адрес: </p>
					<p> Республика Беларусь, Витебская область, г. Сенно, ул. Октябрьская, д. 81, офис 3 </p>
					<p class="footer__name"> Aдрес представительства: </p>
					<p> 220036 г.Минск, ул.К.Либкнехта, 45 </p>
				</div>
				<div class="footer__item">
					<a class="logo" href="/">
						<img src="images/logo-gray.png" alt="Техномит">
					</a>
				</div>
			</div>
		</footer>

	</div>

	<div id="back-top" class="back-top">
		<a href="#top"></a>
	</div>

	<div class="modal_bg"></div>

	<div id="modal_call" class="modal">
		<div class="modal__wrapper">
			<button id="modal_close" class="modal__close"> Close </button>
			<div class="modal__guts">
				<h2 class="title">Заказать звонок</h2>
				<form id="call_form" class="form  form--modal" method="post" action="/">
					<div class="form__unit">
						<input type="text" id="first_name" name="name" required placeholder=" " />
						<label for="first_name">Ваше имя</label>
					</div>
					<div class="form__unit">
						<input type="tel" id="phone" name="phone" required placeholder=" " pattern="^((8|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" />
						<label for="phone">Телефон</label>
						<div class="form__error">
							Введите пожалуйста реальный телефон.
						</div>
					</div>
					<button class="form__submit  btn  btn--red" type="submit" value="Отправить"> Отправить </button>
				</form>
			</div>
		</div>
	</div>

	<div id="modal_done" class="modal">
		<div class="modal__wrapper">
			<button id="modal_close" class="modal__close"> Close </button>
			<div class="modal__guts">
				<h2 class="title">Спасибо!</h2>
				<p> Наш специалист свяжется С Вами <br> в самое ближайшее время.</p>
			</div>
		</div>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
	<script src="js/jquery.cslider.js"></script>
	<script src="js/main.js"></script>

<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter27321908 = new Ya.Metrika({id:27321908, webvisor:true, clickmap:true, trackLinks:true, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/27321908" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->

</body>
</html>
