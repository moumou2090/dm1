document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".plus-btn");
  const minusButtons = document.querySelectorAll(".minus-btn");
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const likeButtons = document.querySelectorAll(".like-btn");

  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
      const price = parseFloat(item.querySelector(".price").textContent);
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      total += price * quantity;
    });
    document.getElementById("total-price").textContent = total;
  }

  plusButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const qtySpan = btn.previousElementSibling;
      qtySpan.textContent = parseInt(qtySpan.textContent) + 1;
      updateTotal();
    });
  });

  minusButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const qtySpan = btn.nextElementSibling;
      if (parseInt(qtySpan.textContent) > 0) {
        qtySpan.textContent = parseInt(qtySpan.textContent) - 1;
        updateTotal();
      }
    });
  });

  deleteButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".cart-item").remove();
      updateTotal();
    });
  });

  likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
    });
  });

  updateTotal(); // حساب المجموع عند التحميل الأول
});
