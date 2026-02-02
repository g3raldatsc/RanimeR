// --- DATABASE ANIME ---
const animeData = {
    // --- BIG THREE ---
    'rank1': {
        title: "Kaguya-sama: Love is War",
        image: "assets/images/kaguya-sama.jpg", 
        genre: "Romance, Comedy, Psychological",
        studio: "A-1 Pictures",
        episodes: "3 Seasons + Movie",
        synopsis: "Perang cinta jenius antara Kaguya dan Shirogane yang gengsi untuk nembak duluan.",
        rating: "10/10",
        review: "Masterpiece Romcom! Lucu banget tapi momen romantisnya juga dapet."
    },
    'rank2': {
        title: "Oregairu",
        image: "assets/images/Oregairu.jpg",
        genre: "Romance, Slice of Life, Drama",
        studio: "Feel.",
        episodes: "3 Seasons",
        synopsis: "Hachiman yang pesimis mencari sesuatu yang 'asli' bersama Yukino dan Yui.",
        rating: "9.8/10",
        review: "Dialognya dalam dan karakter Hachiman sangat relatable."
    },
    'rank3': {
        title: "Saenai Heroine no Sodatekata",
        image: "assets/images/saekano.jpg",
        genre: "Romance, Harem, Comedy",
        studio: "A-1 Pictures",
        episodes: "2 Seasons + Movie",
        synopsis: "Tomoya membuat game dating sim dengan heroine utamanya teman sekelas yang membosankan.",
        rating: "9.5/10",
        review: "Megumi Katou best girl! Penutup movienya sangat memuaskan."
    },

    // --- HONORABLE MENTIONS (Sesuai HTML kamu) ---
    'rank4': {
        title: "Nisekoi",
        image: "assets/images/nisekoi.jpg", 
        genre: "Romance, Comedy, Harem",
        studio: "Shaft",
        episodes: "2 Seasons",
        synopsis: "Raku Ichijo, anak yakuza, terpaksa pura-pura pacaran dengan Chitoge Kirisaki demi perdamaian geng.",
        rating: "8.8/10",
        review: "Klasik harem dengan visual shaft yang unik. Team Chitoge atau Onodera?"
    },
    'rank5': {
        title: "Shigatsu wa Kimi no Uso",
        image: "assets/images/shigatsuu.jpg",
        genre: "Romance, Drama, Music",
        studio: "A-1 Pictures",
        episodes: "22 Episodes",
        synopsis: "Pianis jenius yang trauma bertemu violinis bebas yang mengubah hidupnya.",
        rating: "9.5/10",
        review: "Siapkan tisu. Sangat indah tapi juga sangat sedih."
    },
    'rank6': {
        title: "Clannad: After Story",
        image: "assets/images/clannad.jpg",
        genre: "Romance, Drama, Slice of Life",
        studio: "Kyoto Animation",
        episodes: "2 Seasons",
        synopsis: "Kisah kehidupan Tomoya dan Nagisa dari sekolah hingga berkeluarga.",
        rating: "10/10",
        review: "Salah satu anime tersedih dan terindah sepanjang masa. Wajib nonton."
    },
    'rank7': {
        title: "Seishun Buta Yarou",
        image: "assets/images/seishunn.jpg",
        genre: "Romance, Supernatural, Drama",
        studio: "CloverWorks",
        episodes: "13 Eps + Movies",
        synopsis: "Sakuta memecahkan Sindrom Pubertas yang dialami gadis-gadis di sekitarnya.",
        rating: "9.2/10",
        review: "Dialognya cerdas, chemistry Mai dan Sakuta top tier."
    },
    'rank8': {
        title: "Ookami to Koushinryou",
        image: "assets/images/ookami.jpg",
        genre: "Romance, Adventure, Fantasy",
        studio: "Passione / Imagin",
        episodes: "2 Seasons (Remake ongoing)",
        synopsis: "Pedagang keliling Lawrence bertemu Holo, dewi serigala yang bijak.",
        rating: "9.0/10",
        review: "Romance dewasa yang fokus pada ekonomi dan interaksi karakter."
    },
    'rank9': {
        title: "Ao no Hako (Blue Box)",
        image: "assets/images/aonohako.jpg",
        genre: "Romance, Sports, School",
        studio: "Telecom Animation",
        episodes: "Ongoing",
        synopsis: "Taiki, pemain badminton, naksir Chinatsu, bintang basket yang tinggal serumah dengannya.",
        rating: "8.9/10",
        review: "Romance olahraga yang sangat fresh dan manis. Visualnya bersih."
    },
    'rank10': {
        title: "Chuunibyou demo Koi ga Shitai!",
        image: "assets/images/chunibyo.jpg",
        genre: "Romance, Comedy, Slice of Life",
        studio: "Kyoto Animation",
        episodes: "2 Seasons + Movie",
        synopsis: "Yuta yang ingin tobat dari masa lalu alay-nya malah bertemu Rikka yang masih chuunibyou parah.",
        rating: "8.8/10",
        review: "Sangat lucu, cringe (dalam artian baik), dan romance-nya surprisingly wholesome."
    },
    'rank11': {
        title: "Gotoubun no Hanayome",
        image: "assets/images/gotoubun.jpg",
        genre: "Romance, Harem, School",
        studio: "Bibury / Tezuka",
        episodes: "2 Seasons + Movie",
        synopsis: "Fuutarou menjadi guru les privat untuk lima kembar cantik yang benci belajar.",
        rating: "8.7/10",
        review: "Harem misteri 'siapa pengantinnya' yang dieksekusi dengan sangat baik."
    },
    'rank12': {
        title: "Kami Nomi zo Shiru Sekai",
        image: "assets/images/kaminomi.jpg",
        genre: "Romance, Harem, Comedy",
        studio: "Manglobe",
        episodes: "3 Seasons",
        synopsis: "Keima, dewa game dating sim, dipaksa menaklukkan gadis nyata untuk menangkap roh.",
        rating: "8.9/10",
        review: "Protagonis harem yang unik karena pakai logika game."
    },
    'rank13': {
        title: "Date A Live",
        image: "assets/images/datealive.jpg",
        genre: "Romance, Sci-Fi, Harem",
        studio: "Geek Toys",
        episodes: "5 Seasons",
        synopsis: "Shido harus mengencani roh-roh berbahaya untuk menyelamatkan dunia.",
        rating: "8.5/10",
        review: "Kurumi best girl. Campuran action dan romance yang seru."
    }
};


