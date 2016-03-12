"use strict";

$(function () {

$('.ideas__submit').on('click', function (e) {
	var $input = $('.ideas__search').val();

	$.ajax({
      url: 'http://api.pixplorer.co.uk/image?word='+ $input +'&amount=7&size=mb',
      type: 'get',
      dataType: "JSON",
      success: function(data){
        
    // var $data = data.images[0].imageurl;

for (var i = 0; i < 7; i++) {
  // console.log(i);
  // console.log(data.images[i].imageurl);
   var 

  $('.img'+i+'').attr('src', data.images[+i+].imageurl);

}

      }
    });
e.preventDefault();
})

});