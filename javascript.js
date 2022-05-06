


codigos = "Codigos de alumnos: \n\n◘   1\n◘   2\n◘   3\n◘   4\n◘   5\n◘   6" 

let condicion = true
lista_alumnos=0
while (condicion==true) {
    
    if(lista_alumnos==0){        
        lista = alert(" "+codigos)
        lista_alumnos=lista_alumnos+1
    }

    numero_codigo = parseInt(prompt("Ingrese codigo del alumno: "))
    

    // Quiero poner esta restriccion pero no me funciona: (isNaN(numero_codigo)) && ((numero_codigo<1) || (numero_codigo>6))
    if(isNaN(numero_codigo)){
        while(isNaN(numero_codigo)){
            alert("no es un codigo valido")
            numero_codigo = parseInt(prompt("Ingrese codigo del alumno: ")) 
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
        
    if(condicion==true){
        ver_lista = confirm("Desea ver los codigos de los alumnos?")
            if (ver_lista == true){
                lista = alert(" "+codigos)
            }
    }
   
}