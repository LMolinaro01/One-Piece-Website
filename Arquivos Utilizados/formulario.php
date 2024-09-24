<?php 

if(isset($_POST['submit']))
{
    /*print_r(
    print_r($_POST['email']);
    print_r($_POST['senha']);*/

    include_once('config.php');

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $result = mysqli_query($conexao, "INSERT INTO usuarios(nome, email, senha) VALUES ('$nome', '$email', '$senha')");

    header('Location: login.php');
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interação com formulários</title>
    <link rel="stylesheet" href="estilo.css">
    <link rel="stylesheet" href="estiloLogin.css">
    <script src="scriptArco.js"></script>

</head>
<body>
    
<header class="header">
        <h1 class="areaTítulo">Faça seu Cadastro</h1>
        <nav class="cabeçalho">
    </header>
    <main><br><br>
        <button class="buttonBack" onclick="volta()">◀</button>
        <section><br>
            <div class="caixa_login">
                <form action="formulario.php" method="post">
                    <div class="caixa_usuario">
                        <label for="nome"></label>
                        <input type="text" name="nome" id="idnome" required placeholder="Nome">
                    </div>
                    <div class="caixa_usuario">
                        <label for="email"></label>
                        <input type="email" name="email" id="idemail" required placeholder="E-mail:">
                    </div>
                    <div class="caixa_usuario">
                        <label for="password"></label>
                        <input type="password" name="senha"  required placeholder="Senha:">
                    </div>
                    
                    <input class="enviar" type="submit" name="submit"> 
                    <div class="mugiwara">
                        <a href="https://youtu.be/dM7x1PNZDo0?si=BAZ1t9nmSWLSrwBR&t=82" target="_blank"><img src="https://seeklogo.com/images/M/mugiwara-logo-303FD55C54-seeklogo.com.png" width="200"></a>
                    </div>
                </form>
            </div>
        </section>
  
    </main>
</body>
</html>