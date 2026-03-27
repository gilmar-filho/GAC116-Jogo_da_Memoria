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

document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando jogo...');
    initGame();
});

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
        cardElement.textContent = '?';
        DOM.gameBoard.appendChild(cardElement);
    });
}