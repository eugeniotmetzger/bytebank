import { transferencia } from '../model/transferencia.model';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listatransferencia: any[]=[];
  private url="http://localhost:3000/trasferencias";

constructor(private httpClient: HttpClient) {
  this.listatransferencia = [];
 }

 get Transferencias(){
   return this.listatransferencia
 }


 todas(): Observable<transferencia[]> {
  return this.httpClient.get<transferencia[]>(this.url)
 }

 adicionar(transferencia:any){

  this.hidratar(transferencia);
  this.Transferencias.push(transferencia);

 }

 private hidratar(transferencia: any){
   transferencia.date = new Date();

 }

}
