<?php
function view_number($temp_number=1,$digits=10)
{

//print $temp_prefix;
//if (!(strpos($temp_prefix,"_")===false)) $digits=4;
//else $digits=5;
//;
if (strlen($temp_number)<$digits) 
{
for ($i=strlen($temp_number);$i<$digits;$i++) 
$temp_number="0".$temp_number;
}
//print $digits."<br>";
return @$temp_number;
}
?>
