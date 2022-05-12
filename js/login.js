/*Debe realizar un inicio de sesión quemado, es decir, asignar el usuario Admin y la
contraseña Kuepa2022 por defecto, si los datos ingresados coinciden con estos valores,
el sistema permitirá el ingreso y mostrará el Dashboard, si no lo son mostrara un
mensaje en pantalla que diga error de credenciales. */

let buttonLogin=document.getElementById("buttonLogin");

buttonLogin.addEventListener("click",()=>{

    let user=document.getElementById("Usuario").value;
    let password=document.getElementById("Password").value;


    if (user==="Admin" && password==="Kuepa2022"){
        swal('La contraseña es correcta, Redireccionando a la página...');
        document.formLogin.submit();
    }
    else{
        swal("El usuario o la contraseña que ha digitado, está incorrecto, verifique e intente de nuevo!");
        

    }


})

