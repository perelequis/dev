// --- Seleção de Elementos do DOM ---
const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

// Novos seletores para os filtros
const categoryFilter = document.getElementById('categoryFilter');
const timeFilter = document.getElementById('timeFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const mealTypeFilter = document.getElementById('mealTypeFilter');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');


// --- Funções de Lógica ---

/**
 * Realiza uma busca aproximada (fuzzy search) para encontrar uma query dentro de um texto.
 */
function fuzzySearch(query, text) {
    query = query.toLowerCase().trim();
    text = text.toLowerCase();
    
    if (text.includes(query)) return true;
    
    const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    query = removeAccents(query);
    text = removeAccents(text);
    
    return text.includes(query);
}

/**
 * Converte uma string de tempo (ex: "15 min") para um número inteiro de minutos.
 */
function parseTime(timeStr) {
    if (!timeStr || typeof timeStr !== 'string') return 0;
    const timeMatch = timeStr.match(/(\d+)/);
    return timeMatch ? parseInt(timeMatch[0], 10) : 0;
}

/**
 * Renderiza as receitas na página.
 * @param {Array} recipesToShow - A lista de receitas a ser exibida.
 */
function renderRecipes(recipesToShow = recipes) {
    if (recipesToShow.length === 0) {
        recipesContainer.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    // Ordena as receitas em ordem alfabética
    recipesToShow.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    
    recipesContainer.innerHTML = recipesToShow.map(recipe => {
        const totalTime = parseTime(recipe.prepTime) + parseTime(recipe.cookTime);
        return `
        <div class="recipe-card bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer" onclick="openModal(${recipe.id})">
            <div class="h-48 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                <div class="text-6xl">${recipe.image}</div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${recipe.name}</h3>
                <p class="text-gray-600 text-sm mb-3">por ${recipe.author}</p>
                <div class="flex justify-between text-sm text-gray-500">
                    <span>⏱️ ${totalTime} min</span>
                    <span>👥 ${recipe.servings}</span>
                </div>
            </div>
        </div>
    `}).join('');
}

/**
 * Abre o modal com os detalhes de uma receita específica.
 * @param {number} recipeId - O ID da receita a ser exibida.
 */
function openModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const totalTime = parseTime(recipe.prepTime) + parseTime(recipe.cookTime);

    modalContent.innerHTML = `
        <div class="relative">
            <button onclick="closeModal()" class="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            
            <div class="h-64 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                <div class="text-8xl">${recipe.image}</div>
            </div>
            
            <div class="p-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-2">${recipe.name}</h2>
                <p class="text-gray-600 mb-6">por ${recipe.author}</p>
                
                <div class="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-gray-700">
                    <div class="flex items-center gap-2" title="Tempo total">
                        <span>⏱️</span>
                        <span>${totalTime} min</span>
                    </div>
                    <div class="flex items-center gap-2" title="Dificuldade">
                        <span>⭐</span>
                        <span>${recipe.difficulty.join(', ')}</span>
                    </div>
                    <div class="flex items-center gap-2" title="Rendimento">
                        <span>👥</span>
                        <span>${recipe.servings}</span>
                    </div>
                </div>
                
                <div class="mb-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">🛒 Ingredientes</h3>
                    <ul class="space-y-2">
                        ${recipe.ingredients.map(ingredient => `
                            <li class="flex items-start gap-3">
                                <span class="text-orange-500 mt-1">•</span>
                                <span class="text-gray-700">${ingredient}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">👩‍🍳 Modo de Preparo</h3>
                    <ol class="space-y-4">
                        ${recipe.instructions.map((instruction, index) => `
                            <li class="flex gap-4">
                                <span class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                    ${index + 1}
                                </span>
                                <span class="text-gray-700 pt-1">${instruction}</span>
                            </li>
                        `).join('')}
                    </ol>
                </div>
            </div>
        </div>
    `;
    
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Fecha o modal.
 */
function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

/**
 * Função principal que aplica todos os filtros e a busca.
 */
function handleSearchAndFilter() {
    // 1. Pega os valores atuais de todos os filtros
    const query = searchInput.value.trim();
    const selectedCategory = categoryFilter.value;
    const selectedTime = timeFilter.value;
    const selectedDifficulty = difficultyFilter.value;
    const selectedMealType = mealTypeFilter.value;

    // 2. Começa com a lista completa de receitas
    let filteredRecipes = recipes;

    // 3. Aplica o filtro de CATEGORIA
    if (selectedCategory !== 'Todos') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category.includes(selectedCategory));
    }

    // 4. Aplica o filtro de DIFICULDADE
    if (selectedDifficulty !== 'Todos') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.difficulty.includes(selectedDifficulty));
    }

    // 5. Aplica o filtro de TIPO DE REFEIÇÃO
    if (selectedMealType !== 'Todos') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.mealType.includes(selectedMealType));
    }

    // 6. Aplica o filtro de TEMPO DE PREPARO
    if (selectedTime !== 'Todos') {
        filteredRecipes = filteredRecipes.filter(recipe => {
            const totalTime = parseTime(recipe.prepTime) + parseTime(recipe.cookTime);
            if (selectedTime === 'Rapidas') return totalTime <= 15;
            if (selectedTime === 'Intermediarias') return totalTime > 15 && totalTime <= 45;
            if (selectedTime === 'Elaboradas') return totalTime > 45;
            return true;
        });
    }

    // 7. Aplica a BUSCA por texto (no resultado já filtrado)
    if (query !== '') {
        filteredRecipes = filteredRecipes.filter(recipe => {
            return fuzzySearch(query, recipe.name) || 
                   recipe.ingredients.some(ingredient => fuzzySearch(query, ingredient)) ||
                   fuzzySearch(query, recipe.author);
        });
    }

    // 8. Renderiza o resultado final
    renderRecipes(filteredRecipes);
}

/**
 * Limpa todos os filtros e a busca, e re-renderiza as receitas.
 */
function clearFilters() {
    categoryFilter.value = 'Todos';
    timeFilter.value = 'Todos';
    difficultyFilter.value = 'Todos';
    mealTypeFilter.value = 'Todos';
    searchInput.value = '';
    handleSearchAndFilter();
}

/**
 * Configura todos os event listeners da aplicação.
 */
function setupEventListeners() {
    // Listener para a barra de busca
    searchInput.addEventListener('input', handleSearchAndFilter);

    // Listeners para os menus de filtro
    categoryFilter.addEventListener('change', handleSearchAndFilter);
    timeFilter.addEventListener('change', handleSearchAndFilter);
    difficultyFilter.addEventListener('change', handleSearchAndFilter);
    mealTypeFilter.addEventListener('change', handleSearchAndFilter);

    // Listener para o botão de limpar
    clearFiltersBtn.addEventListener('click', clearFilters);
    
    // Listeners do Modal
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

/**
 * Inicializa a aplicação.
 */
function initializeApp() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    setupEventListeners();
    renderRecipes(); // Renderiza todas as receitas inicialmente
}

// Inicializa a aplicação quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', initializeApp);
