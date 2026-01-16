//LOGIN

function validarFormulario() {

    const rut = document.getElementById("rut").value;
    const password = document.getElementById("password").value;

    // USUARIO DE PRUEBA
    const rutCorrecto = "12345678-9";
    const passCorrecta = "1234";

    if (rut === rutCorrecto && password === passCorrecta) {
        alert("Bienvenido a la billetera JS");
        window.location.href = "MENU.html";
        return false; // evita recarga
    } else {
        alert("Credenciales no válidas. Intente nuevamente");
        return false;
    }
}



    //Show Botones principales 

    //Click , cuando hago click vamos a ejecutar una funcion:
    $("#btnDeposit").click(function() {
        
        $("#seccionDeposit").show();
        $("#seccionSendmoney").hide();
        $("#seccionTransaction").hide();
    });

    $("#btnSendmoney").click(function () {
    $("#seccionDeposit").hide();
    $("#seccionSendmoney").show();
    $("#seccionTransaction").hide();
  });

    $("#btnVerTransaction").click(function () {
    $("#seccionDeposit").hide();
    $("#seccionSendmoney").hide();
    $("#seccionTransaction").show();
  });

   // Ocultar todo
  $("#btnOcultarTodo").click(function () {
    $("#seccionDeposit").hide();
    $("#seccionSendmoney").hide();
    $("#seccionTransaction").hide();
    });

    // DEPÓSITO
$("#btnDepositar").click(function(){
  let monto = $("#monto").val();

  if(monto > 0){
    $("#mensaje").text("Depósito realizado correctamente");
  } else {
    $("#mensaje").text("Ingrese un monto válido");
  }
});