/*
Mosquera Julieta Ailyn
division C

Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata 
con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , 
el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar()
{
	//declaro las variables
	var respuesta;
	var nombreIngresado;
	var estadoCivilIngresado;
	var edadIngresado;
	var temperaturaIngresado;
	var sexoIngresado;
	var contadorViudosMasSecenta;
	var banderaMujerSolteraMasJoven;
	var nombreMujerSolteraMasJoven;
	var edadMujerSolteraMasJoven;
	var precioTotalSinDescuento;
	var contador;
	var contadorMasSecenta;
	var porcentajeMasSecenta;
	var precioConDescuento;
	var precio;
	var descuento;

	//inicializo variables
	respuesta = "si";
	contadorViudosMasSecenta =0;
	banderaMujerSolteraMasJoven = 0;
	contador = 0;
	contadorMasSecenta = 0;
	precio = 600

	//ingreso datos hasta que el usuario quiera
	while(respuesta == "si")
	{
		//cuento los pasajeros
		contador++;
		//valido datos
		nombreIngresado = prompt("Ingrese el nombre del pasajero");
		while(isNaN(nombreIngresado)== false)
		{
			nombreIngresado=prompt("ERROR! Ingrese el nombre del pasajero: ");
		}
		estadoCivilIngresado = prompt("Ingrese el estado civil: soltero, casado o viudo");
		while(isNaN(estadoCivilIngresado)== false || estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("ERROR! Ingrese el estado civil");
		}
		edadIngresado = prompt("Ingrese la edad: ");
		edadIngresado = parseInt(edadIngresado);
		while(isNaN(edadIngresado) == true || edadIngresado <17)
		{
			edadIngresado = prompt("ERROR! Ingrese la edad: ");
			edadIngresado = parseInt(edadIngresado);
		}
		temperaturaIngresado = prompt("Ingrese la temperatura corporal: ");
		temperaturaIngresado = parseInt(temperaturaIngresado);
		while(isNaN(temperaturaIngresado) == true || temperaturaIngresado <0)
		{
			temperaturaIngresado = prompt("ERROR! Ingrese la temperatura corporal: ");
			temperaturaIngresado = parseInt(temperaturaIngresado);
		}
		sexoIngresado = prompt("Ingrese el sexo del pasajero: femenino, masculino o no binario");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "no binario")
		{
			sexoIngresado = prompt ("ERROR! Ingrese el sexo del pasajero: ");
		}

		//busco la cantidad de viudos de mas de secenta
		if (estadoCivilIngresado == "viudo" && edadIngresado > 60) 
		{
			contadorViudosMasSecenta++;
		}

		//busco la mujer soltera mas joven
		if ((estadoCivilIngresado == "soltero") && (sexoIngresado == "femenino") && (banderaMujerSolteraMasJoven == 0 || edadIngresado<edadMujerSolteraMasJoven)) 
		{
			edadMujerSolteraMasJoven = edadIngresado;
			nombreMujerSolteraMasJoven = nombreIngresado;
			banderaMujerSolteraMasJoven = 1;
		}
		//cuento la cantidad de personas mayores a secenta.
		if (edadIngresado>60) 
		{
			contadorMasSecenta++;
		}

		respuesta = prompt("¿Desea ingresar otro pasajero?");
	}//fin while

precioTotalSinDescuento = precio * contador;
porcentajeMasSecenta = (contadorMasSecenta * 100) / contador;
descuento = precioTotalSinDescuento * 25/100;
precioConDescuento = precioTotalSinDescuento - descuento;

//muestro los datos por consola.
console.log("La cantidad de personas viudas mayores a 60 es: " + contadorViudosMasSecenta);
if (banderaMujerSolteraMasJoven>0) 
{
	console.log("El nombre de la mujero soltera mas joven es: " + nombreMujerSolteraMasJoven + " y su edad es: " + edadMujerSolteraMasJoven);
} else 
{
	console.log("No hay mujeres solteras entre los pasajeros");
}
console.log("El precio total del viaje es: $" + precioTotalSinDescuento);
if (porcentajeMasSecenta>50) 
{
	console.log("El precio con descuento es: $" + precioConDescuento );
}
}// fin funcion
