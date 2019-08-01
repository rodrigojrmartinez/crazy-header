import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: 'dash.page.html',
  styleUrls: ['dash.page.scss'],
})
export class DashPage {

  constructor(private _rt: Router) { }


  public redirect() {
    this._rt.navigateByUrl('/first');
  }
}
