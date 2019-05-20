/*
Создайте окно, которое всплывает через 4 секунды после загрузки страницы. В окне - опция "Согласен". Если пользователь выбирает данную опцию и закрывает окно - то при последующих обновлениях окно не показывается. Если пользователь не выбрал опцию "Согласен", то повторяйте вывод окна после обновления страницы.
*/

$(document).ready(function(){
    showStartModal();
});

function showStartModal() {
    // start timeout
    if(localStorage.getItem('modalYesBtn') !=1 ) {
        setTimeout(function(){
            $('#exampleModal').modal('show');
            $('#modal-yes-btn').on('click', function(){
                localStorage.setItem('modalYesBtn', 1);
                $('#exampleModal').modal('hide');
            });
        }, 2500);
    }
}