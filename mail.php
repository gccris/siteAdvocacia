<?php
$to = "roger@giriboni.adv.br";
$subject = "Contato feito por ". $_POST["name"];
$txt = $_POST["message"]."\n
 Telefone de contato:". $_POST["telefone"];

$headers = "From: ". $_POST["email"];
mail($to,$subject,$txt,$headers);
echo "<script>alert('Contato feito com sucesso. Seu email será respondido o mais rápido possivel');</script>";
include("index.html");
?>