$(document).ready(function () {
    $(function () {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");

            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');

            },
            rules: {
                name: {
                    required: true,
                    rangelength: [3, 255]
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    rangelength: [10, 255]
                }

            },
            messages: {
                name: {
                    required: "The *Name field is required!",
                    rangelength: "The *Name must be at least 3 characters!"
                },
                email: {
                    required: "The *Email field is required!",
                    email: "Please enter a valid email address!"
                },
                message: {
                    required: "The *Message field is required!",
                    rangelength: "The *Message must be between 10 and 255 characters!"
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error'));
            }

        });
    });
});