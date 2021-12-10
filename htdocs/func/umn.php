<?php
function umn($xz,$yz,$na)
{
    if($na == 0) die("Mnogo");
    $naBin = dec2bin_str($na);
    $Qx = $xz;
    $Qy = $yz;
    $len = strlen($naBin);
    for($i = 1;$i<$len;$i++)
    {
	$m = double($Qx,$Qy);
	$Qx = $m[x];
	$Qy = $m[y];
	if($naBin[$i]== "1")
	{
	    $m = add($Qx,$Qy,$xz,$yz);
	    $Qx = $m[x];
	    $Qy = $m[y];
	}
    }
    $m[x] = $Qx;
    $m[y] = $Qy;
    return $m;
}
?>