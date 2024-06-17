const alunos = [];

//------------------------------------------------

let aluno1 = {};

nomeAluno1 = prompt ("Qual é o nome do Aluno 1?");
primeiraNotaAluno1 = parseInt(prompt ("Atribua uma nota para esse aluno"));
segundaNotaAluno1 = parseInt(prompt ("Atribua mais uma nota para esse aluno"));

aluno1.nome = nomeAluno1;
aluno1.notas = {primeiraNotaAluno1, segundaNotaAluno1};
aluno1.media = (primeiraNotaAluno1 + segundaNotaAluno1) / 2;

alunos.push(aluno1);

//-----------------------------------------------

let aluno2 = {};

nomeAluno2 = prompt ("Qual o nome do aluno 2?");
primeiraNotaAluno2 = parseInt(prompt ("Atribua uma nota para esse aluno"));
segundaNotaAluno2 = parseInt(prompt ("Atribua mais uma nota para esse aluno"));

aluno2.nome = nomeAluno2;
aluno2.notas = {primeiraNotaAluno2, segundaNotaAluno2};
aluno2.media = (primeiraNotaAluno2 + segundaNotaAluno2) / 2;

alunos.push(aluno2);

//-----------------------------------------------

let aluno3 = {};

nomeAluno3 = prompt ("Qual o nome do aluno 3?");
primeiraNotaAluno3 = parseInt(prompt ("Atribua uma nota para esse aluno"));
segundaNotaAluno3 = parseInt(prompt ("Atribua mais uma nota para esse aluno"));

aluno3.nome = nomeAluno3;
aluno3.notas = {primeiraNotaAluno3, segundaNotaAluno3};
aluno3.media = (primeiraNotaAluno3 + segundaNotaAluno3) / 2;

alunos.push(aluno3);

let mediaTotal = (primeiraNotaAluno1 + segundaNotaAluno1 + primeiraNotaAluno2 + segundaNotaAluno2 + primeiraNotaAluno3 + segundaNotaAluno3) / 6;

console.log (alunos);
console.log (mediaTotal)


