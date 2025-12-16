const filterButtons = document.querySelectorAll("[data-filter]");
const exhibitionCards = document.querySelectorAll(".exhibition-cards");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    exhibitionCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
