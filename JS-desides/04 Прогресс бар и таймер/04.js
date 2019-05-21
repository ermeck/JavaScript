/* Есть progress bar, который должен заполняться за заданное количество времени. Время задает пользователь. */

function userProgress(time) {
    var start = 0;
    // умножаем на миллисекунды и делим на 100 делений
    var time = Math.round(time * 1000 / 100);
    var progressElement = document.getElementById('user-progress');
    var intervalId = setInterval(function () {
        if (start > 100) {
            clearInterval(intervalId);
            usersProgressCallback();
        } else {
            progressElement.value = start;
        }
        start++;
    }, time);
}

function usersProgressCallback() {
    // your code
    document.querySelector('.hidden-block').style.display = 'block';
};

// задаем время заполнения прогресс бара, в данном случае 1 секунда
userProgress(1);