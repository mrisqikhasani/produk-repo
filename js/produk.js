function tampilkanKategori(kategori) {
  // Menyembunyikan semua tab-content
  var tabContents = document.querySelectorAll(".list-produk");
  tabContents.forEach(function (tab) {
    tab.classList.remove("active"); // Hilangkan kelas 'active'
  });

  // Menampilkan tab-content yang sesuai dengan kategori yang dipilih
  var selectedTab = document.getElementById(kategori);
  if (selectedTab) {
    selectedTab.classList.add("active"); // Tambahkan kelas 'active'
  }
}

// for button active list category
function buttonActiveCategory() {
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      // Hilangkan kelas "active" dari semua elemen
      categories.forEach((c) => c.classList.remove("active"));

      // Tambahkan kelas "active" hanya ke elemen yang diklik
      category.classList.add("active");
    });
  });
}

buttonActiveCategory();
