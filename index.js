for(var i = 0 ; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var adr = this.innerHTML;
        audioPlay(adr);
        glow(adr);
    })
}
document.addEventListener("keypress",function (event){
    audioPlay(event.key);
    glow(event.key);
})

function audioPlay(txt){
    switch (txt){
        case "w" :
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a" :
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s" :
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d" :
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j" :
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k" :
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l" :
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(adr);
    }
}
function glow(text){
    document.querySelector("."+text).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("."+text).classList.remove("pressed");
    },100);
}




















// for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         var adr = this.innerhtml
//         var audio = new Audio();

//     })
// }
// document.addEventListener("keypress", function (event){
//     console.log(event.key);
// })









// for(var i = 0 ; i < document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
//         var audio = new Audio("./sounds/crash.mp3");
//         audio.play();
//     });
// }