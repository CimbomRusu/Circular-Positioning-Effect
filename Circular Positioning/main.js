input.onkeyup=function(e){
    if(e.which==13){
        let n = input.value;
        let a = 0;
        let r=200;
        let rad=(2*Math.PI)/n;
        let i=1;
        let interval=setInterval(()=>{
            let x=600+r*Math.cos(a);
            let y=300+r*Math.sin(a);
            a+=rad;
            
            
            let c=document.createElement("div");
            document.body.appendChild(c);
            c.className="circle";
            c.style.width="10px";
            c.style.height="10px";
            c.style.borderRadius="100%";
            c.style.border="1px solid black";
            c.style.position="absolute";
            c.style.left=x+"px";
            c.style.top=y+"px";
            if (i++ == n) {
                window.clearInterval(interval);
            } 
        },100)
        let circles=document.querySelectorAll(".circle");
        if(circles!=null){
            for(circle of circles){
                circle.remove();
            }
        }
        input.value="";
    }
}