$(document).ready( () => {

	$('#subscribe').on( 'click', (e) => {console.log('click');
		$('input').focus();
		if( !$(e.currentTarget).hasClass('focused') ) {
			$(e.currentTarget).addClass('focused');
		}
	});

	$('input').blur( () => {
		$('#subscribe').removeClass('focused');
	}).on( 'keyup', (e) => {
		if( $(e.currentTarget).val() == '' ) {
			$('.btn').removeClass('clickable');
		}
		else {
			$('.btn').addClass('clickable');
		}
	});

	$('#subscribe').on( 'click', '.btn.clickable', (e) => {
		$(e.currentTarget).removeClass('clickable').addClass('clicked');
		$('#subscribe').off('click');
	});

});