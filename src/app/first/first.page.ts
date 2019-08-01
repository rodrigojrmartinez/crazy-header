import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: 'first.page.html',
  styleUrls: ['first.page.scss'],
})
export class FirstPage {

  constructor(private _rt: Router) { }


  public navigateSecond() {
    this._rt.navigate(['/second']);
  }
}
