

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

// Create all cards
function createCards(){
    cardsData.forEach((data, index) => createCard(data, index));
};
createCards();

// Create a single card in DOM
function createCard(data, index){
    const card = document.createElement('div');
    card.classList.add('card');

    // Add "active" class to the first card
    if(index === 0) card.classList.add('active');

    card.innerHTML = `
        <div class="inner-card">

            <div class="inner-card-front">
                <p>${data.question}</p>
            </div>
            <div class="inner-card-back">
                <p>${data.answer}</p>
            </div>

        </div>
    `;

    // Add to DOM cards
    cardsEl.push(card);

    cardsContainer.appendChild(card);

};
