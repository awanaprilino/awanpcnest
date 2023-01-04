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
                password: $('#password').val(),
                token: token
            }
            $.ajax({
                url: fullUrl,
                type: "POST",
                data: formData,
                success: function (data, textStatus, response) {
                    Swal.close();
                    window.location.href = response.responseJSON.redirect;
                },
                error: function (response, textStatus, errorThrown) {
                    onSubmitError(response.responseJSON);
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