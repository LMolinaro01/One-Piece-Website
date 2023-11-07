document.addEventListener('DOMContentLoaded', function() {
    let a = document.querySelectorAll('.area');

    function clicar() {
        a.forEach(function(area) { //Para mais de um elemento
            let textoAtual = area.textContent.trim(); //pega o que ta escrito

            if (textoAtual === "East Blue") //se o texto for isso
            {
                area.innerHTML = "東の海 (イースト･ブルー)"; //escreve isso
            } 
            else if (textoAtual === "東の海 (イースト･ブルー)") 
            {
                area.innerHTML = "East Blue";
            } 

            else if (textoAtual === "Alabasta") 
            {
                area.innerHTML = "アラバスタ王国";
            } 
            else if (textoAtual === "アラバスタ王国") 
            {
                area.innerHTML = "Alabasta";
            }

            else if (textoAtual === "Saga Skypiea")
            {
                area.innerHTML = "スカイピア";
            }
            else if (textoAtual === "スカイピア")
            {
                area.innerHTML = "Saga Skypiea";
            } 

            else if (textoAtual === "Water 7 / Enies Lobby")
            {
                area.innerHTML = "ウォーターセブン編";
            }
            else if (textoAtual === "ウォーターセブン編")
            {
                area.innerHTML = "Water 7 / Enies Lobby";
            } 

            else if (textoAtual === "Thriller Bark")
            {
                area.innerHTML = "スリラーバーク";
            }
            else if (textoAtual === "スリラーバーク")
            {
                area.innerHTML = "Thriller Bark";
            } 

            else if (textoAtual === "Arquipélago Sabaody")
            {
                area.innerHTML = "シャボンディ諸島";
            }
            else if (textoAtual === "シャボンディ諸島")
            {
                area.innerHTML = "Arquipélago Sabaody";
            } 

            else if (textoAtual === "Amazon Lily / Impel Down")
            {
                area.innerHTML = "アマゾン・リリー / インペルダウン";
            }
            else if (textoAtual === "アマゾン・リリー / インペルダウン")
            {
                area.innerHTML = "Amazon Lily / Impel Down";
            } 

            else if (textoAtual === "Guerra de Marineford")
            {
                area.innerHTML = "頂上戦争”編";
            }
            else if (textoAtual === "頂上戦争”編")
            {
                area.innerHTML = "Guerra de Marineford";
            } 

            else if (textoAtual === "Retorno a Sabaody")
            {
                area.innerHTML = "シャボンディへ戻る";
            }
            else if (textoAtual === "シャボンディへ戻る")
            {
                area.innerHTML = "Retorno a Sabaody";
            } 

            else if (textoAtual === "Ilha dos Homens-Peixe")
            {
                area.innerHTML = "魚人島";
            }
            else if (textoAtual === "魚人島")
            {
                area.innerHTML = "Ilha dos Homens-Peixe";
            } 

            else if (textoAtual === "Punk Harzard")
            {
                area.innerHTML = "パンクハザード";
            }
            else if (textoAtual === "パンクハザード")
            {
                area.innerHTML = "Punk Harzard";
            } 

            else if (textoAtual === "Dressrosa")
            {
                area.innerHTML = "ドレスローザ";
            }
            else if (textoAtual === "ドレスローザ")
            {
                area.innerHTML = "Dressrosa";
            } 

            else if (textoAtual === "Zou")
            {
                area.innerHTML = "ゾウ";
            }
            else if (textoAtual === "ゾウ")
            {
                area.innerHTML = "Zou";
            } 

            else if (textoAtual === "Ilha de Whole Cake")
            {
                area.innerHTML = "ホールケーキアイランド";
            }
            else if (textoAtual === "ホールケーキアイランド")
            {
                area.innerHTML = "Ilha de Whole Cake";
            } 

            else if (textoAtual === "Reverie")
            {
                area.innerHTML = "夢想";
            }
            else if (textoAtual === "夢想")
            {
                area.innerHTML = "Reverie";
            } 

            else if (textoAtual === "País de Wano")
            {
                area.innerHTML = "ワノ国";
            }
            else if (textoAtual === "ワノ国")
            {
                area.innerHTML = "País de Wano";
            } 
            
        });
    }

    function entrar(event) {
        let elemento = event.target;
        elemento.style.fontSize = "100px";
        elemento.style.color = "gold";
    }

    function sair(event) {
        let elemento = event.target;
        elemento.style.fontSize = "70px";
        elemento.style.color = "#fffeb5";
    }

    a.forEach(function(elemento) {
        elemento.addEventListener('click', clicar);
        elemento.addEventListener('mouseenter', entrar);
        elemento.addEventListener('mouseleave', sair);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let a2 = document.querySelectorAll('.area2');

    function entrar(event) {
        let elemento = event.target;
        elemento.style.fontSize = "85px";
        elemento.style.color = "gold";
    }

    function sair(event) {
        let elemento = event.target;
        elemento.style.fontSize = "60px";
        elemento.style.color = "#fffeb5";
    }

    a2.forEach(function(elemento) {
        elemento.addEventListener('mouseenter', entrar);
        elemento.addEventListener('mouseleave', sair);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let a3 = document.querySelectorAll('.area3');

    function entrar(event) {
        let elemento = event.target;
        elemento.style.fontSize = "50px";
        elemento.style.color = "gold";
    }

    function sair(event) {
        let elemento = event.target;
        elemento.style.fontSize = "35px";
        elemento.style.color = "#fffeb5";
    }

    a3.forEach(function(elemento) {
        elemento.addEventListener('mouseenter', entrar);
        elemento.addEventListener('mouseleave', sair);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let a3 = document.querySelectorAll('.area4');

    function entrar(event) {
        let elemento = event.target;
        elemento.style.fontSize = "35px";
        elemento.style.color = "gold";
    }

    function sair(event) {
        let elemento = event.target;
        elemento.style.fontSize = "25px";
        elemento.style.color = "#fffeb5";
    }

    a3.forEach(function(elemento) {
        elemento.addEventListener('mouseenter', entrar);
        elemento.addEventListener('mouseleave', sair);
    });
});

function volta(){

    window.history.back();
}