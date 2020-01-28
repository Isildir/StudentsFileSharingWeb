import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { MainGroupPageComponent } from './components/main-group-page/main-group-page.component';
import { RegisteringPageComponent } from './components/registering-page/registering-page.component';
import { LoggingPageComponent } from './components/logging-page/logging-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'logging', component: LoggingPageComponent },
  { path: 'registering', component: RegisteringPageComponent },
  { path: 'group', component: MainGroupPageComponent },
  { path: '', component: StartingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
