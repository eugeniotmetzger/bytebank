import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
   
  trasferencias: any[]=[];

  trasferir($event: any){
     
      console.log($event)
      const trasferencia ={...$event, data: new Date()}; 
      this.trasferencias.push(trasferencia);  
  }

 

}
