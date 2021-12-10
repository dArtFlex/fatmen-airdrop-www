<?php
function strMod2(array $dec)
{
    return ((int)end($dec)) % 2;
}

function strDivBy2(array $dec)
{
    $res = [];
    $carry = 0;

    if($dec[0] == '0')
        array_shift($dec);

    $len = count($dec);
    for($i = 0; $i < $len; $i++)
    {
        $num = $carry*10 + ((int)$dec[$i]);
        $carry = $num % 2;
        $num -= $carry;
        $res[] = $num / 2;
    }

    return $res;
}


function dec2bin_str($dec)
{
    $dec_arr = str_split($dec);
    $bin_arr = [];
    while(count($dec_arr) > 1 || $dec_arr[0] != 0)
    {
        array_unshift($bin_arr, strMod2($dec_arr));
        $dec_arr = strDivBy2($dec_arr);
    }

    return implode($bin_arr);
}


?>
