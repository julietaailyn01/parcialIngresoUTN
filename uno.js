/*
Mosquera Julieta Ailyn
division C

Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function mostrar()
{
	//declaro las variables
	var contador;
	var nombreIngresado;
	var precioIngresado;
	var unidadesIngresadas;
	var tipoInflamableIngresado;
	var marcaIngresada;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var contadorAlcohol;
	var contadorIac;
	var contadorQuat;
	var acumuladorAlcohol;
	var acumuladorIac;
	var acumuladorQuat;
	var acumuladorIgnifugo;
	var acumuladorCombustible;
	var acumuladorExplosivo;
	var inflamableMasVisto;
	var acumuladorIacMenosDoscientos;
	var precioMasCaro;
	var nombreMasCaro;
	var marcaMasCaro;
	var banderaMasCaro;

	//inicializo las variables
	contadorAlcohol = 0;
	contadorIac = 0;
	contadorQuat = 0;
	acumuladorAlcohol = 0;
	acumuladorIac = 0;
	acumuladorQuat = 0;
	acumuladorIgnifugo = 0;
	acumuladorCombustible = 0;
	acumuladorExplosivo= 0;
	acumuladorIacMenosDoscientos = 0;
	banderaMasCaro = 0;
	promedioAlcohol = 0;
	promedioIac = 0;
	promedioQuat = 0;


	//inicio el for para ingresar datos de 5 productos
	for(contador = 0; contador<5; contador++)
	{
		//ingreso y valido datos
		nombreIngresado = prompt("Ingrese el nombre del tipo de producto: ALCOHOL, IAC o QUAT");
		while(isNaN(nombreIngresado)== false || nombreIngresado != "ALCOHOL" && nombreIngresado != "IAC" && nombreIngresado!= "QUAT")
		{
			nombreIngresado = prompt("ERROR! Ingrese el nombre del tipo de producto");
		}
		precioIngresado = prompt("Ingrese el precio entre 100 y 300");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado)== true || precioIngresado<100 && precioIngresado>300)
		{
			precioIngresado = prompt("ERROR! Ingrese el precio del producto");
			precioIngresado = parseInt(precioIngresado);
		}
		unidadesIngresadas = prompt("Ingrese la cantidad de unidades del producto");
		unidadesIngresadas= parseInt(unidadesIngresadas);
		while(isNaN(unidadesIngresadas)==true || unidadesIngresadas<1 && unidadesIngresadas>1000)
		{
			unidadesIngresadas = prompt("ERROR! Ingrese la cantidad de unidades");
			unidadesIngresadas = parseInt(unidadesIngresadas);
		}
		tipoInflamableIngresado = prompt("Ingrese el tipo de inflamable: ignifugo, combustible, explosivo");
		while(isNaN(tipoInflamableIngresado)== false || tipoInflamableIngresado != "ignifugo" && tipoInflamableIngresado != "combustible" && tipoInflamableIngresado != "explosivo")
		{
			tipoInflamableIngresado = prompt("ERROR! Ingrese el tipo de inflamable");
		}
		marcaIngresada = prompt("Ingrese la marca del producto: ");
		while(isNaN(marcaIngresada)== false)
		{
			marcaIngresada = prompt("ERROR! Ingrese la marca del producto: ");
		}

		//acumulo las cantidades por tipo de producto
		switch(nombreIngresado)
		{
			case "ALCOHOL":
				acumuladorAlcohol = acumuladorAlcohol + unidadesIngresadas;
				contadorAlcohol++;
			break;
			case "IAC":
				acumuladorIac = acumuladorIac + unidadesIngresadas;
				contadorIac++;
				if (precioIngresado < 201) 
				{
					acumuladorIacMenosDoscientos = acumuladorIacMenosDoscientos + unidadesIngresadas;
				}
			break;
			case "QUAT":
				acumuladorQuat = acumuladorQuat + unidadesIngresadas;
				contadorQuat++;
			break;
		}// fin switchç

		//cuento el tipo de inflamable
		switch(tipoInflamableIngresado)
		{
			case "ignifugo":
				acumuladorIgnifugo = acumuladorIgnifugo + unidadesIngresadas;
			break;
			case "combustible":
				acumuladorCombustible = acumuladorCombustible + unidadesIngresadas;
			break;
			case "explosivo":
				acumuladorExplosivo = acumuladorExplosivo + unidadesIngresadas;
			break;
		}
		//busco el producto mas caro
		if (banderaMasCaro =0 || precioIngresado> precioMasCaro) 
		{
			precioMasCaro = precioIngresado;
			nombreMasCaro = nombreIngresado;
			marcaMasCaro = marcaIngresada;
			banderaMasCaro = 1;
		}

	}//fin for

	//busco los promedios
	promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	promedioIac = acumuladorIac / contadorIac;
	promedioQuat = acumuladorQuat / contadorQuat;

	if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo) 
	{
		inflamableMasVisto = "ignifugo";
	}else
	{
		if (acumuladorCombustible > acumuladorExplosivo) 
		{
			inflamableMasVisto = "combustible";
		}else
		{
			inflamableMasVisto = "explosivo";
		}
	}
	// muesto los datos por consola
	console.log("El promedio de unidades de ALCOHOL es: " + promedioAlcohol
		+ "\n El promedio de unidades de IAC es: " + promedioIac
		+ "\n El promedio de unidades de QUAT es: " + promedioQuat
		+ "\n El tipo de inflamable con mas cantidad de unidades es: " + inflamableMasVisto
		+ "\n Se compraron: " + acumuladorIacMenosDoscientos + " unidades de IAC con precios menores a 200"
		+ "\n El producto mas caro es: " + nombreMasCaro + " y su marca es: " + marcaMasCaro);


}//fin funcion
