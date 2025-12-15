let allReviews = [];
let visibleCount = 6;
const increment = 6;

const grid = document.getElementById("reviewsGrid");
const loadMoreBtn = document.getElementById("loadMoreReviews");

fetch("/api/google-reviews.php")
  .then(res => res.json())
  .then(data => {
    allReviews = data.result.reviews || [];
    renderReviews();
  });

function renderReviews() {
  grid.innerHTML = "";

  allReviews.slice(0, visibleCount).forEach((review, i) => {
    const card = document.createElement("div");
    card.className = "review-card fx slide-top staggered-m";
    card.style.setProperty("--i", i + 1);

    card.innerHTML = `
      <div class="stars">★★★★★</div>
      <p class="review-text">"${review.text}"</p>
      <div class="reviewer">${review.author_name}</div>
    `;

    grid.appendChild(card);
  });

  loadMoreBtn.classList.toggle(
    "hidden",
    visibleCount >= allReviews.length
  );
}

loadMoreBtn.addEventListener("click", () => {
  visibleCount += increment;
  renderReviews();
});
