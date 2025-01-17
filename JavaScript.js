document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const imgSrc = this.querySelector("img").src;

    // Atualiza a imagem e descrição do lightbox
    document.getElementById("lightboxImg").src = imgSrc;

    // Exibe a lightbox
    document.getElementById("lightbox").style.display = "flex";
  });
});

// Fecha o lightbox
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "none";
});

// Fecha ao clicar fora da imagem
document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
