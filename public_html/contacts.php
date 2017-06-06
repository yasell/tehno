			<div class="contacts  container">

				<h2 class="title  title--red"> Контактная информация </h2>
				<p> ООО "ТехноМит" </p>
				<p><span class="contacts__name"> Представительство в Республике Беларусь: </span>
					<br> г. Минск, ул. К.Либкнехта, 45
				</p>
				<p>
					<span class="contacts__name"> Телефоны: </span>
					<ul class="contacts__phone-list">
						<li><a href="tel:810375299626447">8 10 375 29 962-64-47 (международный формат)</a></li>
						<li><a href="tel:+375172001665">+375 (17) 200-16-65</a></li>
						<li><a href="tel:+375299626447">+375 (29) 962-64-47</a></li>
						<li><a href="tel:+375293437019">+375 (29) 343-70-19</a></li>
						<li><a href="tel:+375291823826">+375 (29) 182-38-26</a></li>
						<li><a href="tel:+79051638820">+7 (905) 163-88-20</a></li>
					</ul>
				</p>
				<p><span> E-mail: </span>
					<a href="mailto:tehnomeat@mail.ru"> tehnomeat@mail.ru </a>
				</p>
				<p><span class="contacts__name"> Юридический адрес: </span>
					<br> Республика Беларусь, Витебская область, г. Сенно, ул. Октябрьская, д. 81, офис 3
				</p>
				<p><span class="contacts__name"> Почтовый адрес: </span>
					<br> Республика Беларусь, 211120, г. Сенно, Витебская область, ул. Октябрьская, д. 81, офис 3
				</p>

				<h2 class="title  title--h2"> Вызов специалиста </h2>

				<form id="order" class="form  form--modal" method="post" action="/">
				<div class="form__unit">
					<input type="text" id="first_name_c" name="name" value="" required placeholder=" " />
					<label for="first_name_c">Ваше имя</label>
				</div>
				<div class="form__unit">
					<input type="tel" id="phone_c" name="phone" value="" required placeholder=" " pattern="^((8|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" />
					<label for="phone_c">Телефон</label>
					<div class="form__error">
						Введите пожалуйста реальный телефон.
					</div>
				</div>
				<div class="form__unit">
					<textarea id="form_text" rows="4" cols="50" name="message" placeholder=" "></textarea>
					<label for="form_text">Сообщение</label>
				</div>
				<button class="form__submit  btn  btn--red" type="submit" value="Отправить"> Отправить </button>
			</form>

			<div class="map-wrapper">
				<div id="mapMini" class="map  map--mini">
					<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0f75f240296aea599b1a4f9a83f448c06ff05667ad9146287c9f14d31e4632d0&amp;width=100%25&amp;height=330&amp;lang=ru_RU&amp;scroll=true"></script>
				</div>
			</div>
			</div>
