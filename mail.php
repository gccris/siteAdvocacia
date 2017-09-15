<?php
$to = "giriboniadvocacia@gmail.com";
$subject = "Contato feito por ". $_POST["name"];
$txt = $_POST["message"]."\n
 Telefone de contato:". $_POST["telefone"];

$headers = "From: ". $_POST["email"];
echo "<script>alert('Email enviado com Sucesso!);location.href=\"index.html\";</script>";
mail($to,$subject,$txt,$headers);

?>