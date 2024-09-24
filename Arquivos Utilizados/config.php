<?php 

    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'formulario'; //Nome da database que criei na minha máquina

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    //Utilizei em um banco de dados que criei na minha máquina através do phpmyadmin (usando o Xampp)

    /*if($conexao->connect_errno)
    {
        echo "erro";
    }
    else
    {
        echo "Funcionou";
    } */

?>
