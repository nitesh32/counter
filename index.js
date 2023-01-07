document.getElementById("input").addEventListener("change", myfunc);

function myfunc(){
    var data = document.getElementById("input").value;
    console.log(data);
    if(data>=1&&data<=9){
        doit(data);
    }
}

function doit(n){
        var id=setInterval(function(){
            
            document.getElementById("screen").innerHTML=n;
            var t=40;
            var ni=setInterval(function(){
        
                if(t<0){
                    clearInterval(ni);
                    return;
                }
                document.getElementById("screen").style.top=t +"px";
                t--;
            },5);

            console.log(n);
            n--;
            if(n<0){
                clearInterval(id);
                return;
            }
        },1000)
        
    
}
var t=0;
function anim(){
    
}
