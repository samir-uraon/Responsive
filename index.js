var menu=document.querySelector(".menu2")
var dropmenu=document.querySelector(".menu2 ul")
var t=1
menu.addEventListener("click",()=>{



    if(t==1){
  dropmenu.style.display="block"
  t=0      
  menu.style.backgroundColor="red"
  for (var i = document.querySelector(".menu2 #close").childNodes.length - 1; i >= 0; i--) {
    document.querySelector(".menu2 #close").removeChild(document.querySelector(".menu2 #close").childNodes[i])
}
var w=document.createElement("h2")
w.innerHTML="X"
document.querySelector(".menu2 #close").appendChild(w)
    }


    else{
         menu.style.backgroundColor="rgba(122, 126, 126, 0.873)"
        for (var i = document.querySelector(".menu2 #close").childNodes.length - 1; i >= 0; i--) {
            document.querySelector(".menu2 #close").removeChild(document.querySelector(".menu2 #close").childNodes[i])
        }
        for(var s=0;s<3;s++){
          var w=document.createElement("hr")
        document.querySelector(".menu2 #close").appendChild(w)  
        }
        
        dropmenu.style.display="none"
        t=1
    }
 
})
document.querySelector(".menu2 ul li").addEventListener("click",()=>{
    dropmenu.style.display="none"
})

function topscroll(){
    window.scrollTo(0,0,"smooth")
}
 function bottomscroll(){
    
    if(window.innerWidth<=375){
     scroll=2500 
     }
     else if(window.innerWidth>=1024){
        scroll=7300 
        }
        else if(window.innerWidth<900){
            scroll=6300 
            }
        else{
           scroll=2170
     }
   
      
        window.scrollTo(0,scroll,"smooth")
    }
function homescroll(){
    window.scrollTo(0,0,"smooth")
}
function viewscroll(){
    
    if(window.innerWidth<=375){
     scroll=700 
     }
     else if(window.innerWidth>=1025){
        scroll=1900 
        }
        else if(window.innerWidth<800){
            scroll=1900 
            }
        else{
           scroll=570
     }
  
      
        window.scrollTo(0,scroll,"smooth")
    }

   
    

 function pressenterclose(evt){
    
    var bool=true
 if(evt.keyCode==13){
bool=false
 }
 return bool
}
