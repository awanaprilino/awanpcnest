$('#submitBtn').on('click', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Please Wait',
        allowOutsideClick: false,
    });
    Swal.showLoading();
    grecaptcha.ready(function () {
        grecaptcha.execute('6LdUR4EhAAAAAMmbGMJckoNH-HZ3avovG2xw4-_n', { action: 'submit' }).then(function (token) {
            removeSubmitError()
            formData = {
                email: $('#email').val(),
                name: $('#name').val(),
                password: $('#password').val(),
                password_confirmation: $('#password_confirmation').val(),
                token: token
            }
            $.ajax({
                url: "/dashboard/register",
                type: "POST",
                data: formData,
                success: function (data, textStatus, jqXHR) {
                    console.log(jqXHR.responseJSON);
                    Swal.close();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.responseJSON);
                    onSubmitError(jqXHR.responseJSON);
                    Swal.close();
                }
            });
        });
    });
});

function onSubmitError(response) {
    $(".error-box").removeClass("hidden");
    response.message.forEach(element => {
        $(".error-box").append(`<p class="font-medium error-message">${element}</p>`)
    });
}
function removeSubmitError() {
    $(".error-box").addClass("hidden");
    $('p').remove('.error-message');
}