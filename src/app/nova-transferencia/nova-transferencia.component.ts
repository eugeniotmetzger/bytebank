import { TransferenciaService } from './../services/transferencia.service';
import { transferencia } from '../model/transferencia.model';
import { HttpClient } from '@angular/common/http';
 import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Subscriber } from 'rxjs';

@Component({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.componet.html',
  styleUrls:['./nova-transferencia.component.scss']

})

export class NovaTransferenciaComponent{

  constructor(private service:TransferenciaService){}

  @Output() aoTransferir= new EventEmitter();

   valor!: number ;
   destino!: number;

transferir(){
 console.log('Solicitada nova transferência')

 const valorEmitir: transferencia = { valor: this.valor, destino: this.destino};
var resultado : any;
   return this.service.adicionar(valorEmitir).Subscriber(resultado => {

    console.log(resultado);
    this.limparCampos();

 });

  this.limparCampos();
}

limparCampos(){

  this.valor=0;
  this.destino=0;

}
}
