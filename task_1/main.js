const container = document.getElementById('container');
const button = document.getElementById('add-item-btn');

button.addEventListener('click', function(){
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.innerHTML = `
    <p>Уведомление</p>
    <button class="close-btn">Закрыть</button>
  `;

  const closeBtn = notification.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    container.removeChild(notification);
  });

  container.appendChild(notification);
  setTimeout(() => {
    container.removeChild(notification);
  }, 5000);
});