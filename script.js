

const cardsContainer = document.querySelector('#cards-container');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const currentEl = document.querySelector('#current');
const showButton = document.querySelector('#show');
const hideButton = document.querySelector('#hide');
const questionEl = document.querySelector('#question');
const answerEl = document.querySelector('#answer');
const addCardButton = document.querySelector('#add-card');
const clearButton = document.querySelector('#clear');
const addContainer = document.querySelector('#add-container');

// Keep track of current card
let currentActiveCard = 0;

// Store the DOM cards
const cardsEl = [];

// Store card data
const cardsData = [
    {
        question: 'Question 1',
        answer: 'Answer 1'
    },
    {
        question: 'Question 2',
        answer: 'Answer 2'
    },
    {
        question: 'Question 3',
        answer: 'Answer 3'
    }
];