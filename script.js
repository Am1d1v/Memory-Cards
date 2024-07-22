

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

    // Show answer
    card.addEventListener('click', () => {
        card.classList.toggle('show-answer');
    });

    // Add to DOM cards
    cardsEl.push(card);

    cardsContainer.appendChild(card);

    updateCurrentText();

};

// Show number of cards
function updateCurrentText(){
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
};

// Next Card
nextButton.addEventListener('click', (event) => {
    cardsEl[currentActiveCard].className = 'card left';

    currentActiveCard = currentActiveCard + 1;

    // Borders
    if(currentActiveCard > cardsEl.length - 1){
        currentActiveCard = currentActiveCard - 1;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});

// Previous Card
prevButton.addEventListener('click', (event) => {
    cardsEl[currentActiveCard].className = 'card right';

    currentActiveCard = currentActiveCard - 1;

    // Borders
    if(currentActiveCard < 0){
        currentActiveCard = 0;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});

