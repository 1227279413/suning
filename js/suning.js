let banner=document.getElementById("banner_box");
let bannerNav1=banner.getElementsByClassName("banner_nav1");
let bannerNav1box=banner.getElementsByClassName("banner_nav1box");
console.log(bannerNav1box);
console.log(bannerNav1);
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
console.log(topx);
console.log(topxb);
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