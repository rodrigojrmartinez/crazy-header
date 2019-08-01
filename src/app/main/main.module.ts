import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/dash',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainPage,
    children: [
      {
        path: 'dash',
        loadChildren: './dash/dash.module#DashPageModule'
      },
      {
        path: 'test',
        loadChildren: './test/test.module#TestPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [MainPage]
})
export class MainPageModule { }
