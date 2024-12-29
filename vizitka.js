
// Плавный переход к секциям при клике на пункты меню
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href'); // Получаем ID секции
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Показ описания при клике на элемент галереи
document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
        const description = item.getAttribute('data-description');
        alert(`Вы выбрали: ${description}`);
    });
});
