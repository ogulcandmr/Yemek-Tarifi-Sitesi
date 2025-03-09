document.addEventListener('DOMContentLoaded', () => {
    // Arama işlevselliği
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            performSearch(searchInput.value);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }

    // Ana sayfada sadece öne çıkan tarifleri yükle
    loadFeaturedRecipes();
});

async function loadFeaturedRecipes() {
    try {
        const response = await fetch('/api/featured-recipes');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const recipes = await response.json();
        displayRecipes(recipes);
    } catch (error) {
        console.error('Tarifleri getirme hatası:', error);
    }
}

async function performSearch(searchTerm) {
    if (!searchTerm.trim()) return;

    try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const results = await response.json();
        displayRecipes(results);
    } catch (error) {
        console.error('Arama hatası:', error);
    }
}

function displayRecipes(recipes) {
    const recipeGrid = document.querySelector('.recipe-grid');
    recipeGrid.innerHTML = '';

    if (recipes.length === 0) {
        recipeGrid.innerHTML = '<p class="no-results">Tarif bulunamadı.</p>';
        return;
    }

    recipes.forEach(recipe => {
        recipeGrid.innerHTML += `
            <div class="recipe-card">
                <div class="recipe-image">
                    <img src="${recipe.resim_url}" alt="${recipe.baslik}">
                </div>
                <div class="recipe-content">
                    <span class="recipe-category">${recipe.kategori}</span>
                    <h3 class="recipe-title">${recipe.baslik}</h3>
                    <p class="recipe-description">${recipe.aciklama}</p>
                    <div class="recipe-meta">
                        <span>🕒 ${recipe.sure} dakika</span>
                        <span>👤 ${recipe.porsiyon} kişilik</span>
                    </div>
                    <a href="/tarif/${recipe.id}" class="recipe-button">Tarifi Gör</a>
                </div>
            </div>
        `;
    });
} 