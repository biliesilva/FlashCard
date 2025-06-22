const card = document.querySelector('.card');
const questionCard = document.querySelector('.cardQuestion');
const answerCard = document.querySelector('.cardAnswer');
const Button = document.querySelector('.button');
const cardCount = document.querySelector('.subtitle');




const flashcards = [
	{
		question: "O que é JavaScript?",
		answer: "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web."
	},
	{
		question: "O que são funções de callback em JavaScript?",
		answer: "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação."
	},
	{
		question: "O que é o this em JavaScript?",
		answer: "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada."
	},
	{
		question: "O que é hoisting em JavaScript?",
		answer: 'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.'
	},
	{
		question: "O que são tipos primitivos em JavaScript?",
		answer: "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos."
	},
];

let currentCard = 0;
let isFlipped = false;

function nextCard() {
	const item = flashcards[currentCard];
	questionCard.textContent = item.question;
	answerCard.textContent = item.answer;
	cardCount.textContent = `Card ${currentCard + 1} de ${flashcards.length}`;
	if (card.classList.contains('show-answer')) {
		card.classList.remove('show-answer');
	}
}

card.addEventListener('click', () => {
	card.classList.toggle('show-answer');
});

Button.addEventListener('click', () => {
	currentCard = (currentCard + 1) % flashcards.length;
	nextCard();
});

nextCard();
