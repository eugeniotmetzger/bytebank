import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.componet.html',
  styleUrls:['./nova-transferencia.component.scss']

})

export class NovaTransferenciaComponent{

  @Output() aoTransferir= new EventEmitter();

   valor!: number ;
   destino!: number;

transferir(){
 console.log('Solicitada nova transferência')

 const valorEmitir = { valor: this.valor, destino: this.destino};
 this.aoTransferir.emit(valorEmitir)
 this.limparCampos();

}

limparCampos(){

  this.valor=0;
  this.destino=0;

}
}
