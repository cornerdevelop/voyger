
var btnMenu = document.querySelector('.btn-menu'),
    gnbMenu = document.querySelector('.port-gnb');
    btnClose = document.querySelector('.btn-gnb-close')

    btnMenu.addEventListener('click',function(e){
        gnbMenu.style.display='block';
    });

    btnClose.addEventListener('click',function(){
         gnbMenu.style.display='none';
    });
    