<?php
//phpinfo();
include "conf.php";


$t = $_SERVER['REQUEST_URI'];
//if($adm)
{
//print "t = $t<br>";
$t = explode("?",$t,2);
$t = $t[0];
//print "t = $t<br>";
$uri = $t[1];
$t = explode("/",$t);

unset($t[0]);
$item_mas = $t;
$var_mas = $item_mas;

$i = 1;
$item = $t[$i++];
$item2 = $t[$i++];
$item_whats = $t[$i++];

$item3 = $item."_".$item2;

}
if($item != "js")
{
include "inc/stat.php";
include "inc/head.php";
//include "inc/center.php";
//include "inc/footer.php";
}
include "inc/$item.php";
if($item != "js")
{
//include "inc/stat.php";
//include "inc/head.php";
include "inc/center.php";
include "inc/footer.php";
}
?>