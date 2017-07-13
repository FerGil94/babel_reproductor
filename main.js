
class Cancion {
	constructor (titulo, artista, duracion, codec, genero)
	{
		this.titulo=titulo;
		this.artista=artista;
		this.duracion=duracion;
		this.codec= codec;
		this.genero=genero;
		this.estado=false;
	}

	reproducir()	
	{
		this.estado=true;
	}

	detener()
	{
		this.estado=false;
	}
nombre()
{
 return this.titulo+" "+this.artista;
}
}

var nuevaCancion=new Cancion("hola","juan","2.45","mp3","Rock");

nuevaCancion.reproducir();
nuevaCancion.nombre();

console.log("El estado de la cancion es: "+nuevaCancion.estado);
console.log(nuevaCancion.nombre());
var nuevaCancion2=new Cancion("Wonder wall","Oasis","3.41","mp3","Cumbia");

nuevaCancion2.reproducir();
console.log("El estado de la cancion es: "+nuevaCancion2.estado+ " El genero es: "+nuevaCancion2.genero);
console.log(nuevaCancion2.nombre());
	
