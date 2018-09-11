$('document').ready(() => {
    // 屏幕自适应
    var docWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var fontSize = 100 * (docWidth / 750) + 'px';
    $('html').css('fontSize', fontSize);
    
    // 岗位列表添加点击事件
    var jobList = document.getElementById('jobBox').getElementsByTagName('li');
    var jobContent = document.getElementsByClassName('jobContent');
    for(let i = 0; i < jobList.length; i++) {
        (function(i) {
            jobList[i].onclick = function() {
                jobContent[i].style.display = 'block';
                // $('.jobContent').fadeIn(400)

                // 进入岗位详情页后，不能翻页，本页内容超过一页范围可以滚动
                jobContent[i].style.overflowY = 'auto';
                $('body').css('overflow', 'hidden')
            }
            
        })(i)
    }
    
    // 点击岗位详情页的deleteKey，隐藏岗位详情页
    $('.jobContent .jobTop .deleteKey').click(function () {
        $(this).parents('.jobContent').fadeOut(400);
        // 使用下一行代码也可实现隐藏（较为生硬）
        // $(this).parents('.jobContent').css('display','none');
        $('body').css('overflow','auto');
    })

})
    