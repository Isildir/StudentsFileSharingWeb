import { NewGroupPostFormComponent } from './components/new-group-post-form/new-group-post-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingPageComponent } from './components/logging-page/logging-page.component';
import { RegisteringPageComponent } from './components/registering-page/registering-page.component';
import { MainGroupPageComponent } from './components/main-group-page/main-group-page.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GroupPostComponent } from './components/group-post/group-post.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AngularMaterialModule  } from './angular.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilesManagerComponent } from './components/files-manager/files-manager.component';

@NgModule({
   declarations: [
      AppComponent,
      LoggingPageComponent,
      RegisteringPageComponent,
      MainGroupPageComponent,
      StartingPageComponent,
      HeaderComponent,
      FooterComponent,
      GroupPostComponent,
      NavigationComponent,
      FilesManagerComponent,
      NewGroupPostFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AngularMaterialModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
