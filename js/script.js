const $btnFlecha = document.getElementById("flecha");
const $linkAbouMe = document.getElementsByClassName("AbouMe");
const $linkTrabajos = document.getElementsByClassName("Trabajos");
const $linkContacto = document.getElementsByClassName("Contacto");

const $stnSobreMi = document.getElementById("stnSobreMi").getBoundingClientRect();
const $stnTrabajos = document.getElementById("stnTrabajos").getBoundingClientRect();
const $stnContacto = document.getElementById("stnContacto").getBoundingClientRect();

const $nav = document.getElementById("header-fixed");

const $form = document.getElementById("form");
const $btnMailto = document.getElementById("mailForm");

window.addEventListener("scroll", (e) => {
    let y = document.documentElement.scrollTop;
    let x = screen.width;

    if(y === 0){
        $btnFlecha.classList.add("hide");
        $btnFlecha.classList.remove("active");
    }
    else if(y >= 200){
        $btnFlecha.classList.remove("hide");
        $btnFlecha.classList.add("active");
    }

    if(x > 900){
        if(y < 675){
            $nav.classList.add("top");
        }else if(y >= 675){
            $nav.classList.remove("top");
        }
    }
    else{
        $nav.classList.remove("top");
    }

});


$btnFlecha.addEventListener("click", (e)=>{
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
});


$linkAbouMe[0].addEventListener("click", ()=>{
    window.scrollTo({
        behavior: "smooth",
        top: ($stnSobreMi.top-75)
    });
});

$linkAbouMe[1].addEventListener("click", ()=>{
    window.scrollTo({
        behavior: "smooth",
        top: ($stnSobreMi.top-75)
    });
});


$linkTrabajos[0].addEventListener("click", ()=>{
    window.scrollTo({
        behavior: "smooth",
        top: ($stnTrabajos.top-75)
    });
});

$linkTrabajos[1].addEventListener("click", ()=>{

    window.scrollTo({
        behavior: "smooth",
        top: ($stnTrabajos.top-75)
    });
});

$linkContacto[0].addEventListener("click", ()=>{
    let seccion = document.getElementById("stnContacto");
    let position = seccion.getBoundingClientRect();
    console.log(position);

    window.scrollTo({
        behavior: "smooth",
        top: ($stnContacto.top-75)
    });
});

$linkContacto[1].addEventListener("click", ()=>{
    window.scrollTo({
        behavior: "smooth",
        top: ($stnContacto.top-75)
    });
});

//formulario

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dataForm = new FormData($form);
    $btnMailto.setAttribute('href', `mailto:samueltomasmedina_1999@hotmail.com?subject=Nombre: ${dataForm.get('name')}, Correo: ${dataForm.get('email')}&body=${dataForm.get('message')}` );
    $btnMailto.click();
});
