$(document).ready(function() {
    var counter = 0;
    $('div').on('click', function(){
        $(this).children().toggleClass('hidden visible');
        counter ++;
        console.log(counter);
        if(counter == 2){
            var visible_imgs = $('img.visible');
            var visible_list = ['',''];

            visible_imgs.each(function(index, element){
                visible_list[index] = $(this).attr('class');
            });

            if(visible_list[0] === visible_list[1]){
                visible_imgs.each(function(index, element){
                    $(this).parent().remove();
                    $(this).remove();

                });
            }else{
                visible_imgs.each(function(index, element){
                    $(this).toggleClass('hidden');
                });
            };

            counter = 0;

        }
    });
});