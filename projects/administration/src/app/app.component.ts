import { Component } from '@angular/core';
import { HelloService } from 'projects/tools/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'administration';

  constructor(private helloService: HelloService) {
    this.helloService.sayHello();
  }
}
