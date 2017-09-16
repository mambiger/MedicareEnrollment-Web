
    $(document).ready(function () {
        $('#reg_form1').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                firstname: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter First Name'
                        }
                    }
                },
                middleName: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter Middle Name'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter Last Name'
                        }
                    }
                },
                agentsan: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter Agent SAN'
                        }
                    }
                },
                affinityid: {
                    validators: {
                        notEmpty: {
                            message: 'Please Select Affinity ID'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter Email'
                        },
                        emailAddress: {
                            message: 'The value is not a valid email address'
                        },
                    }
                },
                confirmemail: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter Email '
                        },
                        identical: {
                            field: 'email',
                            message: 'The Email and its confirm are not the same'
                        },
                        emailAddress: {
                            message: 'The value is not a valid email address'
                        },
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Please Enter Password'
                        },
                        regexp: {
                            regexp: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@!%?&]).{6,12}$/,
                            message: 'The password should contain Minimum 6 and Maximum 12 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character'
                        }
                    }
                },
                confirmpassword: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter Password'
                        },
                        identical: {
                            field: 'password',
                            message: 'The Password and its confirm are not the same'
                        },
                    }
                },

            }
        })
            .on('success.form.bv', function (e) {
                $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

                // Prevent form submission
                e.preventDefault();

                // Get the form instance
                var $form = $(e.target);

                // Get the BootstrapValidator instance
                var bv = $form.data('bootstrapValidator');

                // Use Ajax to submit form data
                $.post($form.attr('action'), $form.serialize(), function (result) {
                    console.log(result);
                }, 'json');
            });
    });
