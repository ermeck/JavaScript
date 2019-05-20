/*Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.*/

document.querySelector('#test').onmousemove = function (event) {
    event = event || window.event;
    // console.log(event);

    // Выводим координаты в спаны id = offx, и в id = offy
    document.querySelector('#offx').innerHTML = event.offsetX;
    document.querySelector('#offy').innerHTML = event.offsetY;
}