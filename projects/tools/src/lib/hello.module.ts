import { ModuleWithProviders, NgModule } from "@angular/core";
import { HelloService } from "./hello.service";

@NgModule()
export class HelloModule {

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: HelloModule,
      providers: [
        { provide: HelloService, useClass: HelloService }
      ]
    }
  }
}