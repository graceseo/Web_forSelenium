/**
 * Check validation for Adding a review
 * @returns {*|jQuery|boolean}
 */
function gsDoValidate_gsFrmCar() {
    var form=$("#gsFrmAddCar");
    form.validate({
        rules:{
            gsSellerName:{
                required: true
            },
            gsAddress:{
                required: true
            },
            gsCity:{
                required: true
            },
            gsPhoneNumber:{
                required: true,
                phoneCheck: true
            },
            gsEmail:{
                required: true,
                emailCheck: true
            },
            gsMake:{
                required: true
            },
            gsModel:{
                required: true
            },
            gsYear:{
                required: true
            }
        },
        messages:{
            gsSellerName:{
                required: "Seller Name is required"
            },
            gsAddress:{
                required: "Address is required"
            },
            gsCity:{
                required: "City is required"
            },
            gsPhoneNumber:{
                required: "Phone Number is required",
                phoneCheck: "Enter a valid phone number"
            },
            gsEmail:{
                required: "Email address is required",
                emailCheck: "Enter a valid email address"
            },
            gsMake:{
                required: "Vehicle Make is required"
            },
            gsModel:{
                required: "Vehicle Make is required"
            },
            gsYear:{
                required: "Vehicle Make is required"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("phoneCheck",
    function (value, element) {
        var regex=/^\(?([0-9]{3})\)?[-]([0-9]{3})[-]([0-9]{4})$/;

        return this.optional(element) || regex.test(value);
    }, "Custom email checker");
jQuery.validator.addMethod("emailCheck",
    function (value, element) {
        var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        return this.optional(element) || regex.test(value);
    }, "Custom email checker");