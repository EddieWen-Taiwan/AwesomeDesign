$(document).ready( () => {

	$('#search').on( 'click', (e) => {console.log('click');
		$('input').focus();
		if( !$(e.currentTarget).hasClass('focused') ) {
			$(e.currentTarget).addClass('focused');
		}
	});

	$('input').blur( () => {
		$('#search').removeClass('focused');
	}).on( 'keyup', (e) => {
		if( $(e.currentTarget).val() == '' ) {
			$('.btn').removeClass('clickable');
		}
		else {
			$('.btn').addClass('clickable');
		}
	});

	$('#search').on( 'click', '.btn.clickable', (e) => {
		$(e.currentTarget).removeClass('clickable').addClass('clicked');
		$('#search').off('click');
	});

});