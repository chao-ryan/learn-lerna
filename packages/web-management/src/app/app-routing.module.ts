import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { WangeditorComponent } from './pages/wangeditor/wangeditor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/wangeditor' },
  { path: 'wangeditor', component: WangeditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
