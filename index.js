for(var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
{
    var s=this.innerHTML;
    handle(s);
    animation(s);
});
}
document.addEventListener("keypress",function(event)
{
    handle(event.key);
    animation(event.key);
    }
);
function handle(event)
{
    var n=event;
    switch (n) {
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var a1=new Audio("sounds/kick-bass.mp3");
            a1.play();
            break;
        case "s":
        var a2=new Audio("sounds/snare.mp3");
        a2.play();
        break;
        case "d":
        var a3=new Audio("sounds/tom-1.mp3");
        a3.play();
        break;
        case "j":
        var a4=new Audio("sounds/tom-2.mp3");
        a4.play();
        break;
        case "k":
        var a5=new Audio("sounds/tom-3.mp3");
        a5.play();
        break;
        case "l":
        var a6=new Audio("sounds/tom-4.mp3");
        a6.play();
        break;
    }
}
function animation(ev)
{
    var n=document.querySelector("."+ev);
    n.classList.add("pressed");
    setTimeout(function()
{
    n.classList.remove("pressed");
},100);

    
}