export class ZodicoChino {
  Nombre!:string;
  Apaterno!:string;
  Amaterno!:string;
  Dia!:number;
  Mes!:number;
  ano!:number;
  Sexo!:string;
  Resultado!:any;

  consultar() {
    //Arreglo de obajetos para poder pasar el nombre y la imagen
    const zodiacoChino: { nombre: string; emoji: string }[] = [
      { nombre: 'Rata', emoji: '🐀' },
      { nombre: 'Buey', emoji: '🐂' },
      { nombre: 'Tigre', emoji: '🐅' },
      { nombre: 'Conejo', emoji: '🐇' },
      { nombre: 'Dragón', emoji: '🐉' },
      { nombre: 'Serpiente', emoji: '🐍' },
      { nombre: 'Caballo', emoji: '🐎' },
      { nombre: 'Cabra', emoji: '🐐' },
      { nombre: 'Mono', emoji: '🐒' },
      { nombre: 'Gallo', emoji: '🐓' },
      { nombre: 'Perro', emoji: '🐕' },
      { nombre: 'Cerdo', emoji: '🐖' },
    ];

    const inicio = (this.ano - 4) % 12;//el ciclo del zodiaco chino comienza en el año 4, por eso restamos 4 al año ingresado por el usuario y luego sacamos el modulo 12 para obtener el indice del array
    const nombreAnimal = zodiacoChino[inicio >= 0 ? inicio : inicio + 12];//si  el usuario pone un añp negativo le sumamos 12 para obtener el indice correcto

    const fechaACtual = new Date();
    const edad = fechaACtual.getFullYear() - this.ano;//Se calcula la edad restando el año actual con el año de nacimiento

    this.Resultado = {
      NombreCompleto: `${this.Nombre} ${this.Apaterno} ${this.Amaterno}`,
      Edad: edad,
      Signo: nombreAnimal.nombre,
      Img: nombreAnimal.emoji,
      Sexo: this.Sexo
    }
  }
}
