$(document).on('click', function(e){
    if (!$(e.target).closest(".header").length){
        $('.header-main-list').removeClass('header-menu-active');
        $('body').removeClass('scroll-lock');
    }
});
document.querySelector('.header-burger').addEventListener('click', function(){
    document.querySelector('.header-main-list').classList.add('header-menu-active');
    document.querySelector('body').classList.add('scroll-lock');
});

const headerClass = document.querySelector('.header');
const headerBody = document.querySelector('.header-wrapper');
const callback = function(entries, observer){
    if(entries[0].isIntersecting){
        headerBody.classList.remove('_header-scroll');
    } else{
        headerBody.classList.add('_header-scroll');
    }
}
const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerClass);