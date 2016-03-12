
$(function() {
	
	$.ajax({
		url: 'http://api.pixplorer.co.uk/image?word=cat&amount=7&size=600',
		type: 'get',
		dataType: "JSON",
		success: function(data){
			for (var i = 0; i < 7; i++) {
				var $data = data.images[i].imageurl;
				var $title = data.images[i].word;
				$('.img'+i+'').attr('src', $data);
				$('.title'+i+'').html($title);
			}
		}
	});

	$('.activity').masonry({
  // options
  itemSelector: '.item',
  columnWidth: 1
 });

	$('.ideas__submit').on('click', function (e) {
		var $input = $('.ideas__search').val();

		$.ajax({
			url: 'http://api.pixplorer.co.uk/image?word='+ $input +'&amount=7&size=tb',
			type: 'get',
			dataType: "JSON",
			success: function(data){
				for (var i = 0; i < 7; i++) {
					var $data = data.images[i].imageurl;
					var $title = data.images[i].word;
					$('.img'+i+'').attr('src', $data);
					$('.title'+i+'').html($title);
				}
			}
		});
		e.preventDefault();
	})


});