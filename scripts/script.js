$(document).ready(function() {
    var counter = 0;
    var visible_list = ['',''];
    var imgs = [];
    var end_counter = 0;
    var btn = $('button');
    var success = $('p');
    var timer = 0;
    var divs = $('div');

    $('img').each(function(index, element){
        imgs.push(element);
    });

    btn.click(function() {
        location.reload();
    });

    var interval = setInterval(function() {
        timer++;
    }, 1000);

    for(var i = 0; i < divs.length; i++){
        var index_of = Math.floor(Math.random() * (imgs.length));
        divs[i].append(imgs[index_of]);
        imgs.splice(index_of,1);
    };

    function clicker(){
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
                    $(this).removeClass('visible');
                    $(this).fadeOut();
                });
                end_counter ++;
            }else{
                visible_imgs.each(function(index, element){
                    if($(this).hasClass('visible')){
                        $(this).toggleClass('hidden visible', 800);
                        };
                });
            };
            counter = 0;
            visible_list = ['',''];
            divs.off('click');
            divs.one('click', clicker);
        };
        console.log(end_counter);
        if(end_counter == 2){
            btn.toggleClass('hidden');
            success.toggleClass('hidden');
        };

    };




    divs.one('click', clicker);

});

