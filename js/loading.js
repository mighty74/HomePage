function loaded(){
    document.removeEventListener("mousewheel", handleMouseWheel, { passive: false });
    document.removeEventListener("touchmove", handleTouchMove, { passive: false });
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

function LockScroll(){
    document.addEventListener("mousewheel", handleMouseWheel, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
}

function handleMouseWheel(e) {
    e.preventDefault();
}

function handleTouchMove(e) {
    e.preventDefault();
}
     
function return_scroll(){
    var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).off(scroll_event);
    $(document).off('.noScroll');
} 

window.onload = function () {
    setTimeout(LockScroll, 0)
    setTimeout(loaded, 3000)
}