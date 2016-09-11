/**
 * Created by xuting on 2016/8/28.
 */
(function(){
    var desW = 736,
        winW=document.documentElement.clientWidth,
        ratio=winW/desW,
        oMain=document.querySelector('.main');
    if(winW>desW){
        oMain.style.margin='0 auto';
        oMain.style.width=desW+'px';
        return;
    }
    document.documentElement.style.fontSize=ratio*100+'px'
})();

new     Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    /*当切换结束后，给当前展示的区域添加对应的ID*/
    onSlideChangeEnd:function(swiper){
        var slideAry = swiper.slides;//-> 获取当前一共有多少个活动块
        var curIn=swiper.activeIndex;/*当前展示这个区域的索引*/
        var total = slideAry.length;
        //-> 计算ID是page
        var targetID = 'page';
        switch (curIn){
            case 0:
                targetID += -2;
                break;
            case (total - 1):
                targetID+=1;
                break;
            default :
                targetID += curIn;
        }
       [].forEach.call(slideAry,function (item,index){
            if(curIn===index){
                item.id=targetID;
                return
            }
        });
        slideAry[curIn].id= targetID
    }
});
