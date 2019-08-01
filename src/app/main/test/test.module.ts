import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TestPage } from './test.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    loadChildren: './first/first.module#FirstPageModule'
  },
  {
    path: 'second',
    loadChildren: './second/second.module#SecondPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestPage]
})
export class TestPageModule { }
