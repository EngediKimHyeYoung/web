// console.log(document.getElementById("navBtn"));
document.getElementById("navBtn").onclick = function(){
    console.log(this);
    // document.getElementById("menu").style.width = "200px";
    document.getElementById('menu').classList.toggle('open');
    // alert(document.getElementById('menu').classList);
}


