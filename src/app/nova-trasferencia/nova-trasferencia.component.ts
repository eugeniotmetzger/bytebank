import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector:'app-nova-trasferencia',
  templateUrl:'./nova-trasferencia.componete.html',
  styleUrls:['./nova-trasferencia.component.scss']

})

export class NovaTrasferenciaComponent{

  @Output() aoTransferir= new EventEmitter();

   valor!: number ;
   destino!: number;

trasferir(){
 console.log('Solicitada nova trasferência')

 const valorEmitir = { valor: this.valor, destino: this.destino};
 this.aoTransferir.emit(valorEmitir)
 this.limparCampos();
 
}

limparCampos(){

  this.valor=0;
  this.destino=0;

}
}
