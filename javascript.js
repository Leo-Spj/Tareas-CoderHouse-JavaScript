//Funcion codigos de alumnos
function lista_codigos(){    
    alert("Codigos de alumnos: \n\n◘   1\n◘   2\n◘   3\n◘   4\n◘   5\n◘   6")
}


let condicion = true
lista_alumnos=0
while (condicion==true) {
    
    // la variable "lista_alumnos" lo uso como uncontador, permitiendo mostrar solo una vez (al inicio de la carga de la pagina) la lista con los codigos de los amunos
    if(lista_alumnos==0){        
        lista_codigos()
        lista_alumnos=lista_alumnos+1
    }

    numero_codigo = parseInt(prompt("Ingrese codigo del alumno: "))
    
   // Si no es un numero se le solicitará una correccion en los datos. y este entrará en un ciclo si sigue ingresando datos erroneos
    if(isNaN(numero_codigo)){
        while(isNaN(numero_codigo)){
            alert("no es un codigo valido")
            numero_codigo = parseInt(prompt("Ingrese codigo valido de alumno: ")) 
        }
    }

    switch (numero_codigo){
        case 1:
            alert("Alumno Leo");
            break;
        case 2:
            alert("Alumna Claudia");
            break;
        case 3:                
            alert("Alumno Juan");
            break;
        case 4:
            alert("Alumno Mateo");
            break;
        case 5:
            alert("Alumna Veronica");
            break;
        case 6:
            alert("Alumna Mia");
            break;

        default:
           alert("Alumno no identificado")
           break;

    }

    condicion = confirm("Ingresar otro alumno ?")
    
    //Si se acepta ingresar a otro alumno, se le brinda la opcion de ver la lista de alimnos y sus codigos
    if(condicion==true){
        ver_lista = confirm("Desea ver los codigos de los alumnos?")
            if (ver_lista == true){
                lista_codigos()
            }
    }
   
}