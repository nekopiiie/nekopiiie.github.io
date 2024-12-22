const wrapper = document.querySelector('.feedback_wrapper');
const feedbackItems = document.querySelectorAll('.panel_for_feedback');
const totalWidth = Array.from(feedbackItems).reduce((total, item) => total + item.offsetWidth, 0);
const cloneCount = Math.ceil(window.innerWidth / totalWidth);
for (let i = 0; i < cloneCount; i++) {
    const clone = wrapper.cloneNode(true);
    document.querySelector('.container_feedback').appendChild(clone);
}

let scrollSpeed = 1; // Скорость прокрутки
let scrollInterval = setInterval(() => {
    wrapper.scrollLeft += scrollSpeed;
    if (wrapper.scrollLeft >= totalWidth) {
        wrapper.scrollLeft = 0; // Сбрасываем прокрутку
    }
}, 20); // Частота обновления (мс)

wrapper.addEventListener('mouseover', () => clearInterval(scrollInterval)); // Остановка прокрутки при наведении
wrapper.addEventListener('mouseout', () => {
    scrollInterval = setInterval(() => {
        wrapper.scrollLeft += scrollSpeed;
        if (wrapper.scrollLeft >= totalWidth) {
            wrapper.scrollLeft = 0; // Сбрасываем прокрутку
        }
    }, 20);
}); // Возобновление прокрутки при уходе курсора
