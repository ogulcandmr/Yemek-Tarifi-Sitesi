document.addEventListener('DOMContentLoaded', () => {
    // URL'den kategori parametresini al
    const kategori = window.location.pathname.split('/').pop();
    
    if (kategori && kategori !== 'kategoriler') {
        // Belirli bir kategori seçilmişse
        loadCategoryRecipes(decodeURIComponent(kategori));
        // Hero section'daki başlığı güncelle
        document.querySelector('.hero h1').textContent = `${decodeURIComponent(kategori)} Tarifleri`;
    } else {
        // Kategori seçilmemişse tüm kategorileri göster
        loadAllCategories();
        // Ana kategori sayfasında başlık "Kategoriler" olarak kalsın
        document.querySelector('.hero h1').textContent = 'Kategoriler';
    }
});

async function loadCategoryRecipes(kategori) {
    try {
        const response = await fetch(`/api/categories/${encodeURIComponent(kategori)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const results = await response.json();
        displayResults(results);
    } catch (error) {
        console.error('Tarifleri getirme hatası:', error);
    }
}

async function loadAllCategories() {
    try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const categories = await response.json();
        displayCategories(categories);
    } catch (error) {
        console.error('Kategorileri getirme hatası:', error);
    }
}

function displayCategories(categories) {
    const recipeGrid = document.querySelector('.recipe-grid');
    recipeGrid.innerHTML = '';

    categories.forEach(category => {
        recipeGrid.innerHTML += `
            <div class="category-card">
                <a href="/kategoriler/${encodeURIComponent(category.kategori)}">
                    <h2>${category.kategori}</h2>
                </a>
            </div>
        `;
    });
}

function displayResults(results) {
    const recipeGrid = document.querySelector('.recipe-grid');
    recipeGrid.innerHTML = '';

    if (results.length === 0) {
        recipeGrid.innerHTML = '<p class="no-results">Bu kategoride tarif bulunamadı.</p>';
        return;
    }

    results.forEach(recipe => {
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