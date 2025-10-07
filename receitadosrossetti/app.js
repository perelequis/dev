const header = document.querySelector('header');
const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const recipeModalOverlay = document.getElementById('recipeModalOverlay');
const recipeModalContent = document.getElementById('recipeModalContent');
const categoryFilter = document.getElementById('categoryFilter');
const timeFilter = document.getElementById('timeFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const mealTypeFilter = document.getElementById('mealTypeFilter');

const openFiltersBtn = document.getElementById('openFiltersBtn');
const filtersModalOverlay = document.getElementById('filtersModalOverlay');
const closeFiltersBtn = document.getElementById('closeFiltersBtn');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');

let lastScrollY = window.scrollY;

function handleHeaderScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
}

function fuzzySearch(query, text) {
    query = query.toLowerCase().trim();
    text = text.toLowerCase();
    if (text.includes(query)) return true;
    const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    query = removeAccents(query);
    text = removeAccents(text);
    return text.includes(query);
}

function parseTime(timeStr) {
    if (!timeStr || typeof timeStr !== 'string') return 0;
    const timeMatch = timeStr.match(/(\d+)/);
    return timeMatch ? parseInt(timeMatch[0], 10) : 0;
}

function renderRecipes(recipesToShow = recipes) {
    if (recipesToShow.length === 0) {
        recipesContainer.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    noResults.classList.add('hidden');
    recipesToShow.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    recipesContainer.innerHTML = recipesToShow.map(recipe => {
        const totalTime = parseTime(recipe.prepTime) + parseTime(recipe.cookTime);
        return `
        <div class="recipe-card bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer" onclick="openRecipeModal(${recipe.id})">
            <div class="h-48 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                <div class="text-6xl">${recipe.image}</div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${recipe.name}</h3>
                <p class="text-gray-600 text-sm mb-3">por ${recipe.author}</p>
                <div class="flex justify-between text-sm text-gray-500">
                    <span><i class="fa-regular fa-clock mr-1"></i> ${totalTime} min</span>
                    <span><i class="fa-solid fa-user-group mr-1"></i> ${recipe.servings}</span>
                </div>
            </div>
        </div>
    `}).join('');
}

function openRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    const totalTime = parseTime(recipe.prepTime) + parseTime(recipe.cookTime);
    const savedObservation = localStorage.getItem(`recipe_obs_${recipe.id}`) || '';

    recipeModalContent.innerHTML = `
        <div class="relative">
            <button onclick="closeRecipeModal()" class="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors" aria-label="Fechar receita">
                <i class="fa-solid fa-xmark text-xl text-gray-600"></i>
            </button>
            <div class="h-64 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center"><div class="text-8xl">${recipe.image}</div></div>
            <div class="p-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-2">${recipe.name}</h2>
                <p class="text-gray-600 mb-6">por ${recipe.author}</p>
                <div class="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-gray-700">
                    <div class="flex items-center gap-2" title="Tempo total"><i class="fa-regular fa-clock text-orange-500"></i><span>${totalTime} min</span></div>
                    <div class="flex items-center gap-2" title="Dificuldade"><i class="fa-solid fa-star text-orange-500"></i><span>${recipe.difficulty.join(', ')}</span></div>
                    <div class="flex items-center gap-2" title="Rendimento"><i class="fa-solid fa-user-group text-orange-500"></i><span>${recipe.servings}</span></div>
                </div>

                <div class="mt-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2"><i class="fa-solid fa-carrot mr-2 text-orange-500"></i>Ingredientes</h3>
                    <ul class="space-y-2">${recipe.ingredients.map(ingredient => `<li class="flex items-start gap-3"><span class="text-orange-500 mt-1.5 text-xs"><i class="fa-solid fa-circle"></i></span><span class="text-gray-700">${ingredient}</span></li>`).join('')}</ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2"><i class="fa-solid fa-kitchen-set mr-2 text-orange-500"></i>Modo de Preparo</h3>
                    <ol class="space-y-4">${recipe.instructions.map((instruction, index) => `<li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">${index + 1}</span><span class="text-gray-700 pt-1">${instruction}</span></li>`).join('')}</ol>
                </div>
                
                <div class="mt-8">
                     <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2"><i class="fa-regular fa-pen-to-square mr-2 text-orange-500"></i>Observações Pessoais</h3>
                     <textarea id="observationText" class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:outline-none" rows="4" placeholder="Ex: Adicionar menos sal da próxima vez...">${savedObservation}</textarea>
                     <button id="saveObservationBtn" onclick="saveObservation(${recipe.id})" class="mt-3 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">Salvar Observação</button>
                </div>
            </div>
        </div>
    `;
    recipeModalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
    recipeModalOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function openFiltersModal() {
    filtersModalOverlay.classList.remove('hidden');
}

function closeFiltersModal() {
    filtersModalOverlay.classList.add('hidden');
}

function handleSearchAndFilter() {
    const query = searchInput.value.trim();
    const selectedCategory = categoryFilter.value;
    const selectedTime = timeFilter.value;
    const selectedDifficulty = difficultyFilter.value;
    const selectedMealType = mealTypeFilter.value;
    let filteredRecipes = recipes;

    if (selectedCategory !== 'Todos') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category.includes(selectedCategory));
    }
    if (selectedDifficulty !== 'Todos') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.difficulty.includes(selectedDifficulty));
    }
    if (selectedMealType !== 'Todos') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.mealType.includes(selectedMealType));
    }
    if (selectedTime !== 'Todos') {
        filteredRecipes = filteredRecipes.filter(recipe => {
            const totalTime = parseTime(recipe.prepTime) + parseTime(recipe.cookTime);
            if (selectedTime === 'Rapidas') return totalTime <= 15;
            if (selectedTime === 'Intermediarias') return totalTime > 15 && totalTime <= 45;
            if (selectedTime === 'Elaboradas') return totalTime > 45;
            return true;
        });
    }
    if (query !== '') {
        filteredRecipes = filteredRecipes.filter(recipe => {
            return fuzzySearch(query, recipe.name) || 
                   recipe.ingredients.some(ingredient => fuzzySearch(query, ingredient)) ||
                   fuzzySearch(query, recipe.author);
        });
    }
    renderRecipes(filteredRecipes);
}

function clearAllFilters() {
    categoryFilter.value = 'Todos';
    timeFilter.value = 'Todos';
    difficultyFilter.value = 'Todos';
    mealTypeFilter.value = 'Todos';
    searchInput.value = '';
    handleSearchAndFilter();
    closeFiltersModal();
}

function saveObservation(recipeId) {
    const observationText = document.getElementById('observationText').value;
    localStorage.setItem(`recipe_obs_${recipe.id}`, observationText);
    
    const saveBtn = document.getElementById('saveObservationBtn');
    saveBtn.textContent = 'Salvo!';
    saveBtn.classList.add('bg-green-500', 'hover:bg-green-600');
    saveBtn.classList.remove('bg-orange-500', 'hover:bg-orange-600');

    setTimeout(() => {
        saveBtn.textContent = 'Salvar Observação';
        saveBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
        saveBtn.classList.add('bg-orange-500', 'hover:bg-orange-600');
    }, 2000);
}

function setupEventListeners() {
    searchInput.addEventListener('input', handleSearchAndFilter);
    
    openFiltersBtn.addEventListener('click', openFiltersModal);
    closeFiltersBtn.addEventListener('click', closeFiltersModal);
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    applyFiltersBtn.addEventListener('click', () => {
        handleSearchAndFilter();
        closeFiltersModal();
    });

    recipeModalOverlay.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeRecipeModal();
    });
    filtersModalOverlay.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeFiltersModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeRecipeModal();
            closeFiltersModal();
        }
    });

    window.addEventListener('scroll', handleHeaderScroll);
}

function initializeApp() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    setupEventListeners();
    renderRecipes();
}

document.addEventListener('DOMContentLoaded', initializeApp);