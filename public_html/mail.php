<?php

$recepient = "strogofcdm@gmail.com, tehnomeat@mail.ru";
$sitename = "tehnomeat.by";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mess = trim($_POST["message"]);

$message = "Имя клиента: $name \nУказанный телефон: $phone \nОставленное сообщение: $mess";

$pagetitle = "Упс! Новая заявка с сайта \"$sitename\". Надо бы ответить.";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
