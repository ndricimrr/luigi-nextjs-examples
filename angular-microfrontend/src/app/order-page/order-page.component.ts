import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent, Navigation } from '@angular/router';
import * as  LuigiClient  from '@luigi-project/client';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
    LuigiClient.addInitListener((context) => {
      console.log('Luigi Client initialised in Details Page');
      console.log('nodeParams', LuigiClient.getNodeParams());
    });
   }

  ngOnInit(): void {
    // addInitListener((context) => {
    //   console.log('Luigi Client initialised in Details Page');
    //   console.log('nodeParams', getNodeParams());
    // });
  }

  navigate() {
    this.router.navigateByUrl('details');
  }

}
