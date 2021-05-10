const header = document.querySelector("header");
const banner = document.querySelector(".banner");

let options = {
    rootMargin:'-100px'
};

let observer = new IntersectionObserver(function (entries,observer){
    entries.forEach((entry)=>{
        if(!entry.isIntersecting){
            header.classList.add('sticky');
        }else{
            header.classList.remove('sticky');
        }
    })
},options);

observer.observe(banner);