let personagens = ['luffy', 'zoro', 'usopp', 'nami', 'sanji', 'robin', 'chopper', 'franky', 'brook', 'jinbei', 'shanks', 'gol d roger','buggy','ace','sabo','aokiji','kizaru', 'akainu','fujitora','sengoku','garp','crocodile','arlong','enel','doflamingo','barba negra','kaido','barba branca','law','kid','mihawk','hancock','kuma','fisher tiger', 'vivi', 'rosinante', 'coby', 'smoker', 'rayleigh', 'oden', 'perona', 'katakuri', 'big mom', 'bonney', 'yamato'];

let personagemMisterioso = personagens[Math.floor(Math.random() * personagens.length)];

let tentativas = 0;

let dicasPersonagens = obterDicas(personagemMisterioso);

let indiceDica = 0;

let img = document.createElement("IMG");

function obterDicas(personagem) {
    let dicas = {
        'luffy': [
            "O Personagem é um Homem",
            "Possui cicatrizes",
            "É muito sem noção",
            "Usa uma roupa vermelha",
            "Gosta de Carne"
        ],
        'zoro': [
            "O Personagem é um Homem",
            "Possui cicatrizes",
            "Adora dormir",
            "Respeita muito seu capitão",
            "Não tem senso de direção"
        ],
        'usopp': [
            "Tem medo de lutar",
            "Consertou o navio dos Mugiwara várias vezes",
            "Possui um alter-ego",
            "O Personagem é um homem",
            "Adora Mentir"
        ],
        'nami': [
            "Tem medo de lutar",
            "um dos/das primeros(as) Mugiwara",
            "Toma banho todos os dias",
            "O Personagem é uma Mulher",
            "Sabe navegar muito bem"
        ],
        'sanji': [
            "um dos/das primeros(as) Mugiwara",
            "Toma banho todos os dias",
            "O Personagem é um Homem",
            "Não consegue socar",
            "Sabe cozinhar muito bem"
        ],
        'robin': [
            "Usuário(a) de Akuma no Mi",
            "É inteligente",
            "Toma banho todos os dias",
            "O Personagem é uma Mulher",
            "Consegue ler  Poneglyphs"
        ],
        'chopper': [
            "Tem medo de Lutar",
            "É inteligente",
            "Usuário(a) de Akuma no Mi",
            "O Personagem é um Homem",
            "É um médico"
        ],
        'franky': [
            "Consertou o navio dos Mugiwara várias vezes",
            "O Personagem é um Homem",
            "Se emociona Fácil",
            "Tem um amor pelo navio",
            "É um carpinteiro"
        ],
        'brook': [
            "Gosta de Usar roupa preta",
            "Usuário(a) de Akuma no Mi",
            "Tem uma risada icônica",
            "É bem mais velho",
            "É um músico"
        ],
        'jinbei': [
            "O Personagem é um Homem",
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "Gosta de Usar roupa florida",
            "É bem mais velho que o capitão",
            "Consegue nadar muito bem"
        ]
        ,
        'shanks': [
            "O Personagem é um Homem",
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "Gosta de Usar roupa vermelha",
            "Tem conexão com o Gol D Roger",
            "Inspiração de Luffy"
        ]
        ,
        'gol d roger': [
            "O Personagem é um Homem",
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "Tem um bigode",
            "Um dos personagens mais importantes",
            "Ele riu"
        ]
        ,
        'buggy': [
            "O Personagem é um Homem",
            "Usa um chapéu",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Tem conexão com o Gol D Roger",
            "É muito pateta"
        ]
        ,
        'ace': [
            "O Personagem usa um Chapéu",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Possui um vínculo com Luffy",
            "Tem conexão com o Gol D Roger",
            "Anda sempre sem camisa"
        ]
        ,
        'sabo': [
            "É loiro",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Possui um vínculo com Luffy",
            "Não é um pirata",
            "Possui poderes de fogo"
        ]
        ,
        'aokiji': [
            "Não é um pirata",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Gosta muito de dormir",
            "Gosta de andar de bike",
            "Tem uma relação polêmica com a marinha"
        ]
        ,
        'kizaru': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "Não é um pirata",
            "Gosta de Usar roupas claras",
            "Usa óculos",
            "Parece muito o Adam Sandler"
        ]
        ,
        'akainu': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "Não é um pirata",
            "Gosta de Usar roupa florida",
            "Usa Boné",
            "Logia de Lava"
        ]
        ,
        'fujitora': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "Tem cabelo escuro",
            "Não é um pirata",
            "É um espadachim",
            "É cego"
        ]
        ,
        'sengoku': [
            "O Personagem é um Homem",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Usa boné",
            "Não é um pirata",
            "possui uma barba com tranças"
        ]
        ,
        'garp': [
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "Não é um pirata",
            "Tem vínculo com Luffy",
            "Tem conexão com Gol D Roger",
            "Tem cabelo branco"
        ]
        ,
        'crocodile': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "Tem uma risada icônica",
            "Já governou um país",
            "Tem relação com Nico Robin",
            "Já foi preso"
        ]
        ,
        'arlong': [
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "Consegue nadar bem",
            "É um pirata",
            "É um homem peixe",
            "Tem relação com a Nami"
        ]
        ,
        'enel': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "Já foi um Governante Tirânico",
            "É loiro",
            "Considerado um Deus",
            "Tem relação com o céu"
        ]
        ,
        'doflamingo': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "É um pirata",
            "Já foi um Governante Tirânico",
            "Já foi um Shichibukai",
            "Tem relação com Law"
        ]
        ,
        'barba negra': [
            "É um pirata",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Usa um chapéu preto",
            "Tem uma barba",
            "Tem relação com o Barba Branca"
        ]
        ,
        'kaido': [
            "O Personagem é um Homem",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Possui um bigode muito grande",
            "Não usa camisa",
            "Tem chifres"
        ]
        ,
        'barba branca': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "O Personagem é um Homem",
            "Tem um bigode",
            "Tem relação com Gol D Roger",
            "Lutou na Guerra de Marine Ford"
        ]
        ,
        'law': [
            "Usa um acessório na cabeça",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Tem barba e Cabelo preto",
            "Tem tatuagens",
            "Tem relação com Doflamingo"
        ]
        ,
        'kid': [
            "Possui cicatrizes",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Usa um óculos na testa",
            "Tem cabelo vermelho",
            "É um supernova"
        ]
        ,
        'mihawk': [
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "O Personagem é um Espadachim",
            "Possui barba",
            "Usa um chapéu",
            "Tem relação com Shanks"
        ]
        ,
        'hancock': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "O Personagem é uma Mulher",
            "Gosta de Usar roupa cor rosa",
            "Possui cabelo preto",
            "Tem relação com um dos Mugiwara"
        ]
        ,
        'kuma': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "Tem cabelo preto",
            "Não é um pirata",
            "Tem relação com os Revolucionários",
            "Tem relação com Vegapunk"
        ]
        ,
        'fisher tiger': [
            "O Personagem é um pirata",
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "É um homem peixe",
            "Possui uma barba",
            "É um personagem muito importante para a raça dos homens peixes"
        ]
        ,
        'vivi': [
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "Tem relação com os Mugiwara",
            "É uma Mulher",
            "Possui cabelos azuis",
            "É uma princesa"
        ]
        ,
        'rosinante': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "Tem cabelo Loiro",
            "Tem muita importância para um dos Supernovas",
            "Usa um capuz vermelho",
            "Tem relação com o Doflamingo"
        ]
        ,
        'koby': [
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "Possui cabelo rosa",
            "Tem relação com um dos Mugiwara",
            "Não é um pirata",
            "O Personagem foi introduzido nos primeiros episódios"
        ]
        ,
        'smoker': [
            "É um(a) Usuário(a) de Akuma no Mi",
            "Possui Cabelo Branco",
            "Gosta de fumar",
            "Não é um pirata",
            "Usa um cacetete"
        ]
        ,
        'rayleigh': [
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "É um Espadachim",
            "Já treinou um dos Mugiwara",
            "Usa óculos",
            "Tem relação com Gol D Roger"
        ]
        ,
        'oden': [
            "Não é um(a) Usuário(a) de Akuma no Mi",
            "É um Espadachim",
            "O Personagem é um Homem",
            "Tem relação com Gol D Roger",
            "Já foi o Rei de um país"
        ]
        ,
        'perona': [
            "O Personagem é uma mulher",
            "Usa roupas escuras",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Gosta de Bichos de Pelúcia",
            "É gótica"
        ]
        ,
        'katakuri': [
            "É um Pirata",
            "Gosta de comer doces",
            "É um(a) Usuário(a) de Akuma no Mi",
            "Tem relação / Já teve com um Yonkou",
            "Sua mãe tem muitos filhos"
        ]
        ,
        'big mom': [
            "O Personagem é uma Mulher",
            "É um(a) Usuário(a) de Akuma no Mi",
            "É uma pirata formidável",
            "Possui cabelo rosa",
            "Tem relação com Gol D Roger"
        ]
        ,
        'bonney': [
            "O Personagem é uma Mulher",
            "É um(a) Usuário(a) de Akuma no Mi",
            "É jovem",
            "Possui cabelo rosa",
            "Tem relação com Kuma"
        ]
        ,
        'yamato': [
            "O Personagem é uma Mulher",
            "Gosta de Usar roupas claras",
            "Usa /Já usou uma máscara",
            "Tem relação / Já teve com um Yonkou",
            "Possui chifres"
        ]
    };

    return dicas[personagem]; 
}

