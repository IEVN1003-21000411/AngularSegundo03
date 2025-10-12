export class ClassAxB {
  numero1!:number;
  numero2!:number;
  resultado!:number;

  Operacion():void{

    if(this.numero1 === 0 || this.numero2 ===0){
      this.resultado = 0
      return;
    }
    // const nu1 = this.numero1;
    // const nu2 = this.numero2;
    this.resultado = 0;

    for(let i = 0; i< this.numero2; i++){
      this.resultado += this.numero1;
    }
  }

}
