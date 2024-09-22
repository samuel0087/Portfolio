const $btnFlecha = document.getElementById("flecha");

window.addEventListener("scroll", (e) => {
    let y = document.documentElement.scrollTop;

    if(y === 0){
        $btnFlecha.classList.add("hide");
        $btnFlecha.classList.remove("active");
    }
    else if(y >= 200){
        $btnFlecha.classList.remove("hide");
        $btnFlecha.classList.add("active");
    }
});


$btnFlecha.addEventListener("click", (e)=>{
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
});
