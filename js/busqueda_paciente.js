
const buscarPaciente = document.getElementById('btnbuscar_cliente')
const mostrarPaciente=()=>{
    fetch("./controllers/controlador_busqueda_paciente.php")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // console.log(JSON.parse(data))
      if (data.error) {

        console.log(data.error)
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

        
              $('#tabla_paciente').DataTable({
                columns:[
                  {data:"nombre"},
                  {data:"apellido"},
                  {data:"dni"},
                  {data:"edad"},

                  {
                    data: null,
                    className: "dt-center editor-delete",
                    render: function(data, type, row) {
                        return `<form action="index.php?vista=paciente&id=${data["idusuario"]}"
                            method="POST">
                            <td class="content__btn">
                               <input type="submit" name="Diagnostico" value="Diagnostico" class="btn btn-secondary btn-sm">
                            </td>
                     </form>`;
                      },
                    orderable: false
                  },
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
  mostrarPaciente()
