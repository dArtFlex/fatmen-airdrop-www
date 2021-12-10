<?php
//include "page_init.php";


?>
<div class="jumbotron1 text-center">

<?php
print "  <h1>";
print "FATMEN: Claim You DAF</h1>";
print "
</div>

<div class=\"container\">";

print "<button type=\"button\" class=\"btn btn-warning\" id=metamas_btn></button>";
print "<br><br>";
print "<div class=\"alert alert-danger\" role=\"alert\" id=\"infoNetwork\"></div>
";

print "<div id=tbl_div class=invisible>";
print "<table class=tbl>";

print "<tr>";
print "<td class=r>";
print "DAF on contract: ";
print "</td><td class=l>";
print "<button type=\"button\" class=\"btn btn-outline-success btn-sm\" disabled id=w_token_amount>0</button>";
print "</td>";
print "</tr>";


print "<tr>";
print "<td class=r>";
print "Claim for YOU: ";
print "</td><td class=l>";
print "<button type=\"button\" class=\"btn btn-secondary btn-sm\" disabled id=w_status>Disable</button>";
print "</td>";
print "</tr>";

print "<tr>";
print "<td class=r>";
print "Your DAF Amount: ";
print "</td><td class=l>";
print "<button type=\"button\" class=\"btn btn-secondary btn-sm\" disabled id=w_amount>0</button>";
print "</td>";
print "</tr>";

print "<tr>";
print "<td class=r>";
print "Already Claimed: ";
print "</td><td class=l>";
print "<button type=\"button\" class=\"btn btn-secondary btn-sm\" disabled id=w_caimed>0</button>";
print "</td>";
print "</tr>";


print "<table>";
print "</div>";

print "<div><button id=claim_but class=\"btn btn-secondary btn-lg invisible\">CLAIM</button></div>";


print "
<br><br>
<div class=\"alert alert-success invisible\" role=\"alert\" id=tx_res>
  Tx
</div>
";

?> 

</div>

