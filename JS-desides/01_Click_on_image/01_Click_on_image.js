/*Добавляем стиль к изображению, 
по которомому кликнули мышкой*/

document.onclick = function(event) {
    // для старых браузеров
    event = event || window.event;
    // если свойство элемента, по которому кликаем - IMG..
    if (event.target.tagName == 'IMG') {
        // добавляем кликнутому элементу стиль
        event.target.classList.add('bordered');
    }
}