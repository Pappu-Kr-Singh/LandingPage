document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");

  let count = 0;

  incrementButton.addEventListener("click", () => {
    count++;
    updateCounter();
  });

  decrementButton.addEventListener("click", () => {
    count--;
    updateCounter();
  });

  function updateCounter() {
    counter.textContent = count;
  }
});
