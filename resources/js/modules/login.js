import $ from "jquery";

function login() {
    if ($('.login').length) {
        //функция показа полей
        const onUserType = () => {
            let activeUserType = $('.user-type a.active').attr('data-user-type');
            const hiddenUserTypeInput = $('input[name="reg_type_user"]');
        
            //записываем значение типа пользователя в скрытый инпут
            hiddenUserTypeInput.val(activeUserType);

            //скрываем ненужные поля
            $('.form__item[data-user-type]').hide().find('input').prop('disabled', true);
            $(`.form__item[data-user-type="${activeUserType}"]`).show().find('input').prop('disabled', false);
        }

        //Вызываем при загрузке
        onUserType();

        //клик по табам
        $('.user-type a').click(function() {
            $(this).addClass('active').siblings().removeClass('active');

            onUserType();
        })
    }
    
}

export default login;