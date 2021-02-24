import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TwoComponent } from './components/two/two.component';

const routes: Routes = [
  {path:'', component: OneComponent},
  { path: 'two', component: TwoComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [ OneComponent,
                                   PageNotFoundComponent,
                                   TwoComponent
                                 ]