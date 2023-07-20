import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResearchActivitiesPageComponent} from "./pages/research-activities-page/research-activities-page.component";
import {WelcomePageComponent} from "./pages/welcome-page/welcome-page.component";

const routes: Routes = [
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'activities', component: ResearchActivitiesPageComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
