import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingPageComponent } from './logging-page/logging-page.component';
import { RegisteringPageComponent } from './registering-page/registering-page.component';
import { MainGroupPageComponent } from './main-group-page/main-group-page.component';
import { FilesPageComponent } from './files-page/files-page.component';
import { GroupSelectPageComponent } from './group-select-page/group-select-page.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule  } from './angular.material.module';

@NgModule({
   declarations: [
      AppComponent,
      LoggingPageComponent,
      RegisteringPageComponent,
      MainGroupPageComponent,
      FilesPageComponent,
      GroupSelectPageComponent,
      StartingPageComponent,
      HeaderComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AngularMaterialModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
