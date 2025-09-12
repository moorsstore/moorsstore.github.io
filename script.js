function openModal(card) {
  const modalId = card.getAttribute("data-target"); // читаем у карточки
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = "flex"; // или modal.classList.add("show")
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}
