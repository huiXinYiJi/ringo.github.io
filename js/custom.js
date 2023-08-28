/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
    /* code */
    var initCopyCode = function(){
        var copyHtml = '';
        copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
        //fa fa-globe可以去字体库替换自己想要的图标
        //   copyHtml += '  <i class="fa fa-clipboard"></i><span>copy</span>';
        copyHtml += '  复制';
        copyHtml += '</button>';
        $(".highlight .code pre").before(copyHtml);
        var clipboard = new ClipboardJS('.btn-copy', {
            target: function(trigger) {
                return trigger.nextElementSibling;
            }
        });
        //复制成功事件绑定
        clipboard.on('success', function(e) {
            //清除内容被选择状态
            e.clearSelection();
            e.trigger.innerText = '复制成功'
        });
        //复制失败绑定事件
        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });

        $("figure").hover(
            function() {
                const text = $(this).find(".btn-copy")[0].innerText
                if (text == '复制成功') {
                    $(this).find(".btn-copy")[0].innerText = '复制'
                }
            },
            function() {
                const text = $(this).find(".btn-copy")[0].innerText
                if (text == '复制成功') {
                    setTimeout(() => {
                        $(this).find(".btn-copy")[0].innerText = '复制'
                    }, 1000);
                }
            }
        );
    }
    initCopyCode();
}(window, document);
