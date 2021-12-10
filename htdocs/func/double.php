<?php
function double($x1,$y1)
{
//    global $p;
    global $gmp_p;
    $p = $gmp_p;


    $lamN = 3*$x1*$x1;
    $lamD = 2*$y1;


    $t = gmp_invert($lamD,$p);
    $lam = gmp_mul($lamN,$t);
    $lam = gmp_div_r($lam,$p);


    $x = ($lam*$lam - 2*$x1);
    $x = gmp_div_r($x,$p);
    $y = ($lam*($x1-$x)-$y1);
    $y = gmp_div_r($y,$p,GMP_ROUND_MINUSINF);

    $o[x] = $x;
    $o[y] = $y;

    return $o;
}

?>
