window.tempdom;

function stopPropapagtion(){
    var e = window.event;
    e.stopPropagation();
}
//展开
function folderToggleSlide(dom){
    var $dom=$(dom).parent(); 
    $dom.toggleClass("open");
    $dom.next().slideToggle();
}
//新增接口
function newApi(dom){
    stopPropapagtion();
    $("#api-add-modal").reset().modal();
    window.tempdom= dom;
    $("#api-add-modal .api-add-modal-ok").attr("data-type","new");
}
//编辑
function apiEdit(dom){
    stopPropapagtion();
    window.tempdom= dom;
    $("#api-add-modal").modal();
    var json = $(dom).parent().data("json");
    if(json){
        try{
            json = eval(json);
        }catch (e){
            alert("JSON格式有误");
        }
        $("#api-add-modal").fill(json);
        $("#api-add-modal .api-add-modal-ok").attr("data-type","edit");
    }
}

//接口-删除
function apiDelete(dom){
    if(!confirm("是否确认删除？删除后数据不可恢复")){
        return false;
    }
    $(dom).parent().parent().remove();
}
//打开右侧
function turnRight(dom){
    $("#api-edit-description").hide();
    $("#api-edit-details").show();
    var data= $(dom).parent().data("json");
    data = eval(data);
    $("#api-edit-details .api-field").each(function(){
        var name = $(this).attr("name");
        $(this).text(data[name]);
    });

}
//打开文档说明
function turnRightDoc(dom){
    $("#api-edit-description").show();
    $("#api-edit-details").hide();    
}

//模块-新增
$(".api-module-plus").click(function(){
    $(this).prev()
        .focus()
        .show();
    $(this).hide();
    saveArgs();
});
//新增模块-离开
$(".api-new-module").blur(function(){
    $(this).next().show();
    api.loading();
    alert('保存中')
});

//模块-编辑
$(".api-edit").click(function(){
    $(".api-save,.api-cancel").show();

    //



});
//文档
$("#api-view-box .api-description").click(function(){
    var target = $(this).data("target");
    $(target).show();
    $("#api-details").hide();
});
//接口点击
$("#api-view-box .api-name:not(.api-description)").click(function(){
    $("#api-doc-desc").hide();
    $("#api-details").show();
});
$("#api-view-box .edit-table td").click(function(){
    $(this).find(".normal").hide();
    $(this).find(".edit-item").show();
});

//请求参数onchange
function requestArgTypeChange(dom){
    if(dom.value=='array[object]' || dom.value=='object' ){
        $(dom).parents('tr').find('.api-add-sub').show();
    }else{
        $(dom).parents('tr').find('.api-add-sub').hide();
    }
}
//请求参数类型append
function requestArgTypeAppend(dom){
    var $tr = $(dom).parent().parent();
    var level = $tr.data("level") || 1;
    var html= $("#requestArgTemplate").html().replace(/{{level}}/g,++level);    
    $tr.after(html);
}
//响应参数类型append
function responseArgTypeAppend(dom){
    var $tr = $(dom).parent().parent();
    var level = $tr.data("level") || 1;
    var html= $("#responseArgTemplate").html().replace(/{{level}}/g,++level);    
    $tr.after(html);
}
//保存参数
function saveArgs(){

}
//添加
$(".api-add-modal-ok").click(function(){
    var obj={};
    $(".api-field").each(function(){
        var name = $(this).attr("name");
        var value = $(this).val();
        obj[name]=value;
    });
    obj.requestMethod=$("#api-add-modal [name='requestMethod']:checked").val();
    obj.responseType=$("#api-add-modal [name='responseType']:checked").val();
    var dataType= $(this).data("type");
    if(dataType =='new'){
        var html = $("#api-item-template").html()
            .replace(/{{name}}/g,obj.name)
            .replace(/{{json}}/g,JSON.stringify(obj));
        ;
        $(window.tempdom).parent().next().append(html);
    }else{
        $(window.tempdom).parent().attr("data-json",JSON.stringify(obj));
    }
    $(".modal-close").click();
});



