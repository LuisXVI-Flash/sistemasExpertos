
const buscarDiagnostico = document.getElementById('btnbuscar_cliente')
const mostrarDiagnostico=()=>{
    fetch("./controllers/controlador_busqueda_diagnostico.php")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // console.log(JSON.parse(data))
      if (data.error) {

        console.log("aaeaeaea "+data.error)
        //mensaje.innerHTML = `
          //  <div class="alert alert-danger" role="alert">
            //Llena el campo buscar
            //</div>`;
       // alerta.innerHTML=``;
      } else {

        // console.log(data)
       
        $(document).ready( function () {
            // creamos el boton
        //     $('#cliente_romel').on('click', 'td.editor-delete', function (e) {
        //       e.preventDefault();
       
        //       editor.remove( $(this).closest('tr'), {
        //           title: 'Delete record',
        //           message: 'Are you sure you wish to remove this record?',
        //           buttons: 'Delete'
        //       } );
        //   } );
        // creamos la tabla

        
              $('#tabla_diagnostico').DataTable({
                columns:[
                  {data:"iddiagnostico"},
                  {data:"fecha"},
                  {data:"enfermedad"},
                ],
                data:data,
                "language": {
                  "url": "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json"
                },
                // success: function(data) {
                //   cargarTabla(data);
                //      },
              "lengthMenu":[[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, "Todos"]],
              });
            } );

      }
    });
  }
  console.log("Hola")
  mostrarDiagnostico()
