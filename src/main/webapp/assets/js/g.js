$.fn.fill = function(data){
    for(var key in data){
        var $dom =$(this).find("[name='"+key+"']");
        if(($dom[0] instanceof HTMLInputElement) || $dom[0] instanceof HTMLTextAreaElement || $dom[0] instanceof HTMLSelectElement){
            if($dom[0].type != 'file'){
                $dom.val(data[key]);
            }
        }
    }
};
$.fn.reset= function(){
    $(this).find(':input').each(
        function(){
            switch(this.type){
                case 'passsword':
                case 'select-multiple':
                case 'select-one':
                case 'text':
                case 'textarea':
                    $(this).val('');
                    break;
                case 'checkbox':
                case 'radio':
                    this.checked = false;
            }
        }
    );
};

$(function(){
    $(document).click(function(){
        $(".ua-box").addClass("hide");
        $(".modal").fadeOut();
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


    $(".modal .modal-close").on("click",function(){
        $(".modal").fadeOut();
    });
    $(".modal .container").click(function(e){
        e.stopPropagation();
    });
     //tab
    $(".g-tabs .g-tab").click(function(){
         $(this).siblings(".g-tab").removeClass("active");
         $(this).addClass("active");
        $(".g-tab-content.active").removeClass("active");
        $($(this).attr("href")).addClass("active");
    });
});
