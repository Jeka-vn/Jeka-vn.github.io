$(function() {

	(function preview() {

		$('.contentHover > i').on('click', function () {
			var $index = $('.contentHover > i').index(this);
			var $contentImgAttr = $('.contentImg').eq($index).attr('data');

			(function showImg() {
				$('.show').css({
					'display': 'block'
				}).animate({
					'opacity': '1'
				}, 500)
				$('.show').append('<span class="fa fa-times fa-2x" aria-hidden="true"></span>');
				$('.show').append('<div class="showFullImgBox">');
				$('.showFullImgBox').append('<img class="showFullImg">');
				$('.showFullImg').attr('src', $contentImgAttr);

				$('.show span').on('click', function () {
					$('.show').css({
						'display': 'none',
						'opacity': '0'
					})
					$('.showFullImgBox, .show span').remove();
				})
			})();
		})
	})();
	
});