const qs = str => document.querySelector(str);

qs(".nav_toggle").addEventListener("click",()=>{
    qs("header ul").classList.toggle("active");
    qs(".nav_toggle").style.display = "none";
    qs(".nav_toggle2").style.display = "block";
})

qs(".nav_toggle2").addEventListener("click",() => {
    qs("header ul").classList.remove("active");
    qs(".nav_toggle2").style.display = "none";
    qs(".nav_toggle").style.display = "block";
});

// night or Light
function iconLight(){
    qs("body").classList.add('light_color');
    qs(".iconLN").style.display = "none";
    qs(".iconLN2").style.display = "block";
}

function iconNight(){
    qs("body").classList.remove("light_color");
    qs(".iconLN").style.display = "block";
    qs(".iconLN2").style.display = "none";
}

// scroll
window.addEventListener("scroll",()=>{
    if(scrollY >= 70){
        qs("header nav").classList.add("scrollMenu");
    }else{
        qs("header nav").classList.remove("scrollMenu");
    }
});

localStorage.setItem("mode","light_color")

// const mediaF = () =>{
//     let q = window.matchMedia("(max-width: 768px)");
//     if(q.matches){
//         qs("header nav").classList.remove("scrollMenu");
//     }
// }
// mediaF()