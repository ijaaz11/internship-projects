var overlay=document.getElementById("overlay");
var fulloverlay=document.getElementById("overlayphoto");
function openimg(pic){
    overlay.style.display="flex"
    fulloverlay.src=pic
}


function closeimg(){
    overlay.style.display="none"
}