function dicas() {
    dicasPersonagens = obterDicas(personagemMisterioso);
}

function resetPersonagem() {
            location.reload();
 } 

function verificarPersonagem() {
    let personagem = document.getElementById('personagemEntrada').value;
    personagem = personagem.toLowerCase();
    tentativas++;
    let resultado;

    if (personagem === personagemMisterioso) 
    {
        resultado = `Parabéns! Você acertou o Personagem Secreto em ${tentativas} tentativas!`;

        imagemPersonagem();

        document.getElementById("mudarPersonagem").style.display = "block";

        

        let elem = document.getElementById('button');
        elem.parentNode.removeChild(elem);

        let elem2 = document.getElementById('personagemEntrada');
        elem2.parentNode.removeChild(elem2);

        indiceDica = 0;

        personagemMisterioso = personagens[Math.floor(Math.random() * personagens.length)];
    } 
    else if (indiceDica < personagem.length) 
    {
        resultado = `Tente novamente!\nDica ${indiceDica + 1}: ${dicasPersonagens[indiceDica]}`;

        indiceDica++;
    } 
    else 
    {
        resultado = "Você usou todas as dicas. Tente novamente!";

        indiceDica = 0;

        dicas();

    }
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('imagens1').appendChild(img);
}

dicas(); //configurar as dicas quando o jogo começa.

