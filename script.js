function Validate(field, value){

   if(window.XMLHttpRequest){
       var xmlhttp = new XMLHttpRequest();
   } else if(window.ActiveXObject){
       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");   
   }
   
   var urlget = "php/register.php?field="+field+"&value="+value;
   var url = "php/register.php";
   var params = "field="+field+"&value="+value;
   
   xmlhttp.open("POST", url, true);
   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   
   xmlhttp.onreadystatechange = function(){
       if(xmlhttp.readyState === 1){
           document.getElementById('campo_' +field+ '').innerHTML = '<font color="green">Verificando...</font>';   
       }
   
       if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
           var resposta = xmlhttp.responseText;
           document.getElementById('campo_'+ field + '').innerHTML = resposta;
       }
   };
   
   xmlhttp.send(params);
   }
   
     
   processa_dados.php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // valida e processa os dados
  // redireciona para uma página de sucesso ou erro
}


SESSION_start();
$_SESSION["codigo_usuario"] = $query[1];
$_SESSION["nome_usuario"] = $query[2];
$_SESSION["permissao"] = $query[3];
$_SESSION["email"] = $query[4];
$_SESSION["Senha"] = $query[5];
    
        
   

  
   
    