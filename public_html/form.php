<IMG src="images/p_2.jpg" border="0" width="990" height="110" alt="">
<BR><IMG src="images/point.gif" border="0" width="1" height="30" alt="">
<TABLE width="100%" height="1%" BORDER="0" align="left" cellspacing="0" cellpadding="0"> 
	<TR>
		<TD align="left" valign="top">
<FONT size="6">Вызов специалиста</FONT>
<BR><IMG src="images/point.gif" border="0" width="1" height="30" alt="">
</TD>
	</TR>
	<TR>
		<TD width="1%" align="left" valign="top">
<TABLE width="100%" BORDER="0" cellspacing="0" cellpadding="0"> 
<TR>
	<TD align="left" width="100%">
<?
function print_form ($name, $contacts, $message)
{
?>
<FORM name="order" action="?f=form" method="post">
<TABLE width="100%" border="0" cellspacing="0" cellpadding="0">
    <TR>
        <TD width="30%"><I>Как Вас зовут</I></TD>
        <TD><IMG src="images/point.gif" border="0" width="50" height="1" alt=""></TD>
        <TD><INPUT type="text" maxlength="100" name="name" value="<? print $name ?>" size="40"></TD>
    </TR>
    <TR>
        <TD>&nbsp;</TD>
    </TR>
    <TR>
        <TD><I>Телефон или эл. почта</I></TD>
        <TD>&nbsp;</TD>
        <TD><INPUT type="text" maxlength="100" name="contacts" value="<? print $contacts ?>" size="40"></TD>
    </TR>
    <TR>
        <TD>&nbsp;</TD>
    </TR>
    <TR>
        <TD valign="top"><I>Ваше сообщение</I></TD>
        <TD>&nbsp;</TD>
        <TD><TEXTAREA name="message" rows="6" cols="50"><? print $message ?></TEXTAREA></TD>
    </TR>
    <TR>
        <TD>&nbsp;</TD>
    </TR>
    <TR>
        <TD>&nbsp;</TD>
        <TD>&nbsp;</TD>
        <TD><INPUT type="submit" name="submit" value="Отправить"></TD>
    </TR>
</TABLE>
</FORM>
<P>
<FONT size="1">Все поля обязательны для заполнения</FONT>
<?
}
function check_form ($name, $contacts, $message)
	{
	if (!$name || !$contacts || !$message)
	{
		print ("<FONT color=\"#ff0000\">Пожалуйста, заполните все поля формы.</FONT><P>");
		print_form ($name, $contacts, $message);
	}
	else
	{
$stripped_data=strip_tags($message);
mail ("tehnomeat@mail.ru", "Вызов специалиста.", "

Вызов специалиста.


Имя:                 $name
Контакты:            $contacts
Комментарии:         $stripped_data
",
"Content-type: text/plain; charset = windows-1251"
);
print ("Ваше сообщение отправлено. В ближайшее время мы свяжемся с Вами.");
}
}
?>
<?
if (!$_REQUEST['submit'])
{
?>
<? print_form ("", "", ""); ?>
<?
}
else
{
check_form ($_REQUEST['name'], $_REQUEST['contacts'], $_REQUEST['message']);
}
?>


</TD>
</TR>
</TABLE>

</TD>
</TR>
</TABLE>


