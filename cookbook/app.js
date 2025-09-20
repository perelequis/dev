// Acessa a variável `recipes` do arquivo data.js

const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const filterButtons = document.querySelectorAll('.filter-btn');

// --- Funções de Lógica ---

function fuzzySearch(query, text) {
    query = query.toLowerCase().trim();
    text = text.toLowerCase();
    
    if (text.includes(query)) return true;
    
    const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    query = removeAccents(query);
    text = removeAccents(text);
    
    if (text.includes(query)) return true;
    
    let queryIndex = 0;
    let textIndex = 0;
    let matches = 0;
    
    while (queryIndex < query.length && textIndex < text.length) {
        if (query[queryIndex] === text[textIndex]) {
            matches++;
            queryIndex++;
        }
        textIndex++;
    }
    
    return matches / query.length >= 0.7;
}

function renderRecipes(recipesToShow = recipes) {
    if (recipesToShow.length === 0) {
        recipesContainer.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    recipesToShow.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    
    recipesContainer.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer" onclick="openModal(${recipe.id})">
            <div class="h-48 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                <div class="text-6xl">${recipe.image}</div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${recipe.name}</h3>
                <p class="text-gray-600 text-sm mb-3">por ${recipe.author}</p>
                <div class="flex justify-between text-sm text-gray-500">
                    <span>⏱️ ${recipe.prepTime + ' + ' + recipe.cookTime}</span>
                    <span>👥 ${recipe.servings}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
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
                
                <div class="flex gap-6 mb-8 text-sm">
                    <div class="flex items-center gap-2">
                        <span>⏱️</span>
                        <span>Preparo: ${recipe.prepTime}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span>🔥</span>
                        <span>Cozimento: ${recipe.cookTime}</span>
                    </div>
                    <div class="flex items-center gap-2">
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

function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function handleSearchAndFilter() {
    const query = searchInput.value.trim();
    const activeCategory = document.querySelector('.filter-btn.bg-orange-500').dataset.category;
    
    let filteredRecipes = recipes;

    // Filter by category first
    if (activeCategory !== 'Todos') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category === activeCategory);
    }
    
    // Then filter by search query
    if (query !== '') {
        filteredRecipes = filteredRecipes.filter(recipe => {
            return fuzzySearch(query, recipe.name) || 
                   recipe.ingredients.some(ingredient => fuzzySearch(query, ingredient)) ||
                   fuzzySearch(query, recipe.author);
        });
    }

    renderRecipes(filteredRecipes);
}

function setupEventListeners() {
    searchInput.addEventListener('input', handleSearchAndFilter);

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-orange-500', 'text-white');
                btn.classList.add('bg-orange-200', 'text-gray-700');
            });
            e.target.classList.remove('bg-orange-200', 'text-gray-700');
            e.target.classList.add('bg-orange-500', 'text-white');
            
            handleSearchAndFilter();
        });
    });

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

function initializeApp() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    setupEventListeners();
    renderRecipes();
}

// Inicializa a aplicação quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', initializeApp);
