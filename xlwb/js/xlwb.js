$(function () {
    $("body").delegate(".comment","propertyChange input",function () {
        if ($(this).val().length>0){//判断输入框是否存在内容，存在内容，input按钮为可用并且改变颜色
            $(".send").prop("disabled",false).css("background-color","#ff8140");
        }
        else{
            $(".send").prop("disabled",true).css("background-color","#ffc09f");
        }
    });
    $(".send").click(function () {
        //监听input按钮的事件
        var $text = $(".comment").val();//获取输入框内的值
        var $weibo = createElm($text);//通过crateElm（）函数创建节点，并返回
        $(".messageList").prepend($weibo);//在messageList中插入$weibo到最前
    });

    //监听顶事件
    $("body").delegate(".infoUp","click",function () {
        $(".infoUpNum").text(parseInt($(".infoUpNum").text())+1);
    });
    //监听踩事件
    $("body").delegate(".infoDown","click",function () {
        $(".infoDownNum").text(parseInt($(".infoDownNum").text())+1);
    });
    //监听删除事件
    $("body").delegate(".infoDel","click",function () {
        $(this).parents(".info").remove();
    });

    //创建节点的方法
    function createElm(text) {
        var $weibo =$("<div class=\"info\">\n" +
            "            <p class=\"infoText\">"+text+"</p>\n" +
            "            <p class=\"infoOperation\">\n" +
            "                <span class=\"infoTime\">"+formartDate()+"</span>\n" +
            "                <span class=\"infoHandle\">\n" +
            "                    <a href=\"javascript:;\" class=\"infoUp\"></a>\n" +
            "                    <a href=\"javascript:;\" class=\"infoUpNum\">0</a>\n" +
            "                    <a href=\"javascript:;\" class=\"infoDown\"></a>\n" +
            "                    <a href=\"javascript:;\" class=\"infoDownNum\">0</a>\n" +
            "                    <a href=\"javascript:;\" class=\"infoDel\"></a>\n" +
            "                    <a href=\"javascript:;\" class=\"infoDel\">删除</a>\n" +
            "                </span>\n" +
            "            </p>\n" +
            "        </div>");
        return $weibo;
    }

    //生成时间的方法
    function formartDate() {
        var date = new Date();
        var arr = [date.getFullYear() + "年",
            date.getMonth() + 1 + "月",
            date.getDate() + "日 ",
            date.getHours() + ":",
            date.getMinutes() + ":",
            date.getSeconds()];
        return arr.join("");
    }
});