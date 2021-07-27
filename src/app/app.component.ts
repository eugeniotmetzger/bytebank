import { TrasferenciaService } from './services/Transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';



  constructor (private service: TrasferenciaService){

  }

  transferir($event: any){

      this.service.adicionar ($event);

  }



}
