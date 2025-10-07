const SorteadorApp = {
    state: {
        minNum: 1,
        maxNum: 100,
        quantity: 1,
        isAnimating: false,
        animationInterval: null,
        usedNumbers: new Set(),
    },

    elements: {},

    init() {
        this.cacheElements();
        this.bindEvents();
        this.elements.currentYear.textContent = new Date().getFullYear();
    },

    cacheElements() {
        this.elements = {
            mainPage: document.getElementById('mainPage'),
            overlayPage: document.getElementById('overlayPage'),
            minNumberInput: document.getElementById('minNumber'),
            maxNumberInput: document.getElementById('maxNumber'),
            quantityInput: document.getElementById('quantity'),
            startButton: document.getElementById('startButton'),
            drawButton: document.getElementById('drawButton'),
            newDrawButton: this.createNewDrawButton(), // Botão criado dinamicamente
            backButton: document.getElementById('backButton'),
            numberDisplay: document.getElementById('numberDisplay'),
            rangeDisplay: document.getElementById('rangeDisplay'),
            animationStatus: document.getElementById('animationStatus'),
            errorMessage: document.getElementById('errorMessage'),
            historyDisplay: document.getElementById('historyDisplay'),
            currentYear: document.getElementById('currentYear'),
        };
        // Adiciona o novo botão ao DOM
        this.elements.drawButton.parentElement.insertBefore(this.elements.newDrawButton, this.elements.backButton);
    },

    createNewDrawButton() {
        const button = document.createElement('button');
        button.id = 'newDrawButton';
        button.className = 'btn-success w-full hidden'; // Usa a mesma classe do botão de sortear
        button.textContent = 'Sortear Novamente';
        return button;
    },

    bindEvents() {
        this.elements.startButton.addEventListener('click', () => this.startSorteio());
        this.elements.drawButton.addEventListener('click', () => this.handleDraw());
        this.elements.newDrawButton.addEventListener('click', () => this.resetForNewDraw());
        this.elements.backButton.addEventListener('click', () => this.goBack());
    },

    startSorteio() {
        const min = parseInt(this.elements.minNumberInput.value, 10);
        const max = parseInt(this.elements.maxNumberInput.value, 10);
        const quantity = parseInt(this.elements.quantityInput.value, 10);

        if (!this.validateInputs(min, max, quantity)) return;

        this.state.minNum = min;
        this.state.maxNum = max;
        this.state.quantity = quantity;
        this.state.usedNumbers.clear();

        this.elements.rangeDisplay.textContent = `Sorteando ${quantity} número(s) entre ${min} e ${max}`;
        this.elements.overlayPage.classList.remove('hidden');
        this.resetDrawPage();
    },

    validateInputs(min, max, quantity) {
        if (isNaN(min) || isNaN(max) || isNaN(quantity)) {
            this.showError('Por favor, preencha todos os campos com números válidos.');
            return false;
        }
        if (min >= max) {
            this.showError('O número máximo deve ser maior que o número mínimo.');
            return false;
        }
        if (quantity < 1) {
            this.showError('A quantidade a sortear deve ser de no mínimo 1.');
            return false;
        }
        const availableNumbers = max - min + 1;
        if (quantity > availableNumbers) {
            this.showError('A quantidade a sortear é maior que os números disponíveis.');
            return false;
        }
        this.showError('');
        return true;
    },

    showError(message) {
        this.elements.errorMessage.textContent = message;
        this.elements.errorMessage.style.opacity = message ? '1' : '0';
    },

    handleDraw() {
        if (this.state.isAnimating) {
            this.stopAnimationAndRevealResult();
        } else {
            const availableNumbers = (this.state.maxNum - this.state.minNum + 1) - this.state.usedNumbers.size;
            if (this.state.quantity > availableNumbers) {
                this.elements.animationStatus.textContent = "Não há números únicos suficientes para um novo sorteio.";
                return;
            }
            this.startNumberAnimation();
        }
    },

    startNumberAnimation() {
        this.state.isAnimating = true;
        this.elements.drawButton.textContent = 'Parar e Sortear';
        this.elements.drawButton.classList.remove('pulse-animation');
        this.elements.backButton.disabled = true;
        this.elements.animationStatus.textContent = 'Sorteando...';
        
        this.state.animationInterval = setInterval(() => {
            const randomNum = Math.floor(Math.random() * (this.state.maxNum - this.state.minNum + 1)) + this.state.minNum;
            this.elements.numberDisplay.textContent = randomNum;
        }, 100);
    },

    stopAnimationAndRevealResult() {
        this.state.isAnimating = false;
        clearInterval(this.state.animationInterval);

        const results = [];
        for (let i = 0; i < this.state.quantity; i++) {
            results.push(this.getUniqueRandomNumber());
        }

        this.updateDisplayWithResults(results);

        this.elements.drawButton.classList.add('hidden');
        this.elements.newDrawButton.classList.remove('hidden');
        this.elements.backButton.disabled = false;
    },
    
    updateDisplayWithResults(results) {
        this.elements.numberDisplay.classList.add('final-reveal');
        
        if (results.length === 1) {
            this.elements.numberDisplay.textContent = results[0];
            this.elements.animationStatus.innerHTML = `🎉 Número sorteado: <strong>${results[0]}</strong>`;
        } else {
            this.elements.numberDisplay.textContent = "OK!";
            this.elements.animationStatus.textContent = `🎉 ${results.length} números sorteados!`;
        }
        
        this.elements.numberDisplay.addEventListener('animationend', () => {
            this.elements.numberDisplay.classList.remove('final-reveal');
        }, { once: true });

        results.forEach(num => {
            const historyElement = document.createElement('div');
            historyElement.className = 'history-number';
            historyElement.textContent = num;
            this.elements.historyDisplay.appendChild(historyElement);
        });
    },

    getUniqueRandomNumber() {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * (this.state.maxNum - this.state.minNum + 1)) + this.state.minNum;
        } while (this.state.usedNumbers.has(randomNum));
        
        this.state.usedNumbers.add(randomNum);
        return randomNum;
    },

    resetForNewDraw() {
        this.elements.numberDisplay.textContent = '?';
        this.elements.animationStatus.textContent = 'Clique em "Sortear" para começar';
        this.elements.newDrawButton.classList.add('hidden');
        this.elements.drawButton.classList.remove('hidden');
        this.elements.drawButton.textContent = 'Sortear';
        this.elements.drawButton.classList.add('pulse-animation');
        this.handleDraw(); // Inicia a animação para o próximo sorteio
    },

    resetDrawPage() {
        this.elements.numberDisplay.textContent = '?';
        this.elements.animationStatus.textContent = 'Clique em "Sortear" para começar';
        this.elements.historyDisplay.innerHTML = '';
        this.elements.drawButton.textContent = 'Sortear';
        this.elements.drawButton.classList.remove('hidden');
        this.elements.drawButton.classList.add('pulse-animation');
        this.elements.newDrawButton.classList.add('hidden');
        this.elements.backButton.disabled = false;
    },

    goBack() {
        if (this.state.isAnimating) {
            clearInterval(this.state.animationInterval);
            this.state.isAnimating = false;
        }
        this.elements.overlayPage.classList.add('hidden');
    }
};

document.addEventListener('DOMContentLoaded', () => SorteadorApp.init());