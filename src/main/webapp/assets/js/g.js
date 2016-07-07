$.fn.fill = function(data){
    for(var key in data){
        var $dom =$(this).find("[name='"+key+"']");
        if(($dom[0] instanceof HTMLInputElement) || $dom[0] instanceof HTMLTextAreaElement || $dom[0] instanceof HTMLSelectElement){
            if($dom[0].type != 'file'){
                $dom.val(data[key]);
            }
        }
    }
    return $(this);
};
$.fn.reset= function(){
    $(this).find(':input').each(
        function(){
            switch(this.type){
                case 'passsword':
                //case 'select-multiple':
                //case 'select-one':
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
    return $(this);
};

$.fn.modal = function(){
    $(this).fadeIn();
    //$(this).find(".container").css("margin-top",$(document).scrollTop()+150);
    $(".modal-layer").fadeIn();
    $("body").addClass("modal-open");
};

$(function(){
    $(document).click(function(){
        $(".ua-box").addClass("hide");
        $(".modal").fadeOut();
        $("body").removeClass("modal-open");
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
        $("body").removeClass("modal-open");
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

var api={
    loading:function(args) {
        if ("close" == args) {
            $("#loading").hide();
        } else {
            $("#loading").show();
        }
    },
    getJSON:function(data){
        if(!data){
            data = {};
        }
        if(data.constructor.name=="String"){
            try{
                data = JSON.parse(data);
            }catch (e){
                alert("JSON格式有误");
            }
        }
        return data;
    },
    text : function(text){
        if(!text){text="";}
        text = text.replace(/\n/g,"<br/>").replace(/\s/g,"&nbsp;");
        return text;
    }
};
