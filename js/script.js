const $btnFlecha = document.getElementById("flecha");
const $linkAbouMe = document.getElementById("AbouMe");
const $linkTrabajos = document.getElementById("Trabajos");
const $linkContacto = document.getElementById("Contacto");

const $form = document.getElementById("form");
const $btnMailto = document.getElementById("mailForm");

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


$linkAbouMe.addEventListener("click", ()=>{
    let seccion = document.getElementById("stnSobreMi");
    let position = seccion.getBoundingClientRect();
    console.log(position);

    window.scrollTo({
        behavior: "smooth",
        top: (position.top-75)
    });
});


$linkTrabajos.addEventListener("click", ()=>{
    let seccion = document.getElementById("stnTrabajos");
    let position = seccion.getBoundingClientRect();
    console.log(position);

    window.scrollTo({
        behavior: "smooth",
        top: (position.top-75)
    });
});

$linkContacto.addEventListener("click", ()=>{
    let seccion = document.getElementById("stnContacto");
    let position = seccion.getBoundingClientRect();
    console.log(position);

    window.scrollTo({
        behavior: "smooth",
        top: (position.top-75)
    });
});

//formulario

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dataForm = new FormData($form);
    $btnMailto.setAttribute('href', `mailto:samueltomasmedina_1999@hotmail.com?subject=Nombre: ${dataForm.get('name')}, Correo: ${dataForm.get('email')}&body=${dataForm.get('message')}` );
    $btnMailto.click();
});