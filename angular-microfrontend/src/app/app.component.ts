import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent, Navigation } from '@angular/router';
import { linkManager, getNodeParams } from '@luigi-project/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // sURL = 'https://raw.github.tools.sap/dxp/tech-docs-e2e-test-repository/main/component-with-mkdocs/README.md'; 
  sURL = '123'; 


  constructor(router: Router){
    router.events.subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationEnd) {
          console.log('NavigationEnd', event);
          linkManager().fromVirtualTreeRoot().withoutSync().withParams({url: this.sURL}).navigate(event.url.substring(1));
         
        }
      });
 
  }
  
 
}


