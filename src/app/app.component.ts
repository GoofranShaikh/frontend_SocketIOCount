import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(private socket: Socket) { }
  title = 'liveEvents';
  generatedNumber:any

  ngOnInit(){
    this.getMessage()
  }
  getMessage() {
   this.generatedNumber=  this.socket
        .on('show',res=>{
          this.generatedNumber=res
          console.log(this.generatedNumber,'generatednumber')
        })

}
}
