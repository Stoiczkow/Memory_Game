$(document).ready(function() {
    var counter = 0;
    var visible_list = ['',''];
    var imgs = [];

    $('img').each(function(index, element){
        imgs.push(element);
    });

    var divs = $('div');

    for(var i = 0; i < divs.length; i++){
        var index_of = Math.floor(Math.random() * (imgs.length));
        divs[i].append(imgs[index_of]);
        imgs.splice(index_of,1);
    };

    divs.on('click', function(){
        $(this).children().toggleClass('hidden visible');
        counter ++;

        if(counter == 2){
            var visible_imgs = $('img.visible');
            visible_imgs.each(function(index, element){
                visible_list[index] = $(this).attr('class');
            });

            if(visible_list[0] === visible_list[1]){
                visible_imgs.each(function(index, element){
                    $(this).parent().attr('class','guessed');
                    $(this).fadeOut();

                });
            }else{
                visible_imgs.each(function(index, element){
                    if($(this).hasClass('visible')){
                        $(this).toggleClass('hidden visible', 800);
                        };
                });
            };

            counter = 0;
            visible_list = ['',''];

        };

    });
});