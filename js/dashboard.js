
//----------------------------------------------------------------------


let search=document.querySelector(".but-input");

search.onclick=function appear(e){

    console.log("Entro esa desgraciada")
    e.preventDefault();
    let documento=document.getElementById("documento").value;
    let contentModal=document.querySelector(".contentModal");
    let dateModal=document.querySelector(".dateModal");

    switch(documento){

    
    case"52368795":
    
    contentModal.style.setProperty("visibility","visible");
    contentModal.style.setProperty("opacity","1");
        dateModal.innerHTML=`
        <p>52368795</p>
        <p>Ana Blenssen</p>
        <p>Pfizer</p>
        <p>Si</p>
        <p>No aplica</p>
        <p>No</p>
        <p>No aplica</p>
        <p>No aplica</p>
        <p>No aplica</p>
        <p>No aplica</p>
        
        
        `

    break;

    case"1001235478":
    contentModal.style.setProperty("visibility","visible");
    contentModal.style.setProperty("opacity","1");
        dateModal.innerHTML=`
        <p>1001235478</p>
        <p>Andrew Merchal</p>
        <p>Moderna</p>
        <p>Sí</p>
        <p>24-09-2021</p>
        <p>Si</p>
        <p>24-11-2021</p>
        <p>No aplica</p>
        <p>No aplica</p>
        <p>No aplica</p>
        `
    break;

    case"25413574":
    contentModal.style.setProperty("visibility","visible");
    contentModal.style.setProperty("opacity","1");
        dateModal.innerHTML=`
        <p>25413574</p>
        <p>Erick Wodal</p>
        <p>AztraZeneca</p>
        <p>Si</p>
        <p>24-09-2021</p>
        <p>Si</p
        <p>24-11-2021</p>
        <p>Si</p>
        <p>Moderna</p>
        <p>24-1-2022</p>
        `
    break;

    case"1007203506":
    contentModal.style.setProperty("visibility","visible");
    contentModal.style.setProperty("opacity","1");
    dateModal.innerHTML=`
    <p> 1007203506</p>
    <p>Usuario no registrado, desea realizar el registro?</p>
    `
    break;

    default:"Por favor digite un número de identidad válido";

}}






