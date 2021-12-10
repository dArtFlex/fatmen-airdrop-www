<?php
function add($x1,$y1,$x2,$y2)
{
    global $gmp_p;
    $p = $gmp_p;

#    lam = ((y2-y1)*(gmpy2.invert(x2-x1,p)))%p
    $lam = $y2-$y1;
    $lam *= gmp_invert($x2-$x1,$p);
    $lam = gmp_div_r($lam,$p);

    $x = ($lam*$lam-$x1-$x2);
    $x = gmp_div_r($x,$p);

# y = ((x1-x)*lam-y1)%p
    $y = (($x1-$x)*$lam-$y1);
    $y = gmp_div_r($y,$p,GMP_ROUND_MINUSINF);

    $o[x] = $x;
    $o[y] = $y;
    return $o;
}
?>