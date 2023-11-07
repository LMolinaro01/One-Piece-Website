<?php 
   /*
    session_start();//inicia a sessao
    //print_r($_SESSION); mostra o login da pessoa que está na sessão

    if((!isset($_SESSION['email']) == true) and (!isset($_SESSION['senha']) == true)) //se n tiver ngm na sessao ele manda de volta pro login
    {
        unset($_SESSION['email']);
        unset($_SESSION['senha']);
        header('Location: login.php');
    }
    $logado = $_SESSION['email']; */

    //Ele vai pra tela de login caso o usuário não esteja logado
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <link rel="stylesheet" href="Categorias-arcos.css">
    <title>One Piece | Início</title>
    <link rel="shortcut icon" type="imagex/png" href="https://seeklogo.com/images/M/mugiwara-logo-303FD55C54-seeklogo.com.png">
    <script src="scriptArco.js"></script>
</head>

<body>
    <header class="header"><!--Cabeçalho-->
        <h1 class="areaTítulo">Desconstruindo One Piece</h1>
        <nav class="cabeçalho"> <!--Sumário da página, Inicio, Sobre mim, Contato-->
            <ul>
                <li><a href="pagina.php">Início</a></li>
                <div class="dropdown">
                    <li><a href="categorias.html">Tópicos</a></li>
                    
                    <div class="dropdown-content">
                        <ul>
                            <div class="subdropdown">
                                <li><a href="mangá.html">Mangá</a></li>
                                <div class="sub-content">
                                    <li><a href="Categorias-arcos.html">Arcos</a></li>
                                    <li><a href="influencia.html">Influência</a></li>
                                    <li><a href="publicação.html">Publicação</a></li>
                                </div>
                            </div>
                            <div class="subdropdown">
                                <li><a href="anime.html">Anime</a></li>
                                <div class="sub-content">
                                    <li><a href="adaptacao.html">Adaptação</a></li>
                                    <li><a href="producao.html">Produção</a></li>
                                    <li><a href="trilhaSonora.html">Música</a></li>
                                </div>
                            </div>
                            <li><a href="autor.html">Autor</a></li>
                            <li><a href="categorias.html">Categorias</a></li>
                        </ul>
                    </div>
                </div>
                <li><a href="sobre.html">Sobre Mim</a></li>
                <li><a href="outro.html">Personagem Misterioso</a></li>
                <li><span class="author">Leonardo Molinaro</span></li>
            </ul>
        </nav>
    </header>
    <main>
        <article>
            <a href="https://www.youtube.com/watch?v=ezlbjhHj9yI" target="_blank"><img id="onepiecelogo"
                    src="https://logosmarcas.net/wp-content/uploads/2021/10/One-Piece-Logo.png"></a>

            <div id="itensHeaderMangá">
                <header id="header2" class="cabeçalho2">
                    <ul>
                        <li>
                            <h3 id class="area3"><a id="linkCor" href="mangá.html">Mangá</a></h3>
                        </li>
                        <li>
                            <h3 id class="area3"><a id="linkCor" href="anime.html">Anime</a></h3>
                        </li>
                        <li>
                            <h3 id class="area3"><a id="linkCor" href="autor.html">Autor</a></h3>
                        </li>
                    </ul>
                </header>
            </div>
            <h1 id="introduçãoPagina">Breves Comentários:</h1>

            <div class="center-image">
            <img src="https://i.redd.it/again-i-converted-these-screenshots-to-4k-from-episode-1015-v0-paeqrn1p1qv81.png?width=5000&format=png&auto=webp&s=e60f4f977e39a2b1844de660fcc0088a589f30a6"
                width="1000"></div>

            <ul class="texto">

                <br>
                <li id="texto2">
                    
                    <h2 id="TítuloArco">1. Narrativa Complexa e Cativante:</h2>
                    <p id="textoArco">"One Piece" é um dos mangás mais populares e amados de todos os tempos, e possui
                        uma série
                        de qualidades que contribuem para seu sucesso duradouro.
                        
                        "One Piece" é conhecido por sua narrativa envolvente e bem desenvolvida. A história é rica em
                        detalhes e apresenta um mundo vasto e intrigante.<br> 
                        <br>A trama principal gira em torno da busca do protagonista, Monkey D. Luffy, pelo lendário
                        tesouro
                        conhecido como "One Piece," levando-o a aventuras emocionantes e descobertas surpreendentes.<br>
                        <br>A narrativa frequentemente se aprofunda nas histórias de fundo dos personagens, revelando
                        seus traumas, sonhos e motivações. Essas histórias adicionam camadas de complexidade aos
                        personagens e criam conexões emocionais fortes entre o público e a obra.
                        <div class="center-image">
                            <img class="gifs" src="https://gifs.eco.br/wp-content/uploads/2022/02/gif-da-logo-de-one-piece-5.gif" width="800">
                            <img class="gifs" src="https://media.tenor.com/BWk4_NBCmtgAAAAC/one-piece.gif" width="800"></div>
                    </li>
                <br>
                <li>
                    <h2 id="TítuloArco">2. Personagens memoráveis</h2>


                    <p id="textoArco"> A tripulação de Monkey D. Luffy, conhecida como os Piratas do Chapéu de Palha, é
                        o coração da história. Cada membro da tripulação tem uma personalidade distinta, sonhos e
                        motivações únicas. Desde o intelectual Nico Robin até o espadachim Roronoa Zoro e o cozinheiro
                        Sanji, todos têm um papel essencial a desempenhar na história.<br>
                        <br> Os personagens de "One Piece" não são estáticos; eles crescem e evoluem ao longo da
                        narrativa. Suas histórias de fundo, traumas e objetivos são gradualmente revelados, permitindo
                        que os leitores compreendam melhor suas ações e escolhas.<br>
                        <br> Muitos personagens têm histórias de fundo comoventes e profundas. Essas histórias explicam
                        suas motivações e explicam por que eles são quem são. Personagens como Nico Robin, Tony Tony
                        Chopper e Brook têm histórias de fundo particularmente comoventes. <br>
                        <div class="center-image"><img class="gifs" src="https://media.tenor.com/KnKjFImoA_0AAAAd/animation-one-piece.gif" width="700">
                        <img class="gifs" src="https://i.pinimg.com/originals/db/2b/7c/db2b7c7fbbba1a36b86bf9db84dc6b28.gif" width="700"></div>
                </li><br>

                <li>
                    <h2 id="TítuloArco">3. Mundo Rico e Diversificado:</h2>

                    <p id="textoArco">O mundo de "One Piece" é vasto e diversificado, composto por ilhas únicas, civilizações diversas e
                    um sistema político complexo. Isso permite que a história explore uma ampla gama de cenários e
                    culturas.
                    Cada ilha visitada pela tripulação de Luffy tem sua própria história e desafios, o que mantém a
                    narrativa fresca e emocionante.</p>
                </li><br>
                <div class="center-image"><img class="gifs" src="https://i.redd.it/ic6l9i01yow51.jpg" width="700">
                    <img class="gifs" src="https://pbs.twimg.com/media/EsSC9FcXcAANKdo.jpg" width="700" ></div>
                <li>
                    <h2 id="TítuloArco">4. Temas Profundos:</h2>

                    <p id="textoArco">"One Piece" aborda uma variedade de temas profundos, como amizade, perseverança, justiça, liberdade,
                    sacrifício e poder. Esses temas ressoam com os leitores e adicionam profundidade à narrativa.
                    A exploração de questões morais e éticas também é uma característica marcante do mangá, tornando-o
                    mais do que apenas uma história de ação.</p>
                </li><br><div class="center-image">
                    <img class="gifs" src="https://pm1.aminoapps.com/6360/86abd7bf4a53c90e4b9ff699c77cb09a146c53ad_hq.jpg"
                        height="560">
                    <img class="gifs" src="https://i.pinimg.com/originals/44/2e/1e/442e1eb0718ae42e9ae49e1a38773370.png"
                        height="560"></div>

                <li>
                    <h2 id="TítuloArco">5. Ação e Lutas Épicas:</h2>

                    <p id="textoArco">As batalhas em "One Piece" são espetaculares e estrategicamente elaboradas. Cada membro da
                    tripulação possui habilidades únicas devido aos frutos do diabo, que concedem poderes especiais.
                    As lutas são intensas e cheias de reviravoltas, o que mantém os leitores ansiosos pelo próximoconfronto.</p>
                </li><br>
                <div class="center-image"><img class="gifs"
                    src="https://64.media.tumblr.com/c1a1104241032b9aed3f346521824b17/56f9c625b0843ab7-21/s540x810/b7da121d23bf50750dc330b6808282b845ecd36c.gifv"
                    height="400">
                <img class="gifs" src="https://media.tenor.com/cOhgxKZrGqQAAAAd/zoro-one-piece.gif" height="400"></div>
                <li>
                    <h2 id="TítuloArco">6. Desenvolvimento de Personagens:</h2>

                    <p id="textoArco">Ao longo da série, os personagens crescem e evoluem, enfrentando desafios pessoais e amadurecendo em
                    suas jornadas.
                    O desenvolvimento dos personagens é uma parte fundamental da narrativa e permite que os leitores se
                    conectem profundamente com eles. Os personagens da tripulação do luffy:</p>
                </li><br>
                <ul>
                    <li>
                        <h3 id="TítuloArco">Monkey D. Luffy:</h3>
                        
                        <img id="imagemCategoria" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd4ym-06297ac3-c040-4738-8e2a-05bfb4408fdf.png/v1/fill/w_640,h_512,strp/monkey_d__luffy_by_bodskih_dbcd4ym-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kYmNkNHltLTA2Mjk3YWMzLWMwNDAtNDczOC04ZTJhLTA1YmZiNDQwOGZkZi5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.xIX0FCInFwdS9H4qWJv3S3JYJdvNmyp6PRlA79HAchk" width="400">
                        <br>
                        <p id="textoArco"> Luffy é o capitão da tripulação e sonha em se tornar o Rei dos Piratas. Seu passado inclui
                        crescer em uma pequena ilha, onde foi influenciado por seu mentor, Red-Haired Shanks, e perdeu
                        sua mão após um incidente com uma Akuma no Mi (Fruta do Diabo).
                        Seu desejo de liberdade e aventura é alimentado pela promessa que fez a Shanks e pela busca pelo
                        "One Piece." Seu desenvolvimento está em se tornar um líder capaz de unir pessoas com sonhos
                        diferentes sob uma bandeira comum. </p>
                 
                    <li>
                        <h3 id="TítuloArco">Roronoa Zoro:</h3>

                        <img id="imagemCategoriaDireita" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddwjr3c-778a7715-6c72-4438-a726-5f11a5d99dfb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGR3anIzYy03NzhhNzcxNS02YzcyLTQ0MzgtYTcyNi01ZjExYTVkOTlkZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QMt8s-nRwNhBCzs_b502UGb7v-MYzohR_EiFlt4hYnw" width="350">

                        <p id="textoArco"> Zoro é o espadachim da tripulação e sonha em se tornar o melhor espadachim do mundo. Seu passado
                        envolve treinamento rigoroso e a promessa de se tornar o pupilo de Dracule Mihawk, o atual
                        melhor espadachim.
                        Seu desenvolvimento se concentra em aperfeiçoar suas habilidades e honrar a promessa de Luffy de
                        se tornar o melhor. Sua devoção ao capitão e à tripulação é uma característica central de sua
                        personalidade.<br> </p>

                    </li><br>
                    <li>
                        <h3 id="TítuloArco">Nami:</h3>

                        <img id="imagemCategoria" src="https://i.imgur.com/xUXeM74.png" width="350">

                        <p id="textoArco">Nami é a navegadora da tripulação e sonha em desenhar um mapa completo do mundo. Seu passado é
                        marcado pelo trauma de perder sua ilha natal para a Arlong, um homem-peixe tirano.
                        Seu desenvolvimento gira em torno de superar seu passado doloroso e aprender a confiar em seus
                        companheiros. Ela busca o conhecimento e a independência para alcançar seu sonho.<br></p>
                        
                    </li><br>
                    <li>
                        <h3 id="TítuloArco">Usopp:</h3>
                        <img id="imagemCategoriaDireita" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddwjr39-932868f1-5d05-4e72-b25a-b30d9274435a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGR3anIzOS05MzI4NjhmMS01ZDA1LTRlNzItYjI1YS1iMzBkOTI3NDQzNWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S4xCwozAWWv6rveSmAtR0koZF0VsIuqXQeycY5s5Fhs" width="350">
                        <p id="textoArco">Usopp é o atirador de longo alcance e contador de histórias do bando. Ele tem uma tendência a
                        contar histórias exageradas e mentir para se destacar. Seu passado inclui crescer em uma vila
                        onde contava histórias fantásticas para dar esperança aos moradores.
                        Seu desenvolvimento está em se tornar um herói de verdade e aprender a enfrentar a realidade.
                        Ele encontra coragem e responsabilidade ao longo de sua jornada.<br></p>
                    </li><br>
                    <li>
                        <h3 id="TítuloArco">Sanji:</h3>

                        <img id="imagemCategoria" src="https://i.imgur.com/RknUEfE.png" width="350">

                        <p id="textoArco">Sanji é o cozinheiro da tripulação e sonha em encontrar o All Blue, uma área onde os
                        ingredientes de todas as partes do mundo se encontram. Seu passado envolve crescer em um
                        restaurante flutuante e ser maltratado por sua família biológica.
                        Seu desenvolvimento inclui aceitar sua nova família no Bando do Chapéu de Palha e aprender a
                        equilibrar sua lealdade à tripulação com seu senso de honra como cozinheiro.<br></p>
                    </li><br>
                    <li>
                        <h3 id="TítuloArco">Tony Tony Chopper:</h3>

                        <img id="imagemCategoriaDireita" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddwjr2d-6523e21f-95ef-4c5e-9c5d-b635b865f21f.png/v1/fit/w_375,h_300/tony_tony_chopper_by_bodskih_ddwjr2d-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kZHdqcjJkLTY1MjNlMjFmLTk1ZWYtNGM1ZS05YzVkLWI2MzViODY1ZjIxZi5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lrD2OI6iEQOYQFgdBVgE4Up8fCbDpWwZFDoa7u1HwsI" width="300">

                        <p id="textoArco">Chopper é o médico da tripulação e um rena-humano, resultado de comer uma Akuma no Mi. Seu
                        passado é marcado pelo isolamento devido à sua aparência única.
                        Seu desenvolvimento é sobre ganhar confiança em si mesmo e aceitação, tanto de sua própria
                        identidade quanto dos outros.<br> </p>
                    </li><br>
                    <li>
                        <h3 id="TítuloArco">Nico Robin:</h3>

                        <img id="imagemCategoria" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddvv0d0-5f045cc9-9a33-4f32-ad34-2f35cd6ba770.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZWM2MDlhLWY1ZTUtNGExNy04MzkwLTlmODE5ZmNkOGUxYlwvZGR2djBkMC01ZjA0NWNjOS05YTMzLTRmMzItYWQzNC0yZjM1Y2Q2YmE3NzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ntUvEEa3s0VFpsAYK0vVtYOngepRKObBL8B4RS5xBOI" width="350">

                        <p id="textoArco">Robin é a arqueóloga do bando e possui um passado sombrio, fugindo da perseguição do Governo
                        Mundial devido ao conhecimento que possui sobre os Ponéglyphs, antigos artefatos escritos que
                        revelam a localização do "One Piece."
                        Seu desenvolvimento envolve abrir seu coração aos outros e encontrar um lugar onde pertence,
                        depois de anos de solidão e perseguição.<br></p>
                    </li><br>
                    <li>
                        <h3 id="TítuloArco">Franky:</h3>

                        <img id="imagemCategoriaDireita" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddwjr25-7e739728-0478-409d-a6df-7e5366dff426.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGR3anIyNS03ZTczOTcyOC0wNDc4LTQwOWQtYTZkZi03ZTUzNjZkZmY0MjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IXWwjYROdmAJ9Jf8OHCSMbT8t85MtidD84dnBZSGABY" width="400">

                        <p id="textoArco">Franky é o carpinteiro do bando e um cyborg que construiu seu próprio corpo. Seu passado inclui
                        ser um gênio inventor e construtor de navios, mas também enfrentar tragédias pessoais.
                        Seu desenvolvimento é sobre aceitar seu passado e usar suas habilidades para ajudar a tripulação
                        a alcançar seus objetivos.
                        Cada membro da tripulação do Chapéu de Palha tem um desenvolvimento profundo e significativo que
                        contribui para a riqueza da narrativa de "One Piece." Suas histórias pessoais e amadurecimento
                        ao longo da série são elementos fundamentais que atraem os leitores e os fazem se conectar
                        emocionalmente com esses personagens.<br></p>
                    </li><br>
                    <li>
                        <h3 id="TítuloArco">Brook:</h3>

                        <img id="imagemCategoria" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd4x9-0bc0b73b-2e76-410d-a1d8-a0881869ba81.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGJjZDR4OS0wYmMwYjczYi0yZTc2LTQxMGQtYTFkOC1hMDg4MTg2OWJhODEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.N-Xk7iD4T6wRdeuWCeXhRSQcOY_uqI3iPAu14PowPoo" width="400">

                        <p id="textoArco"> Brook é o músico esqueleto do Bando do Chapéu de Palha, e sua história é uma das mais trágicas e
                        fascinantes em "One Piece". Antes de se tornar um esqueleto vivo, Brook era um músico vivo que
                        fez parte da tripulação Rumbar Pirates. Seu passado é marcado pela perda de sua tripulação, que
                        morreu em uma ilha devido a uma doença incurável. Por causa de uma Akuma no Mi chamada Yomi Yomi
                        no Mi (Fruta da Ressurreição), Brook teve a chance de voltar à vida como um esqueleto.

                        O desenvolvimento de Brook é uma jornada de redescoberta e aceitação de sua nova condição. Ele
                        aprendeu a lidar com a solidão de ser um esqueleto vivo e, ao mesmo tempo, manteve sua paixão
                        pela música. Brook é um personagem incrivelmente otimista e engraçado, que usa seu senso de
                        humor para superar sua tristeza. Ele também é dedicado à tripulação de Luffy e se torna um
                        membro essencial da equipe, usando suas habilidades musicais e habilidades de luta para ajudar a
                        equipe a navegar pelo Novo Mundo.<br> </p>
                    </li><br>
                    <li>
                        <h3 id="TítuloArco">Jinbei:</h3>

                        <img id="imagemCategoriaDireita" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd1q6-b3fd9527-8ac0-4822-9b86-6f9c2078182e.png/v1/fill/w_640,h_512/jinbe_knight_of_the_sea_former_shichibukai_by_bodskih_dbcd1q6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kYmNkMXE2LWIzZmQ5NTI3LThhYzAtNDgyMi05Yjg2LTZmOWMyMDc4MTgyZS5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Uc9YF61K7vkZWlElAlpK1gtqTEQhRD76MpatzplAV7A" width="400">

                        <p id="textoArco">Jinbei é um ex-pirata e ex-guerreiro do mar que se torna o timoneiro do Bando do Chapéu de
                        Palha. Seu passado está intimamente ligado ao reino de Peixe-Cabra, onde ele era um dos
                        guerreiros do mar que protegia a ilha e suas águas. Jinbei é um homem-peixe, uma raça que
                        enfrenta discriminação e preconceito no mundo de "One Piece."

                        O desenvolvimento de Jinbei envolve reconciliar seu passado como guerreiro do mar com seu desejo
                        de seguir um caminho mais pacífico. Ele também enfrenta sua culpa por não ter conseguido
                        proteger o irmão de Luffy, Ace, durante a Guerra de Marineford. A lealdade de Jinbei ao Bando do
                        Chapéu de Palha é inabalável, e ele se torna um conselheiro sábio e um membro valioso da equipe,
                        especialmente em situações que envolvem água, como navegação e combates subaquáticos.<br></p>
                    </li><br>
                </ul>
                <li>
                    <h2 id="TítuloArco">7. Humor e Emoção:</h2>

                    <p id="textoArco">"One Piece" equilibra habilmente o humor e a emoção. As cenas engraçadas proporcionam alívio cômico,
                    enquanto os momentos emocionais são poderosos e comoventes.
                    Essa mistura de tom contribui para a riqueza da experiência de leitura. </p>
                    <br><div class="center-image">
                    <img class="gifs" src="https://i.pinimg.com/originals/3c/5b/0f/3c5b0fb6c0cc6273e25d164d2dc3f1ca.gif"
                        height="400">
                    <img class="gifs"
                        src="https://pa1.aminoapps.com/6552/b5f36646e5ad974f37c80d9bd5df39fb0f26cb38_hq.gif"
                        height="400"></div>
                </li><br>
                <li>
                    <h2 id="TítuloArco">8. Longevidade e Consistência:</h2>

                    <p id="textoArco">O mangá estreou em 1997 e continua sendo publicado, mantendo sua qualidade e consistência ao longo
                    dos anos.
                    A longevidade da série é um testemunho da dedicação e habilidade de Eiichiro Oda como autor.
                    <br></p><div class="center-image">
                    <img class="gifs"
                        src="https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/09/Capa-One-Piece-1060-1024x732.jpg?resize=1024%2C732&ssl=1"
                        height="450">
                    <img class="gifs" src="https://i.blogs.es/259581/one-piece/1366_2000.jpeg" height="450"></div>
                </li>
                <br>
            </ul>
            </p>
        </article>
    </main>
    <footer>
        <p>&copy;2023 <a id="copyright" href="sobre.html">Leonardo Molinaro</a></p>
    </footer>
</body>

</html>