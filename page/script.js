const CONFIG = {
    difficulties: {
        4: { size: 4, name: 'Fácil' },
        6: { size: 6, name: 'Médio' },
        8: { size: 8, name: 'Difícil' },
        10: { size: 10, name: 'Insano' }
    },
    defaultDifficulty: 4,
    emojis: ['🎮', '🎨', '🎭', '🎪', '🎯', '🎲', '🎸', '🎺', 
             '🎻', '🎳', '🎴', '🀄', '🧩', '🎀', '🎁', '🎊']
};

const gameState = {
    currentDifficulty: CONFIG.defaultDifficulty,
    gridSize: 4,
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    totalPairs: 8,
    moves: 0,
    timerStarted: false,
    elapsedSeconds: 0,
    gameOver: false,
    gameWon: false
};

const DOM = {
    gameBoard: document.getElementById('gameBoard')
};

function initGame() {
    resetGameState();
    generateCards();
    renderBoard();
}

function resetGameState() {
    gameState.cards = [];
    gameState.flippedCards = [];
    gameState.matchedPairs = 0;
    gameState.moves = 0;
    gameState.elapsedSeconds = 0;
    gameState.timerStarted = false;
    gameState.gameWon = false;
    gameState.gridSize = CONFIG.difficulties[gameState.currentDifficulty].size;
    gameState.totalPairs = (gameState.gridSize * gameState.gridSize) / 2;
}

function generateCards() {
    const totalCards = gameState.gridSize * gameState.gridSize;
    const pairsNeeded = totalCards / 2;
    const selectedEmojis = CONFIG.emojis.slice(0, pairsNeeded);
    const cardPairs = [...selectedEmojis, ...selectedEmojis];
    gameState.cards = shuffleArray(cardPairs).map((emoji, index) => ({
        id: index,
        emoji: emoji,
        matched: false,
        flipped: false
    }));
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function renderBoard() {
    DOM.gameBoard.innerHTML = '';
    DOM.gameBoard.setAttribute('data-size', gameState.gridSize);
    
    gameState.cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.id = `card-${card.id}`;

        const innerElement = document.createElement('div');
        innerElement.className = 'card-inner';
        innerElement.textContent = card.emoji;
        cardElement.appendChild(innerElement);

        cardElement.addEventListener('click', () => handleCardClick(card.id));
        
        DOM.gameBoard.appendChild(cardElement);
    });
}

function handleCardClick(cardId) {
    // Bloqueia cliques se jogo acabou ou se já tem 2 cartas viradas
    if (gameState.gameOver || gameState.gameWon) return;
    if (gameState.flippedCards.length >= 2) return;
    
    const card = gameState.cards[cardId];
    
    // Bloqueia se já está virada ou já é um par
    if (card.flipped || card.matched) return;
    
    // Vira a carta
    card.flipped = true;
    gameState.flippedCards.push(card);
    
    // Atualiza visual
    updateCardVisual(cardId);
    
    // Se virou a segunda carta, verifica
    if (gameState.flippedCards.length === 2) {
        checkMatch();
    }
}

function updateCardVisual(cardId) {
    const cardElement = document.getElementById(`card-${cardId}`);
    cardElement.classList.add('flipped');
}

function checkMatch() {
    const [card1, card2] = gameState.flippedCards;
    
    // Bloqueia cliques enquanto verifica
    disableAllCards();
    
    // Aguarda um pouco antes de verificar (pra ver as duas cartas)
    setTimeout(() => {
        if (card1.emoji === card2.emoji) {
            // ENCONTROU PAR!
            card1.matched = true;
            card2.matched = true;
            gameState.matchedPairs++;
            
            // Marca como matched visualmente
            document.getElementById(`card-${card1.id}`).classList.add('matched');
            document.getElementById(`card-${card2.id}`).classList.add('matched');
            
            // Incrementa movimentos
            gameState.moves++;
            
            // Reseta flipped cards
            gameState.flippedCards = [];
            
            // Desbloqueia cartas
            enableAllCards();
            
            // Verifica se ganhou
            if (gameState.matchedPairs === gameState.totalPairs) {
                endGameVictory();
            }
        } else {
            // NÃO é par - vira de volta
            card1.flipped = false;
            card2.flipped = false;
            
            document.getElementById(`card-${card1.id}`).classList.remove('flipped');
            document.getElementById(`card-${card2.id}`).classList.remove('flipped');
            
            // Incrementa movimentos
            gameState.moves++;
            
            // Reseta flipped cards
            gameState.flippedCards = [];
            
            // Desbloqueia cartas
            enableAllCards();
        }
    }, 1000);
}

function disableAllCards() {
    document.querySelectorAll('.card').forEach(el => {
        el.style.pointerEvents = 'none';
    });
}

function enableAllCards() {
    document.querySelectorAll('.card').forEach(el => {
        el.style.pointerEvents = 'auto';
    });
}

function endGameVictory() {
    gameState.gameWon = true;
    gameState.gameOver = true;
    console.log('🎉 Você venceu!');
    console.log(`Movimentos: ${gameState.moves}`);
}

function attachEventListeners() {
    // Por enquanto vazio
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando jogo...');
    initGame();
    attachEventListeners();
});