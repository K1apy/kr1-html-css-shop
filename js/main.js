document.querySelectorAll('[data-dialog]').forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.dialog).showModal();
  });
});

const orderForm = document.getElementById('order-form');

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('success-dialog').showModal();
  });
}