// --- LOGIKA JAVASCRIPT ---

let currentSlideIndex = 0;
const modal = document.getElementById("animeModal");

// Fungsi Buka Modal
function openModal(rankId) {
    const data = animeData[rankId];

    if (!data) {
        console.error("Data anime tidak ditemukan untuk ID:", rankId);
        alert("Data belum ada di script.js!");
        return;
    }

    // 1. Set Gambar Kiri
    document.getElementById("modalMainImage").src = data.image;
    document.getElementById("modalMainImage").alt = data.title;

    // 2. Set Info Utama (Slide 1)
    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalGenre").innerText = data.genre;
    document.getElementById("modalStudio").innerText = data.studio;
    document.getElementById("modalEpisodes").innerText = data.episodes;

    // 3. Set Sinopsis (Slide 2)
    document.getElementById("modalSynopsis").innerText = data.synopsis;

    // 4. Set Review (Slide 3)
    document.getElementById("modalRating").innerText = data.rating;
    document.getElementById("modalReview").innerText = `"${data.review}"`;

    // Reset ke slide pertama
    currentSlideIndex = 0;
    showSlides(currentSlideIndex);
    
    // Tampilkan Modal dengan Flexbox
    modal.style.display = "flex"; 
}

// Fungsi Tutup Modal
function closeModal() {
    modal.style.display = "none";
}

// Tutup jika klik area gelap
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Fungsi Ganti Slide
function changeSlide(n) {
    showSlides(currentSlideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    
    // Loop slide
    if (n >= slides.length) { currentSlideIndex = 0 }
    if (n < 0) { currentSlideIndex = slides.length - 1 }

    // Sembunyikan semua
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.display = "none";
    }

    // Munculkan yang aktif
    slides[currentSlideIndex].style.display = "block";
    
    // Timeout kecil agar animasi fade berjalan mulus
    setTimeout(() => {
        slides[currentSlideIndex].classList.add("active");
    }, 10);
}