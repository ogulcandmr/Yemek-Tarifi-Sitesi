CREATE TABLE IF NOT EXISTS tarifler (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    baslik TEXT NOT NULL,
    kategori TEXT NOT NULL,
    aciklama TEXT,
    malzemeler TEXT,
    yapilis TEXT,
    sure INTEGER,
    porsiyon INTEGER,
    resim_url TEXT,
    one_cikan BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ANA SAYFA İÇİN ÖNE ÇIKAN TARİFLER
INSERT INTO tarifler (baslik, kategori, aciklama, malzemeler, yapilis, sure, porsiyon, resim_url, one_cikan) VALUES
('Mantı', 
'Ana Yemek', 
'El açması hamur, kıymalı iç harç ve yoğurt ile servis edilen geleneksel lezzet.', 
'Hamur için:
- 3 su bardağı un
- 1 adet yumurta
- 1 çay kaşığı tuz
- Aldığı kadar ılık su

İç harcı için:
- 250 gr kıyma
- 1 adet soğan
- Tuz, karabiber

Üzeri için:
- Sarımsaklı yoğurt
- Kırmızı biber
- Nane
- Tereyağı', 
'1. Hamur için un, yumurta ve tuzu karıştırın
2. Yavaş yavaş su ekleyerek sert bir hamur elde edin
3. 30 dakika dinlendirin
4. İç harç için soğanı rendeleyin ve kıyma ile karıştırın
5. Hamuru açın ve küçük kareler kesin
6. Her karenin içine harç koyup kapatın
7. Kaynayan suda 15-20 dakika pişirin
8. Üzerine sarımsaklı yoğurt ve kızgın tereyağı gezdirin', 
90, 6, '/images/manti-nasil-pisirilir-9853d099-517c-4e89-be1c-960b703dcb8e.webp', 1),

('Mercimek Çorbası', 
'Çorba', 
'Kırmızı mercimek ve sebzelerle hazırlanan besleyici çorba.', 
'Malzemeler:
- 1.5 su bardağı kırmızı mercimek
- 1 adet soğan
- 1 adet havuç
- 2 yemek kaşığı un
- 2 yemek kaşığı tereyağı
- Tuz, karabiber
- Pul biber
- 6 su bardağı su', 
'1. Mercimekleri yıkayın ve süzün
2. Soğanı ve havucu küçük küçük doğrayın
3. Tereyağını eritip soğanları kavurun
4. Havuçları ekleyip 2-3 dakika kavurun
5. Unu ekleyip kokusu çıkana kadar kavurun
6. Mercimek ve suyu ekleyip karıştırın
7. Tuz ve karabiberi ekleyin
8. Mercimekler yumuşayana kadar pişirin', 
45, 6, '/images/images.jpeg', 1),

('Künefe', 
'Tatlı', 
'Kadayıf ve özel peynir ile hazırlanan, sıcak servis edilen muhteşem tatlı.', 
'Malzemeler:
- 500 gr tel kadayıf
- 350 gr tuzsuz Antep peyniri
- 200 gr tereyağı
- Şerbet için:
  - 3 su bardağı şeker
  - 3 su bardağı su', 
'1. Şerbet için şeker ve suyu kaynatın
2. Kadayıfı ince ince kıyın
3. Tereyağını eritin ve kadayıfa karıştırın
4. Künefe tepsisine yarısını yayın
5. Peyniri yerleştirin
6. Kalan kadayıfı üzerine koyun
7. 180 derece fırında pişirin', 
30, 4, '/images/kunefe.webp', 1),

('İskender Kebap', 
'Ana Yemek', 
'Döner, tereyağlı pide, domates sosu ve yoğurt ile hazırlanan enfes lezzet.', 
'Malzemeler:
- 500 gr döner et
- 4 adet pide
- 2 su bardağı yoğurt
- Domates sosu
- Tereyağı', 
'1. Pideleri küçük parçalara bölün
2. Domatesleri rendeleyin ve pişirin
3. Döner etleri ısıtın
4. Pideleri dizin
5. Üzerine yoğurt koyun
6. Döner etleri yerleştirin
7. Domates sosunu gezdirin', 
40, 3, '/images/images (1).jpeg', 1),

('Zeytinyağlı Yaprak Sarma', 
'Zeytinyağlı', 
'Taze asma yaprağına sarılmış pirinç dolması, zeytinyağlı nefaset.', 
'Malzemeler:
- 400 gr asma yaprağı
- 2 su bardağı pirinç
- 2 adet soğan
- Zeytinyağı
- Baharatlar', 
'1. Yaprakları haşlayın
2. Pirinci hazırlayın
3. İç harcı karıştırın
4. Yaprakları sarın
5. Tencereye dizin
6. Kısık ateşte pişirin', 
90, 6, '/images/sarma.jpeg', 1),

('Baklava', 
'Tatlı', 
'İnce açılmış 40 kat yufka arasına ceviz serpilmiş geleneksel tatlı.', 
'Malzemeler:
- 30 adet yufka
- 3 su bardağı ceviz
- 250 gr tereyağı
- Şerbet malzemeleri', 
'1. Şerbeti hazırlayın
2. Yufkaları serin
3. Ceviz serpin
4. Baklava dilimleri kesin
5. Tereyağı dökün
6. Fırında pişirin
7. Şerbet dökün', 
120, 8, '/images/baklava.jpeg', 1); 

-- Devam eden ÇORBALAR kategorisi
INSERT INTO tarifler (baslik, kategori, aciklama, malzemeler, yapilis, sure, porsiyon, resim_url, one_cikan) VALUES
('Tarhana Çorbası',
'Çorba',
'El yapımı tarhana ile hazırlanan geleneksel çorba.',
'Malzemeler:
- 3 yemek kaşığı tarhana
- 1 adet soğan
- 2 yemek kaşığı tereyağı
- 1 yemek kaşığı biber salçası
- 5 su bardağı su
- Tuz, karabiber, pul biber

Üzeri için:
- Kızarmış tereyağı
- Pul biber
- Nane',
'1. Tarhanayı ılık suda ıslatın
2. Soğanı yemeklik doğrayın
3. Tereyağında soğanları kavurun
4. Salçayı ekleyip kavurun
5. Islatılmış tarhanayı ekleyin
6. Üzerine sıcak su ekleyip karıştırın
7. Sürekli karıştırarak pişirin
8. Tuz ve baharatları ekleyin
9. Kıvam alana kadar pişirin
10. Üzerine kızarmış tereyağı ve baharatları ekleyerek servis yapın',
25, 6, '/images/tarhana.jpg', 0),

('Tavuk Çorbası',
'Çorba',
'Kremalı tavuk çorbası, kış günlerinin vazgeçilmezi.',
'Malzemeler:
- 2 adet tavuk göğsü
- 1 adet havuç
- 1 adet patates
- 1 adet soğan
- 2 yemek kaşığı un
- 2 yemek kaşığı tereyağı
- 1 su bardağı süt
- 6 su bardağı tavuk suyu
- Tuz, karabiber

Üzeri için:
- Maydanoz',
'1. Tavuğu haşlayıp didikleyin
2. Sebzeleri küp küp doğrayın
3. Tereyağında soğanları kavurun
4. Unu ekleyip kavurun
5. Tavuk suyunu yavaşça ekleyin
6. Sebzeleri ekleyip yumuşayana kadar pişirin
7. Didiklenmiş tavukları ekleyin
8. Sütü ekleyip karıştırın
9. Tuz ve karabiber ekleyin
10. 5 dakika daha kaynatın
11. Üzerine maydanoz serperek servis yapın',
40, 6, '/images/tavuk.jpg', 0),

('İşkembe Çorbası',
'Çorba',
'Geleneksel Türk mutfağının meşhur çorbası.',
'Malzemeler:
- 500 gr işkembe
- 2 yemek kaşığı un
- 2 yemek kaşığı tereyağı
- 2 diş sarımsak
- 1 adet yumurta sarısı
- 1/2 su bardağı süt
- Limon suyu
- Tuz, karabiber

Servis için:
- Sirke
- Sarımsaklı yağ
- Pul biber',
'1. İşkembeyi iyice temizleyip haşlayın
2. Küçük parçalar halinde doğrayın
3. Tereyağında unu kavurun
4. İşkembe suyunu yavaşça ekleyin
5. Doğranmış işkembeleri ekleyin
6. Tuz ve karabiber ekleyin
7. Yumurta sarısı ve sütü çırpın
8. Çorbaya yavaşça ekleyin
9. Sarımsakları ezin ve ekleyin
10. 5 dakika daha kaynatın
11. Servis yaparken sirke, sarımsaklı yağ ve pul biber ekleyin',
60, 6, '/images/iskembe.webp', 0),

('Ezogelin Çorbası', 
'Çorba', 
'Mercimek, bulgur ve pirinç ile hazırlanan besleyici çorba.',
'Malzemeler:
- 1 su bardağı kırmızı mercimek
- 1/2 su bardağı pirinç
- 1/2 su bardağı bulgur
- 2 adet soğan
- 2 yemek kaşığı biber salçası
- 2 yemek kaşığı tereyağı
- Tuz, karabiber, pul biber
- 8 su bardağı su

Üzeri için:
- Kızarmış tereyağı
- Nane
- Pul biber',
'1. Mercimek, pirinç ve bulguru yıkayın
2. Soğanları yemeklik doğrayın
3. Tereyağında soğanları kavurun
4. Salçayı ekleyip kavurun
5. Bakliyatları ekleyin
6. Üzerine sıcak su ekleyip karıştırın
7. Tuz ve baharatları ekleyin
8. Kısık ateşte 30-35 dakika pişirin
9. Servis yaparken üzerine kızarmış tereyağı, nane ve pul biber gezdirin',
40, 6, '/images/ezogelin.webp', 0),

('Yayla Çorbası',
'Çorba',
'Yoğurt ve pirinç ile hazırlanan nefis bir çorba.',
'Malzemeler:
- 1 su bardağı pirinç
- 6 su bardağı su
- 2 su bardağı yoğurt
- 1 adet yumurta
- 2 yemek kaşığı un
- 2 yemek kaşığı tereyağı
- Tuz
- Nane

Üzeri için:
- Kızarmış tereyağı
- Kuru nane',
'1. Pirinci yıkayıp suda haşlayın
2. Yoğurt, yumurta ve unu çırpın
3. Haşlanmış pirinçten bir kepçe alıp yoğurtlu karışıma ekleyin
4. Karışımı tencereye yavaşça ekleyip karıştırın
5. Kısık ateşte kaynayıncaya kadar karıştırın
6. Tuz ekleyin
7. 5 dakika daha pişirin
8. Üzerine kızarmış tereyağı ve nane gezdirerek servis yapın',
35, 6, '/images/yayla.jpeg', 0),

('Domates Çorbası',
'Çorba',
'Taze domateslerle hazırlanan vitamin deposu çorba.',
'Malzemeler:
- 5-6 adet olgun domates
- 1 adet soğan
- 2 diş sarımsak
- 2 yemek kaşığı un
- 2 yemek kaşığı tereyağı
- 1 yemek kaşığı domates salçası
- 5 su bardağı sıcak su
- Tuz, karabiber
- 1/2 su bardağı süt

Üzeri için:
- Kızarmış tereyağı
- Kaşar rendesi (isteğe bağlı)',
'1. Domatesleri rendeleyin
2. Soğan ve sarımsağı ince doğrayın
3. Tereyağında soğan ve sarımsağı kavurun
4. Unu ekleyip kavurun
5. Salça ve rendelenmiş domatesleri ekleyin
6. 2-3 dakika kavurduktan sonra sıcak su ekleyin
7. Tuz ve karabiber ekleyin
8. 15-20 dakika kaynatın
9. Süt ekleyin ve 5 dakika daha pişirin
10. Blenderdan geçirin
11. Üzerine kızarmış tereyağı ve isteğe bağlı kaşar rendesi ekleyerek servis yapın',
30, 4, '/images/domates.jpg', 0); 