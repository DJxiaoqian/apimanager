//展开
$(".api-folder").click(function(){
    $(this).toggleClass("open");
    $(this).next().slideToggle();
});
//新增接口
$(".api-new").click(function(e){
    e.stopPropagation();
    $("#api-add-modal").reset().modal();
});
//编辑
$('.api-name .icon-bianji1').click(function(e){
    e.stopPropagation();
    $("#api-add-modal").modal();
    var json = $(this).parent().data("json");
    if(json){
        try{
            json = eval(json);
        }catch (e){
            alert("JSON格式有误");
        }
        $("#api-add-modal").fill(json);
    }
});
//接口-删除
$('.api-name .icon-close').click(function(){
    if(!confirm("是否确认删除？删除后数据不可恢复")){
        return false;
    }
    $(this).parent().parent().remove();
});
//模块-新增
$(".api-module-plus").click(function(){
    $(this).prev()
        .focus()
        .show();
    $(this).hide();
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




