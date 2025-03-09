document.addEventListener('DOMContentLoaded', () => {
    // URL'den tarif ID'sini al
    const tarifId = window.location.pathname.split('/').pop();
    loadRecipeDetails(tarifId);
});

async function loadRecipeDetails(id) {
    try {
        const response = await fetch(`/api/recipes/${id}`);
        if (!response.ok) {
            throw new Error('Tarif bulunamadı');
        }
        const recipe = await response.json();
        displayRecipeDetails(recipe);
    } catch (error) {
        console.error('Tarif yükleme hatası:', error);
        document.querySelector('.recipe-container').innerHTML = '<p class="error">Tarif bulunamadı</p>';
    }
}

function displayRecipeDetails(recipe) {
    const container = document.querySelector('.recipe-container');
    
    container.innerHTML = `
        <div class="recipe-header">
            <img src="${recipe.resim_url}" alt="${recipe.baslik}">
            <h1>${recipe.baslik}</h1>
            <div class="recipe-meta-info">
                <span>🕒 ${recipe.sure} dakika</span>
                <span>👤 ${recipe.porsiyon} kişilik</span>
                <span>📑 ${recipe.kategori}</span>
            </div>
            <p>${recipe.aciklama}</p>
        </div>
        
        <div class="recipe-sections">
            <div class="ingredients">
                <h2>Malzemeler</h2>
                <div class="ingredients-list">
                    ${formatIngredients(recipe.malzemeler)}
                </div>
            </div>
            
            <div class="instructions">
                <h2>Yapılışı</h2>
                <div class="instructions-list">
                    ${formatInstructions(recipe.yapilis)}
                </div>
            </div>
        </div>
    `;
}

function formatIngredients(ingredients) {
    if (!ingredients) return '<p>Malzeme listesi bulunamadı</p>';
    
    // Malzemeleri satır satır böl ve HTML listesine çevir
    return ingredients.split('\n')
        .filter(line => line.trim())
        .map(line => {
            if (line.startsWith('-')) {
                return `<li>${line.substring(1).trim()}</li>`;
            } else if (line.endsWith(':')) {
                return `<h3>${line}</h3>`;
            }
            return `<li>${line}</li>`;
        })
        .join('');
}

function formatInstructions(instructions) {
    if (!instructions) return '<p>Yapılış tarifi bulunamadı</p>';
    
    // Yapılış adımlarını satır satır böl ve numaralı liste oluştur
    return '<ol>' + 
        instructions.split('\n')
            .filter(line => line.trim())
            .map(line => {
                const step = line.replace(/^\d+\.\s*/, '').trim();
                return `<li>${step}</li>`;
            })
            .join('') + 
        '</ol>';
} 