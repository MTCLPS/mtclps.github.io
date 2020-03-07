(function ($) {
    "use strict";
    $('.input3').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
    var name = $('.validate-input input[type="text"]');
    var email = $('.validate-input input[type="email"]');

    $('.validate-form').on('submit',function(){
        var check = true;
		$(name).each(function(){
			if($(this).val().trim() == ''){
				showValidate(this);
				check=false;
			}
		});
        $(name).each(function(){
			if($(this).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null && $(this).val().trim() == '') {
				showValidate(this);
				check=false;
			}
		});
		if(check) postToGoogle();
        return false;
    });
    $('.validate-form .input3').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }   
})(jQuery);