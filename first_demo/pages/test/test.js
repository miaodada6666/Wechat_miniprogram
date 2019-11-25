var app = getApp()
Page({
    data: {
        imgUrls: [
            'https://raw.githubusercontent.com/wiki/miaodada6666/pictures/1.png',
            'https://raw.githubusercontent.com/wiki/miaodada6666/pictures/2.png',
            'https://raw.githubusercontent.com/wiki/miaodada6666/pictures/3.png'
        ],

        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500

    },
    onLoad: function() {
        console.log('onLoad test');
    }
})