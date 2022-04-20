import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent, Navigation } from '@angular/router';
import { linkManager, getNodeParams, addInitListener } from '@luigi-project/client';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
   }

  url = window.location.href;

  ngOnInit(): void {
    addInitListener((context) => {
      console.log('Luigi Client initialised in Main Page');
      console.log('nodeParams', getNodeParams());
    });

    
  }
  

}
