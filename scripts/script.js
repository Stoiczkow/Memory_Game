$(document).ready(function() {
    var counter = 0;
    $('div').on('click', function(){
        $(this).children().toggleClass('hidden visible');
        counter ++;
        console.log(counter);
        if(counter == 2){
            var visible_imgs = $('img.visible');
        }
    });
});