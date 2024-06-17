const alunos = [];
const notasAlunos = [];
var arrayMedia = [];

//------------------------------------------------
let qtdAlunos = parseInt(prompt('Qual a quantidade de alunos que você deseja adicionar?'))

for (let i = 1; i <= qtdAlunos; i++) {
    let informacoesAluno = {};
    informacoesAluno.nome = prompt(`digite o nome do aluno ${i}`);

    let nota1 = parseInt(prompt(`digite a primeira nota do aluno ${i}`));
    informacoesAluno.primeiraNota = nota1

    let nota2 = parseInt(prompt(`digite a segunda nota do aluno ${i}`));
    informacoesAluno.segundaNota = nota2

    informacoesAluno.media = (nota1 + nota2) / 2;

    console.log (informacoesAluno);
    alunos.push(informacoesAluno);

    notasAlunos.push(nota1, nota2);
    let soma = notasAlunos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    let media = soma / (qtdAlunos * 2)
    arrayMedia.push(media)
   

    console.log (`a média é: ${media}`);
//--------------------------------------------------------

document.write (
    'Nome: ', informacoesAluno.nome, '<br>',
    'Nota 1: ', informacoesAluno.primeiraNota, '<br>',
    'Nota 2: ', informacoesAluno.segundaNota, '<br>',
    'Média do aluno: ', informacoesAluno.media, '<br>',
    '', '<br>'
);

}

console.log (alunos);

let mostrarMedia = parseInt(arrayMedia[arrayMedia.length - 1]);
document.write (
    'Média total da sala: ', mostrarMedia
);









