/*
Mosquera Julieta Ailyn
division C

Enunciado:

Realizar el algoritmo que permita ingresar 
los datos de los alumnos de una division de la UTN FRA, 
los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota
*/

function mostrar()
{
  	//declaro variables
  	var respuesta;
  	var nombreIngresado;
  	var tipoCursadaIngresado;
  	var materiasIngresado;
  	var sexoIngresado;
  	var notaIngresado;
  	var edadIngresado;
  	var mejorPromedio;
  	var nombreMejorPromedio;
  	var banderaMejorPromedio;
  	var masJovenAlumnoLibre;
  	var nombreMasJovenAlumnoLibre;
  	var banderaMasJovenAlumnoLibre;
  	var promedioFemenino;
  	var promedioMasculino;
  	var promedioNoBinario;
  	var acumuladorFemenino;
  	var acumuladorMasculino;
  	var acumuladorNoBinario;
  	var contadorFemenino;
  	var contadorMasculino;
  	var contadorNoBinario;
  	var edadMasMaterias;
  	var nombreMasMaterias;
  	var cantidadMasMaterias;
  	var banderaMasMaterias;

  	// inicializo las variables

  	respuesta = "si";
  	banderaMejorPromedio = 0;
  	banderaMasJovenAlumnoLibre = 0;
  	acumuladorFemenino = 0;
  	acumuladorMasculino = 0;
  	acumuladorNoBinario = 0;
  	contadorFemenino = 0;
  	contadorMasculino = 0;
  	contadorNoBinario = 0;
  	banderaMasMaterias = 0;

  	//ingreso datos hasta que el usuario quiera
  	while(respuesta == "si")
  	{
  		//valido datos
  		nombreIngresado = prompt("Ingrese el nombre del alumno:");
  		while(isNaN(nombreIngresado)== false)
  		{
  			nombreIngresado = prompt("ERROR! Ingrese el nombre del alumno");
  		}
  		tipoCursadaIngresado = prompt("Ingrese el tipo de curasada: libre, presencial o remota");
  		while(isNaN(tipoCursadaIngresado) == false || tipoCursadaIngresado != "libre" && tipoCursadaIngresado != "presencial" && tipoCursadaIngresado != "remota")
  		{
  			tipoCursadaIngresado = prompt("ERROR! Ingrese el tipo de curasada");
  		}
  		materiasIngresado = prompt("Ingrese la cantidad de materias: ");
  		materiasIngresado = parseInt(materiasIngresado);
  		while(isNaN(materiasIngresado)== true || materiasIngresado<1 && materiasIngresado > 8)
  		{
  			materiasIngresado = prompt("ERROR! Ingrese la cantidad de materias: ");
  			materiasIngresado = parseInt(materiasIngresado);
  		}
  		sexoIngresado = prompt("Ingrese el sexo: femenino, masculino o no binario");
  		while(isNaN(sexoIngresado)== false || sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "no binario")
  		{
  			sexoIngresado = prompt("ERROR! Ingrese el sexo del alumno.");
  		}
  		notaIngresado = prompt("Ingrese la nota promedio: ");
  		notaIngresado = parseInt(notaIngresado);
  		while(isNaN(notaIngresado)== true || notaIngresado<0 && notaIngresado > 10)
  		{
  			notaIngresado = prompt("ERROR! Ingrese la nota promedio: ");
  			notaIngresado = parseInt(notaIngresado);
  		}
  		edadIngresado = prompt ("Ingrese la edad del alumno: ");
  		edadIngresado = parseInt(edadIngresado);
  		while ( isNaN(edadIngresado) == true || edadIngresado<18)
  		{
  			edadIngresado = prompt("ERROR! Ingrese la edad del alumno: ");
  			edadIngresado = parseInt ( edadIngresado);
  		}

  		// acumulo notas por sexo ingresado
  		switch(sexoIngresado)
  		{
  			case "femenino":
  				acumuladorFemenino = acumuladorFemenino + notaIngresado;
  				contadorFemenino++;
  			break;
  			case "masculino": 
  				acumuladorMasculino = acumuladorMasculino + notaIngresado;
  				contadorMasculino++;
  			break;
  			case "no binario":
  				acumuladorNoBinario = acumuladorNoBinario + notaIngresado;
  				contadorNoBinario++;
  			break;
  		}
  		//busco el mejor promedio entre mujeres y no binarios
  		if ((sexoIngresado != "masculino") && (banderaMejorPromedio == 0 || mejorPromedio< notaIngresado)) 
  		{
  			mejorPromedio = notaIngresado;
  			nombreMejorPromedio = nombreIngresado;
  			banderaMejorPromedio = 1;
  		}
  		// busco el alumno mas joven entre los que cursan libre
  		if ((tipoCursadaIngresado == "libre") && (banderaMasJovenAlumnoLibre == 0 || masJovenAlumnoLibre > edadIngresado)) 
  		{
  			masJovenAlumnoLibre = edadIngresado;
  			nombreMasJovenAlumnoLibre = nombreIngresado;
  			banderaMasJovenAlumnoLibre = 1;
  		}
  		//busco la persona que cursa mas materias
  		if ((tipoCursadaIngresado != "remota") && (banderaMasMaterias == 0 || materiasIngresado> cantidadMasMaterias)) 
  		{
  			cantidadMasMaterias = materiasIngresado;
  			nombreMasMaterias = nombreIngresado;
  			edadMasMaterias = edadIngresado;
  			banderaMasMaterias = 1;
  		}
  		respuesta = prompt("¿Desea ingresar otro alumno?");
  	}//fin while
  	promedioFemenino = acumuladorFemenino / contadorFemenino;
  	promedioMasculino = acumuladorMasculino / contadorMasculino;
  	promedioNoBinario = acumuladorNoBinario / contadorNoBinario;

  	//muestro los datos por consola. 

  	if (banderaMejorPromedio >0) 
  	{
  		console.log("El alumno con mejor promedio entre mujeres y no binarios es: " + nombreMejorPromedio);
  	}else 
  	{
  		console.log("No hay alumnas mujeres o no binarios");
  	}
  	if (banderaMasJovenAlumnoLibre > 0) 
  	{
  		console.log("El alumno mas joven entre los que cursan libre es: " + nombreMasJovenAlumnoLibre);
  	}else
  	{
  		console.log("No hay alumnos cursando libre");
  	}
  	console.log("El promedio de nota entre las mujeres es: " + promedioFemenino
  		+ "\n El promedio de nota entre los hombres es: " + promedioMasculino
  		+ "\n El promedio de nota entre los no binarios es: " + promedioNoBinario);
  	if (banderaMasMaterias > 0) 
  	{
  		console.log("El nombre del alumno que cursa mas materias es: "  + nombreMasMaterias + " y su edad es: " + edadMasMaterias);
  	}else 
  	{
  		console.log("Todos los alumnos cursan de forma remota.");
  	}
}// fin funcion
