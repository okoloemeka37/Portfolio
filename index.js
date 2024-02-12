//sticky nav bar

    window.onscroll=function(){
ruled()
    }
        
let nav=document.querySelector(".nav");
let sticky=nav.offsetTop;



function ruled() {


    if (window.scrollX <=sticky) {
   
        nav.classList.add("sticky");
        nav.classList.remove("nav");
  } else {
    nav.classList.remove("sticky");
    
  }
}
 
//movable navbar

//home





let f=document.querySelectorAll(".f");
f.forEach(ele => {
    ele.addEventListener('click',()=>{
        if (!ele.classList.contains("bg-blue")) {
            f.forEach(rt => {rt.classList.remove("bg-blue")
            let id="."+rt.id;
            document.querySelector(id).style.display="none"
        })
            ele.classList.add("bg-blue");
            let id="."+ele.id;
            document.querySelector(id).style.display="block"
        }
    })
});



const the_animation = document.querySelectorAll('.elements')



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let attr="."+entry.target.getAttribute("type");
          

            entry.target.classList.add('animate')
        }
           else {
                entry.target.classList.remove('animate')
           }
        
    })
},
   { threshold: 0
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 

let vcs=document.querySelectorAll(".vc")
vcs.forEach(vc => {
    vc.addEventListener("click",()=>{
        
        vcs.forEach(v=> {
            v.classList.remove("bad")
        });
        vc.classList.add("bad")
    })
});