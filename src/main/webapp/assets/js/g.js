$(function(){
    $(document).click(function(){
        $(".ua-box").addClass("hide");
    });
    $('.ua-box').click(function(e){
        e.stopPropagation();
    });
    $(".user-action a").on("click",function(){
        $(".ua-box").addClass("hide");
        $(".user-action a").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr("href");
        var width  =200;
        var left = $(this).offset().left - width+$(this).width();
        var top = $(this).offset().top + $(this).height();
        $(id).css({
            left:left,top:top
        }).removeClass("hide");
        return false;
    });
});
