import { Injectable } from "@angular/core";

@Injectable()
export class HelloService {

  constructor() {}

  sayHello(): void {
    console.log('siemanko');
  }
}