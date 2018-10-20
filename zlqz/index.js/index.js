$(function(){

    // 我们的服务
    $('.card-box').mouseover(function () { 
        // console.log($('.card-box'))
        $(this).addClass('active').siblings().removeClass('active');
    });

    // 侧边栏
    $('.sbar').mouseover(function(){
        $(this).find('.clan-slider-tips').css('display','block');
        // console.log($(this).find('.clan-slider-tips'))
        
    })
    $('.sbar').mouseleave(function(){
        $(this).find('.clan-slider-tips').css('display','none');
        
    })
});
$('body').scrollspy({ target: '#slider_bar' })