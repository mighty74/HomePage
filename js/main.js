const checkbox = document.querySelector("#menu-btn-check");
const list_open = document.querySelector(".list_nav_header");

window.addEventListener("scroll", function() {
    const header = document.querySelector(".header_a");
    const line = document.querySelector("#introduction");
    const skils = document.querySelector("#skils");
    const history = document.querySelector("#history");
    const develop = document.querySelector("#Development");
    const contact = document.querySelector("#Contact");
    const nav = document.querySelectorAll(".nav_header li");
    if(window.pageYOffset >= line.offsetTop-100 && window.pageYOffset < skils.offsetTop-100){
      header.classList.add("sticky");
      nav[1].classList.add("now_position");
      nav[2].classList.remove("now_position");
    }
    else if(window.pageYOffset >= skils.offsetTop-100 && window.pageYOffset < history.offsetTop-100){
      nav[1].classList.remove("now_position");
      nav[3].classList.remove("now_position");
      header.classList.add("sticky");
      nav[2].classList.add("now_position");
    }
    else if(window.pageYOffset >= history.offsetTop-100 && window.pageYOffset < develop.offsetTop-100){
      nav[2].classList.remove("now_position");
      nav[4].classList.remove("now_position");
      header.classList.add("sticky");
      nav[3].classList.add("now_position");
    }
    else if(window.pageYOffset >= develop.offsetTop-100 && window.pageYOffset < contact.offsetTop-100){
      nav[3].classList.remove("now_position");
      nav[5].classList.remove("now_position");
      header.classList.add("sticky");
      nav[4].classList.add("now_position");
    }
    else if(window.pageYOffset >= contact.offsetTop-100){
      nav[4].classList.remove("now_position");
      header.classList.add("sticky");
      nav[5].classList.add("now_position");
      }
    else{
      header.classList.remove("sticky");
      nav[1].classList.remove("now_position");
    }
});




const topscroll = function(){
  const To = document.querySelector("#content");
  window.scrollTo({top: To.offsetTop, behavior: "smooth"});
  checkbox.checked = false;
  open_scroll();
}

const aboutscroll = function(){
  const To = document.querySelector("#introduction");
  window.scrollTo({top: To.offsetTop, behavior: "smooth"});
  checkbox.checked = false;
  open_scroll();
}

const skilsscroll = function(){
  const To = document.querySelector("#skils");
  window.scrollTo({top: To.offsetTop, behavior: "smooth"});
  checkbox.checked = false;
  open_scroll();
}

const historyscroll = function(){
  const To = document.querySelector("#history");
  window.scrollTo({top: To.offsetTop, behavior: "smooth"});
  checkbox.checked = false;
  open_scroll();
}

const developscroll = function(){
  const To = document.querySelector("#Development");
  window.scrollTo({top: To.offsetTop, behavior: "smooth"});
  checkbox.checked = false;
  open_scroll();
}

const contactscroll = function(){
  const To = document.querySelector("#Contact");
  window.scrollTo({top: To.offsetTop, behavior: "smooth"});
  checkbox.checked = false;
  open_scroll();
}


window.addEventListener("scroll", function(){
    const arrow = document.querySelector(".arrow");
    const history = document.querySelector("#history");
    if(window.pageYOffset >= history.offsetTop-100){
        arrow.classList.add("active");
    }
})


const nav_menyu = function(){
  if(!checkbox.checked){
    list_open.classList.add("nav_menyu_open");
    document.addEventListener("mousewheel", handleMouseWheel, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
  }
  else{
    open_scroll();
  }
}

const open_scroll = function(){
  list_open.classList.remove("nav_menyu_open");
  document.removeEventListener("mousewheel", handleMouseWheel, { passive: false });
  document.removeEventListener("touchmove", handleTouchMove, { passive: false });
}
