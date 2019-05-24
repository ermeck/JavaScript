/* Создать панель меню, где пользователь может выблрать компоненты бургера. Некоторые компоненты обязательные, некоторые можно менять. Вычислить стоимость и калорийность бургера. */

document.getElementById('result').onclick = getResult;

getResult();

function getResult() {
    var menu = document.getElementsByClassName('menu');
    var cost = 0;
    var kkal = 0;
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].checked) {
            cost += parseFloat(menu[i].getAttribute('data-cost'));
            kkal += parseFloat(menu[i].getAttribute('data-kkal'));
        }
    }
    document.getElementById('kkal').innerHTML = kkal;
    document.getElementById('cost').innerHTML = cost;
}