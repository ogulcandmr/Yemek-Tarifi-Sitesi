const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// SQLite veritabanı bağlantısı
const db = new sqlite3.Database('recipes.db', (err) => {
    if (err) {
        console.error('Veritabanına bağlanılamadı:', err);
        return;
    }
    console.log('Veritabanına başarıyla bağlandı.');
    
    // Veritabanı şemasını oluştur
    const schema = require('fs').readFileSync('database.sql', 'utf8');
    db.exec(schema, (err) => {
        if (err) {
            console.error('Şema oluşturma hatası:', err);
            return;
        }
        console.log('Veritabanı şeması oluşturuldu');
    });
});

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Tüm tarifleri getiren endpoint
app.get('/api/recipes', (req, res) => {
    const query = 'SELECT * FROM tarifler ORDER BY created_at DESC';
    
    db.all(query, [], (err, results) => {
        if (err) {
            console.error('Veritabanı sorgu hatası:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        console.log('Bulunan tarif sayısı:', results.length);
        res.json(results);
    });
});

// Arama API endpoint'i
app.get('/api/search', (req, res) => {
    const searchTerm = req.query.q;
    const query = `
        SELECT * FROM tarifler 
        WHERE baslik LIKE ? OR 
              aciklama LIKE ?
    `;
    
    db.all(query, 
        [`%${searchTerm}%`, `%${searchTerm}%`], 
        (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(results);
        });
});

// Öne çıkan tarifleri getiren endpoint
app.get('/api/featured-recipes', (req, res) => {
    const query = 'SELECT * FROM tarifler WHERE one_cikan = 1';
    
    db.all(query, [], (err, results) => {
        if (err) {
            console.error('Veritabanı sorgu hatası:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        console.log('Bulunan öne çıkan tarif sayısı:', results.length);
        res.json(results);
    });
});

// Kategori bazlı tarifleri getiren endpoint
app.get('/api/categories/:kategori', (req, res) => {
    const kategori = req.params.kategori;
    const query = 'SELECT * FROM tarifler WHERE kategori = ?';
    
    db.all(query, [kategori], (err, results) => {
        if (err) {
            console.error('Veritabanı sorgu hatası:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        console.log(`${kategori} kategorisinde bulunan tarif sayısı:`, results.length);
        res.json(results);
    });
});

// Tüm kategorileri getiren endpoint
app.get('/api/categories', (req, res) => {
    const query = 'SELECT DISTINCT kategori FROM tarifler ORDER BY kategori';
    
    db.all(query, [], (err, results) => {
        if (err) {
            console.error('Veritabanı sorgu hatası:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Kategori sayfalarını yönlendir
app.get('/kategoriler/:kategori', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kategoriler.html'));
});

// Kategoriler ana sayfası için
app.get('/kategoriler', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kategoriler.html'));
});

// Tarif detay sayfası
app.get('/tarif/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tarif.html'));
});

// Tarif detaylarını getiren API endpoint'i
app.get('/api/recipes/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM tarifler WHERE id = ?';
    
    db.get(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!result) {
            res.status(404).json({ error: 'Tarif bulunamadı' });
            return;
        }
        res.json(result);
    });
});

// Server'ı başlat
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
}); 