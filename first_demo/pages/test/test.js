var app = getApp()
Page({
    data: {
        imgUrls: [
            'https://raw.githubusercontent.com/wiki/miaodada6666/pictures/1.png',
            'https://raw.githubusercontent.com/wiki/miaodada6666/pictures/2.JPG',
            'https://raw.githubusercontent.com/wiki/miaodada6666/pictures/3.JPG'
        ],

        indicatorDots: true, //是否显示面板指示点

        autoplay: false, //是否自动播放
        interval: 2000, //自动切换时间间隔
        duration: 500 //滑动动画时长，切换时间

    },
    onLoad: function() {
        console.log('onLoad test');
    }
})