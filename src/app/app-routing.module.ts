import { StartingPageComponent } from './starting-page/starting-page.component';
import { MainGroupPageComponent } from './main-group-page/main-group-page.component';
import { GroupSelectPageComponent } from './group-select-page/group-select-page.component';
import { FilesPageComponent } from './files-page/files-page.component';
import { RegisteringPageComponent } from './registering-page/registering-page.component';
import { LoggingPageComponent } from './logging-page/logging-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'logging', component: LoggingPageComponent },
  { path: 'registering', component: RegisteringPageComponent },
  { path: 'files', component: FilesPageComponent },
  { path: 'group', component: MainGroupPageComponent },
  { path: 'group-select', component: GroupSelectPageComponent },
  { path: '', component: StartingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
