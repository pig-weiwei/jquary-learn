


$(function () {

    //给content_list 添加滚动条框架
    $(".content_list").mCustomScrollbar();

    //监听menu的移入移除事件
    $(".list_music").hover(function () {
        //移入的时候显示 menu
        $(this).find(".list_menu").stop(true,true).fadeIn(100);
        //移入的时候显示 删除图标
        $(this).find(".list_time a").stop(true,true).fadeIn(100);
        // 并隐藏时间
        $(this).find(".list_time span").stop(true,true).fadeOut(100);
    },function () {
        //移出的时候隐藏 menu
        $(this).find(".list_menu").stop(true,true).fadeOut(100);
        //移入的时候隐藏 删除图标
        $(this).find(".list_time a").stop(true,true).fadeOut(100);
        // 并显示时间
        $(this).find(".list_time span").stop(true,true).fadeIn(100);
    });

    //复选框事件  选中与被选中
    $(".list_check").click(function () {
        $(this).toggleClass("list_checked");
    });

});