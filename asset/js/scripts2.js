if($('.modalLogin form').length > 0){
	//blur form input
	$('.modalLogin form .form-control').blur(function(){
		var valForm = $(this).val().trim();
		var idForm = $(this).attr('id');
		if(valForm.length > 0){
			$('#description-'+ idForm).addClass('hideDescriptionForm');
			$('#group-'+ idForm).removeClass('borderDangerForm');
		}else{
			$('#description-'+ idForm).removeClass('hideDescriptionForm');
			$('#group-'+ idForm).addClass('borderDangerForm');
		}
	});

	$('#frmLogin form').submit(function(){
		var allowSubmitForm = allowSubmitFormPopup('#frmLogin');
		if(allowSubmitForm != 1) return false;
	});

	$('#frmRegisterEmail form').submit(function(){
		var allowSubmitForm = allowSubmitFormPopup('#frmRegisterEmail');
		if(allowSubmitForm != 1) return false;
	});

	$('#frmForgotPass form').submit(function(){
		var allowSubmitForm = allowSubmitFormPopup('#frmForgotPass');
		if(allowSubmitForm != 1) return false;
	});
}

// Show menu user
function showMenuUser(){
	$('.menuUser').addClass('showMenuUser');
	$('.windowMenuUser').addClass('show');
}

function hideMenuUser(){
	$('.menuUser').removeClass('showMenuUser');
	$('.windowMenuUser').removeClass('show');
}

$('.windowMenuUser').click(function(){
	hideMenuUser();
});

// Submit form
function allowSubmitFormPopup(nameForm){
	var allowSubmitForm = 1;
	$(nameForm +' .form-control').each(function(){
		var valForm = $(this).val().trim();
		var idForm = $(this).attr('id');
		if(valForm.length > 0){
			$('#description-'+ idForm).addClass('hideDescriptionForm');
			$('#group-'+ idForm).removeClass('borderDangerForm');
		}else{
			$('#description-'+ idForm).removeClass('hideDescriptionForm');
			$('#group-'+ idForm).addClass('borderDangerForm');

			allowSubmitForm = 2;
			return false;
		}
	});
	return allowSubmitForm;
}