let texto2

function imagemPersonagem()
{

    if (personagemMisterioso === 'luffy')
            {

                img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd4ym-06297ac3-c040-4738-8e2a-05bfb4408fdf.png/v1/fill/w_640,h_512,strp/monkey_d__luffy_by_bodskih_dbcd4ym-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kYmNkNHltLTA2Mjk3YWMzLWMwNDAtNDczOC04ZTJhLTA1YmZiNDQwOGZkZi5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.xIX0FCInFwdS9H4qWJv3S3JYJdvNmyp6PRlA79HAchk";
                img.style.width = "450px";

            }
        else if (personagemMisterioso === 'zoro')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddwjr3c-778a7715-6c72-4438-a726-5f11a5d99dfb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGR3anIzYy03NzhhNzcxNS02YzcyLTQ0MzgtYTcyNi01ZjExYTVkOTlkZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QMt8s-nRwNhBCzs_b502UGb7v-MYzohR_EiFlt4hYnw";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'nami')
            {
                    img.src = "https://i.imgur.com/xUXeM74.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'usopp')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddwjr39-932868f1-5d05-4e72-b25a-b30d9274435a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGR3anIzOS05MzI4NjhmMS01ZDA1LTRlNzItYjI1YS1iMzBkOTI3NDQzNWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S4xCwozAWWv6rveSmAtR0koZF0VsIuqXQeycY5s5Fhs";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'sanji')
            {
                    img.src = "https://i.imgur.com/RknUEfE.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'chopper')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddwjr2d-6523e21f-95ef-4c5e-9c5d-b635b865f21f.png/v1/fit/w_375,h_300/tony_tony_chopper_by_bodskih_ddwjr2d-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kZHdqcjJkLTY1MjNlMjFmLTk1ZWYtNGM1ZS05YzVkLWI2MzViODY1ZjIxZi5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lrD2OI6iEQOYQFgdBVgE4Up8fCbDpWwZFDoa7u1HwsI";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'robin')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddvv0d0-5f045cc9-9a33-4f32-ad34-2f35cd6ba770.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZWM2MDlhLWY1ZTUtNGExNy04MzkwLTlmODE5ZmNkOGUxYlwvZGR2djBkMC01ZjA0NWNjOS05YTMzLTRmMzItYWQzNC0yZjM1Y2Q2YmE3NzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ntUvEEa3s0VFpsAYK0vVtYOngepRKObBL8B4RS5xBOI";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'franky')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddwjr25-7e739728-0478-409d-a6df-7e5366dff426.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGR3anIyNS03ZTczOTcyOC0wNDc4LTQwOWQtYTZkZi03ZTUzNjZkZmY0MjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IXWwjYROdmAJ9Jf8OHCSMbT8t85MtidD84dnBZSGABY";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'brook')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd4x9-0bc0b73b-2e76-410d-a1d8-a0881869ba81.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGJjZDR4OS0wYmMwYjczYi0yZTc2LTQxMGQtYTFkOC1hMDg4MTg2OWJhODEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.N-Xk7iD4T6wRdeuWCeXhRSQcOY_uqI3iPAu14PowPoo";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'jibei')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd1q6-b3fd9527-8ac0-4822-9b86-6f9c2078182e.png/v1/fill/w_640,h_512/jinbe_knight_of_the_sea_former_shichibukai_by_bodskih_dbcd1q6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kYmNkMXE2LWIzZmQ5NTI3LThhYzAtNDgyMi05Yjg2LTZmOWMyMDc4MTgyZS5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Uc9YF61K7vkZWlElAlpK1gtqTEQhRD76MpatzplAV7A";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'shanks')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/dding2z-4569f2ea-550d-45f3-888e-8b594ee53571.png/v1/fill/w_640,h_512/shanks_by_kaizokujotei_dding2z-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZThlYzYwOWEtZjVlNS00YTE3LTgzOTAtOWY4MTlmY2Q4ZTFiXC9kZGluZzJ6LTQ1NjlmMmVhLTU1MGQtNDVmMy04ODhlLThiNTk0ZWU1MzU3MS5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6_y_z64CKihADBUNR-cwuyBWgpy9f8BrPnddpKEcjwM";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'roger')
            {
                    img.src = "https://64.media.tumblr.com/48962fd40e6552abac9418070ebe403f/e91d0ed11ef06293-6e/s640x960/df83e67635983e7dd9ff23e2118de3b7fbbca292.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'gol d roger')
            {
                    img.src = "https://64.media.tumblr.com/48962fd40e6552abac9418070ebe403f/e91d0ed11ef06293-6e/s640x960/df83e67635983e7dd9ff23e2118de3b7fbbca292.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'buggy')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/deb7c0k-49e16c42-6bcf-43e0-bffe-f551bbb0f16e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGViN2Mway00OWUxNmM0Mi02YmNmLTQzZTAtYmZmZS1mNTUxYmJiMGYxNmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZoDbHk4AwDDgpX5KOUqEkuCNqooMb12YajIqF6DAscI";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'ace')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddw4ezi-6454d246-60a6-4a7f-8c6f-22687cc890eb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZWM2MDlhLWY1ZTUtNGExNy04MzkwLTlmODE5ZmNkOGUxYlwvZGR3NGV6aS02NDU0ZDI0Ni02MGE2LTRhN2YtOGM2Zi0yMjY4N2NjODkwZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n_8_NLw7VMcCGQl-g3L2fBclM9yyfEA6PiFmIraE5ac";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'sabo')
            {
                    img.src = "https://i.imgur.com/LWyX3Dc.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'kuzan')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddoznio-a69c2a5b-8486-4cf8-8633-78ebb0f14d71.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZWM2MDlhLWY1ZTUtNGExNy04MzkwLTlmODE5ZmNkOGUxYlwvZGRvem5pby1hNjljMmE1Yi04NDg2LTRjZjgtODYzMy03OGViYjBmMTRkNzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-DI-wdddT59TaFBInZoC4bftE6m9EQOGB-yStPTnaBA";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'aokiji')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddwjr3c-778a7715-6c72-4438-a726-5f11a5d99dfb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGR3anIzYy03NzhhNzcxNS02YzcyLTQ0MzgtYTcyNi01ZjExYTVkOTlkZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QMt8s-nRwNhBCzs_b502UGb7v-MYzohR_EiFlt4hYnw";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'kizaru')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddwh5c5-5afcd933-aea2-44b2-94b2-d86ef19a9b4d.png/v1/fill/w_640,h_512/borsalino___kizaru___by_kaizokujotei_ddwh5c5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZThlYzYwOWEtZjVlNS00YTE3LTgzOTAtOWY4MTlmY2Q4ZTFiXC9kZHdoNWM1LTVhZmNkOTMzLWFlYTItNDRiMi05NGIyLWQ4NmVmMTlhOWI0ZC5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3wnzjJMTGcwjryl8nOsd8avThXIQB3M4G4tW4aUzz14";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'akainu')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/deaa5l4-4a80f30c-4f81-43b4-9b16-6531e166ac7b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGVhYTVsNC00YTgwZjMwYy00ZjgxLTQzYjQtOWIxNi02NTMxZTE2NmFjN2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eKZqR0Tk5u43uZh4dR9wj-dmTrTmDXi6VHQm6Pn6lfY";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'fujitora')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddf2y1t-8a2ed275-3551-426f-bcf7-dc669683adeb.png/v1/fill/w_640,h_512/issho_aka_admiral_fujitora_by_bodskih_ddf2y1t-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kZGYyeTF0LThhMmVkMjc1LTM1NTEtNDI2Zi1iY2Y3LWRjNjY5NjgzYWRlYi5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KT43AIxu7FoIvBMeNR91eUcqan8OCltZwhe3ZdB7P24";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'sengoku')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcd40y-e73cb233-198b-4755-b1bc-8a3778f88ea6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGJjZDQweS1lNzNjYjIzMy0xOThiLTQ3NTUtYjFiYy04YTM3NzhmODhlYTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EiHzOYdGtCFxlQ5zihgOb5ka1d74fEEPb5ycluhGfq8";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'garp')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddgzdn6-a5715c34-5683-46ed-a1a9-fbb156e4c0e8.png/v1/fill/w_640,h_512/monkey_d__garp_by_kaizokujotei_ddgzdn6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZThlYzYwOWEtZjVlNS00YTE3LTgzOTAtOWY4MTlmY2Q4ZTFiXC9kZGd6ZG42LWE1NzE1YzM0LTU2ODMtNDZlZC1hMWE5LWZiYjE1NmU0YzBlOC5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.DzungrI69JFOPSHMLvNyKDTzoi4chI9u77wsdzUoDL0";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'crocodile')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddx0cfj-d592ea98-1687-4de6-b7d9-fe07cf85e525.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZWM2MDlhLWY1ZTUtNGExNy04MzkwLTlmODE5ZmNkOGUxYlwvZGR4MGNmai1kNTkyZWE5OC0xNjg3LTRkZTYtYjdkOS1mZTA3Y2Y4NWU1MjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0B-CsCXhRDDZR_ezpDiaj5fVokyWyQYuPzV3ZDR5juI";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'arlong')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dcv4cel-1b19d3e1-3b83-47f8-b521-36979b814a2e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGN2NGNlbC0xYjE5ZDNlMS0zYjgzLTQ3ZjgtYjUyMS0zNjk3OWI4MTRhMmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9l_PjS2Rouu920tZAe5aVtB02nchgsjrRKHFGz9zqCU";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'enel')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddycnta-ba909917-f12b-408c-b853-3a49ade7d207.png/v1/fill/w_640,h_512/enel_god_of_skypiea_by_bodskih_ddycnta-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kZHljbnRhLWJhOTA5OTE3LWYxMmItNDA4Yy1iODUzLTNhNDlhZGU3ZDIwNy5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._OocUrddmFnZI5aGDwJa4DS2cKzEYqKZdhEomq7W8Ng";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'doflamingo')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddu6jqv-f9dbd0d2-86c4-4fb3-bac8-4530b0a23bba.png/v1/fill/w_640,h_512/donquixote_doflamingo_by_kaizokujotei_ddu6jqv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZThlYzYwOWEtZjVlNS00YTE3LTgzOTAtOWY4MTlmY2Q4ZTFiXC9kZHU2anF2LWY5ZGJkMGQyLTg2YzQtNGZiMy1iYWM4LTQ1MzBiMGEyM2JiYS5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4YmC_mDHQXvq8sZy0s9PQpbMP31eGniGBHu1DhqAA3M";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'barba negra')
            {
                    img.src = "https://static.wikia.nocookie.net/fiction-battlefield/images/8/88/CurrentTeachpng.png/revision/latest/scale-to-width-down/430?cb=20200704231630&path-prefix=pt-br";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'kaido')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dehdf41-8ef26b7c-c540-477c-b997-8b3cf5af4f62.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGVoZGY0MS04ZWYyNmI3Yy1jNTQwLTQ3N2MtYjk5Ny04YjNjZjVhZjRmNjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V9LhNvaQ8eDrtUpfxYqbD1S8A-ur6j0iI-iRIVBnKcM";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'barba branca')
            {
                    img.src = "https://i.pinimg.com/originals/55/89/ad/5589ad3f03a97cef8dee44d9483c4115.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'law')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddx2yjl-cec7a1b4-af6c-4a8d-8476-ad5733062c44.png/v1/fill/w_640,h_512/trafalgar_law_by_kaizokujotei_ddx2yjl-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZThlYzYwOWEtZjVlNS00YTE3LTgzOTAtOWY4MTlmY2Q4ZTFiXC9kZHgyeWpsLWNlYzdhMWI0LWFmNmMtNGE4ZC04NDc2LWFkNTczMzA2MmM0NC5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.DDOTNMlNmV7K6eKwibn_qOMEhSfDwRuGbWZBBaxlx5w";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'kid')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddybxo1-1012fc83-00bd-43e7-bc87-43d32ab6caee.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZWM2MDlhLWY1ZTUtNGExNy04MzkwLTlmODE5ZmNkOGUxYlwvZGR5YnhvMS0xMDEyZmM4My0wMGJkLTQzZTctYmM4Ny00M2QzMmFiNmNhZWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZQRHn2aZDps0_U2v7IV9ILazjGxqg4937GA56l2QEY0";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'mihawk')
            {
                    img.src = "https://i.pinimg.com/originals/d1/a4/df/d1a4df7033e91f752b3eb7bea30263a8.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'hancock')
            {
                    img.src = "https://i.imgur.com/NRlsNd7.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'kuma')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dcicvzn-5ee30794-650e-4c0b-8fc7-7ea01dc068c5.png/v1/fill/w_640,h_512/bartholomew_kuma_former_shichibukai_by_bodskih_dcicvzn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kY2ljdnpuLTVlZTMwNzk0LTY1MGUtNGMwYi04ZmM3LTdlYTAxZGMwNjhjNS5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gRbFrocRODm3BcG55UxxYlybNNaMt3BygHaXVOXMN60";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'fisher tiger')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddvegz6-80a926ee-00b9-49c4-968d-0931c5ca37f7.png/v1/fill/w_640,h_512/fisher_tiger_by_kaizokujotei_ddvegz6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZThlYzYwOWEtZjVlNS00YTE3LTgzOTAtOWY4MTlmY2Q4ZTFiXC9kZHZlZ3o2LTgwYTkyNmVlLTAwYjktNDljNC05NjhkLTA5MzFjNWNhMzdmNy5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5gbq4z2sQ7PJcYf6qXd2Fwq0Uobqy5ni5VcMONCQpbM";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'vivi')
            {
                    img.src = "https://cdn.donmai.us/original/48/06/4806b098fb920603c6eed22c096e69f2.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'rosinante')
            {
                    img.src = "https://pbs.twimg.com/media/FRLYSLoXwAA9ojN.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'koby')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dcl04j8-ce5afea8-c6ab-48cd-a1d1-b34fe1f50beb.png/v1/fill/w_640,h_512/coby_marine_captain_by_bodskih_dcl04j8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kY2wwNGo4LWNlNWFmZWE4LWM2YWItNDhjZC1hMWQxLWIzNGZlMWY1MGJlYi5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uaC1Yzt7XU2v3Ac9Ee-U9nJerIJBArrNhHkCPEMEwt4";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'smoker')
            {
                    img.src = "https://i.imgur.com/yAKOh8f.png";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'rayleigh')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddtf9pn-ee05b12e-e9fa-4840-8eae-adb32dc5e3a7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZWM2MDlhLWY1ZTUtNGExNy04MzkwLTlmODE5ZmNkOGUxYlwvZGR0Zjlwbi1lZTA1YjEyZS1lOWZhLTQ4NDAtOGVhZS1hZGIzMmRjNWUzYTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rdkZxsMpe3EDizTXymqLm6QI06zvn-6CkZuyRVnm1vk";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'oden')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/df4940p-2515405a-5730-4169-aa89-a17fa03cd7f9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGY0OTQwcC0yNTE1NDA1YS01NzMwLTQxNjktYWE4OS1hMTdmYTAzY2Q3ZjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hM1UsQWBSUZvnDTkeEkr-Qj-OWVzJci38CPKwGGNjbg";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'perona')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddpbkuo-358706df-54dd-4a14-8e8b-41f920c8f9f7.png/v1/fill/w_640,h_512/perona_by_kaizokujotei_ddpbkuo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZThlYzYwOWEtZjVlNS00YTE3LTgzOTAtOWY4MTlmY2Q4ZTFiXC9kZHBia3VvLTM1ODcwNmRmLTU0ZGQtNGExNC04ZThiLTQxZjkyMGM4ZjlmNy5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.tZp9T-15z4dbsWMJxj71nhxnMBJR4HV7gwMqbwHosuA";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'katakuri')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ec609a-f5e5-4a17-8390-9f819fcd8e1b/ddj9olq-1f263461-b90a-4a3f-87b2-faa0b8927ab6.png/v1/fill/w_640,h_512/charlotte_katakuri_by_kaizokujotei_ddj9olq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZThlYzYwOWEtZjVlNS00YTE3LTgzOTAtOWY4MTlmY2Q4ZTFiXC9kZGo5b2xxLTFmMjYzNDYxLWI5MGEtNGEzZi04N2IyLWZhYTBiODkyN2FiNi5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6dewzotXX_fAfGgsK69-5UdyJyr-GF9uH0wcyhW1aKU";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'big mom')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/df90nug-93e5e489-dbdc-4c90-ade2-20866c128760.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGY5MG51Zy05M2U1ZTQ4OS1kYmRjLTRjOTAtYWRlMi0yMDg2NmMxMjg3NjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Frn_LQ3blcM2Ie8Sx8Xa7vLiJ9FQd6qSsgFW9yHoG1g";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'bonney')
            {
                    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/denpw6z-a29c5e00-b04b-46d2-b21b-3d202e400b34.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGVucHc2ei1hMjljNWUwMC1iMDRiLTQ2ZDItYjIxYi0zZDIwMmU0MDBiMzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gSZWprFCxRRutsLWPjvU2Kc0MV71mJcd55MpgvesrIM";
                    img.style.width = "450px";
            }
        else if (personagemMisterioso === 'yamato')
            {
                    img.src = "https://pbs.twimg.com/media/FpvvnisXsAcwdyX.png";
                    img.style.width = "450px";
            }
}

function mostrarAnimePreferido() {
    var divAnimePreferido = document.getElementById("AnimePreferido");
    if (divAnimePreferido.style.display === "none") {
        divAnimePreferido.style.display = "block";
    } else {
        divAnimePreferido.style.display = "none";
    }
}

function mostrarMangaPreferido() {
    var divAnimePreferido = document.getElementById("MangaPreferido");
    if (divAnimePreferido.style.display === "none") {
        divAnimePreferido.style.display = "block";
    } else {
        divAnimePreferido.style.display = "none";
    }
}

function mostrarJogoPreferido() {
    var divAnimePreferido = document.getElementById("JogoPreferido");
    if (divAnimePreferido.style.display === "none") {
        divAnimePreferido.style.display = "block";
    } else {
        divAnimePreferido.style.display = "none";
    }
}