$(function() {
$('.checkbox').change(function(){
    $('input[name="' + $(this).attr('name') +'"]').removeAttr('checked');
    $(this).prop('checked', true);
});
});