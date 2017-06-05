$(document).ready(function() {
    $('div').on('click', function(){
        console.log('Kliknales!');
        $(this).children().toggleClass('hidden');
    });
});