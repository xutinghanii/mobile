/**
 * Created by xuting on 2016/8/30.
 */
(function(){
    var desW = 414,
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
new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    initialSlide :0,
    onSlideChangeEnd: function (swiper) {
        var slideAry = swiper.slides,
            curIn = swiper.activeIndex,
            total = slideAry.length;
        var targetId = 'list';
        switch (curIn) {
            case 0:
                targetId += total - 2;
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIn;
        }
        [].forEach.call(slideAry, function (item, index) {
            if (curIn === index) {
                item.id = targetId;
                return;
            }
            item.id = null;
        });
    }
});

//->MUSIC
~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click', function () {
        if (musicAudio.paused) {//->暂停
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    }, false);

    function controlMusic() {
        musicAudio.volume = 0.1;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        }, false);
    }

    window.setTimeout(controlMusic, 1000);
}();