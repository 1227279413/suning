let banner=document.getElementById("banner_box");
let bannerNav1=banner.getElementsByClassName("banner_nav1");
let bannerNav1box=banner.getElementsByClassName("banner_nav1box");
for(let i=0;i<bannerNav1.length;i++){
    for(let j=0;j<bannerNav1.length;j++){
        bannerNav1box[j].style.display="none";
    }
    bannerNav1[i].onmouseenter=function () {
        bannerNav1box[i].style.display="block";
    }
    bannerNav1[i].onmouseleave=function () {
        bannerNav1box[i].style.display="none";
    }
}
let topx=document.getElementsByClassName("top_xiao");
let topxb=document.getElementsByClassName("top-xiaob")
for(let i=0; i<topx.length;i++){
    for(let j=0; j<topx.length;j++){
        topxb[j].style.display="none";
    }
    topx[i].onmouseenter=function () {
        topxb[i].style.display="block";
    }
    topx[i].onmouseleave=function () {
        topxb[i].style.display="none";
    }
}

let topcar=document.getElementsByClassName("top_car")[0];
let topcarbox=document.getElementsByClassName("top-carbox")[0];
    topcar.onmouseenter=function () {
        topcarbox.style.display="block";
    }
    topcar.onmouseleave=function () {
        topcarbox.style.display="none";
    }

    //banner图动态效果实现
let bannerImg=banner.getElementsByClassName("banner_img")[0]
let bannerli=bannerImg.getElementsByTagName("li")
let bannerl=banner.getElementsByClassName("banner_lbtn")[0]
let bannerr=banner.getElementsByClassName("banner_rbtn")[0]
console.log(bannerli);
    let num=0;
    let clear=setInterval(move,1000)

    bannerImg.onmouseenter=function () {
        clearInterval(clear)
    }
    bannerImg.onmouseleave=function () {
        clear=setInterval(move,1000)
    }

    bannerl.onclick=function () {
        move1()
    }
    bannerr.onclick=function () {
        move()
    }

    function move() {
        num++;
        if(num==bannerli.length){
            num=0;
        }
        for(let i=0;i<bannerli.length;i++){
            bannerli[i].style.zIndex="5"
        }
        bannerli[num].style.zIndex="10"
    }

    function move1() {
        num--;
        if(num<0){
            num=bannerli.length-1;
        }
        for(let i=0;i<bannerli.length;i++){
            bannerli[i].style.zIndex="5"
        }
        bannerli[num].style.zIndex="10"
    }
