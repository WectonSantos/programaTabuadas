function escolher(){


    let num = parseInt(document.getElementById('opcao').value);
    let opcao1 = 0;
    let opcao2 = 0;
    let opcao3 = 0;
    let opcao4 = 0;



    let resultado;
    let texto= "";


    switch(num){
        case 1:
            document.getElementById('conteudoD').style.visibility = 'hidden';


            opcao1=1;
            document.getElementById('selecioneTab').style.visibility = 'visible';
            document.getElementById('numTab').style.visibility = 'visible';
            document.getElementById('btNumTab').style.visibility = 'visible';

            texto="";
            document.getElementById("conteudo").innerHTML = texto;

        break;

        case 2:
            opcao2=1;

            document.getElementById('conteudoD').style.visibility = 'visible';


            document.getElementById('selecioneTab').style.visibility = 'hidden';
            document.getElementById('numTab').style.visibility = 'hidden';
            document.getElementById('btNumTab').style.visibility = 'hidden';

            for (let i =1; i<=10; i++){
                for(let x=1; x<=10; x++){
                    if(i %2 ==0 ){
                        resultado= i*x;
                        texto+= i+" x "+ x + " = " + resultado + "<br>";
                        document.getElementById("conteudo").innerHTML = texto;
                    }
                }
                texto+="<br>";
            }
            

        break;

        case 3:

            document.getElementById('conteudoD').style.visibility = 'visible';

            opcao3=1;
            document.getElementById('selecioneTab').style.visibility = 'hidden';
            document.getElementById('numTab').style.visibility = 'hidden';
            document.getElementById('btNumTab').style.visibility = 'hidden';

            for (let i =1; i<=10; i++){
                for(let x=1; x<=10; x++){
                    if(i %2 ==1 ){
                        resultado= i*x;
                        texto+= i+" x "+ x + " = " + resultado + "<br>";
                        document.getElementById("conteudo").innerHTML = texto;
                    }
                }
                texto+="<br>";
            }

        break;

        case 4:

            document.getElementById('conteudoD').style.visibility = 'visible';


            opcao4=1;
            opcao3=1;
            document.getElementById('selecioneTab').style.visibility = 'hidden';
            document.getElementById('numTab').style.visibility = 'hidden';
            document.getElementById('btNumTab').style.visibility = 'hidden';

            
            for (let i =1; i<=10; i++){
                texto+="Tabuada do "+i+"<br>";
                for(let x=1; x<=10; x++){
                        resultado= i*x;
                        texto+= i+" x "+ x + " = " + resultado + "<br>";
                        document.getElementById("conteudo").innerHTML = texto;
                }
                texto+="<br>";
            }

            
        break;

        default:
            alert("Opção Inválida! Digite um Número de 1 a 4.");
        break;
    }
}

function calcular(){

    document.getElementById('conteudoD').style.visibility = 'visible';


    let tabuada = parseInt(document.getElementById('numTab').value);
    let texto= "";


    for(let i = 1; i<=10; i++){
        resultado= tabuada*i;
        texto+= tabuada+" x "+ i + " = " + resultado + "<br>";
        document.getElementById("conteudo").innerHTML = texto;
    }



}

function limpar(){

    document.getElementById('conteudoD').style.visibility = 'hidden';

    let texto= "";

    document.getElementById('selecioneTab').style.visibility = 'hidden';
    document.getElementById('numTab').style.visibility = 'hidden';
    document.getElementById('btNumTab').style.visibility = 'hidden';


    document.getElementById("conteudo").innerHTML = texto;

}