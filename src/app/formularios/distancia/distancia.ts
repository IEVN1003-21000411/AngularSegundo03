export class Distancia {
  x1!: number;//el signo de ! indica que el valor no sera nulo pero se inicaliza despues
  y1!: number;
  x2!: number;
  y2!: number;
  diatancia!: number;

  //Los valores asignados en el constructor se utilizan para calcular la distancia entre dos puntos
  calDistancia():void {
    const Dx = this.x2 - this.x1;
    const Dy = this.y2 - this.y1;
    this.diatancia = Math.sqrt(Dx * Dx + Dy * Dy);
  }
}
