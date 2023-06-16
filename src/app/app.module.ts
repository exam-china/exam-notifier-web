import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { MyComponent } from './my/my.component';
import { InfoComponent } from './info/info.component';
import { SubjectComponent } from './subject/subject.component';
import { YijianComponent } from './yijian/yijian.component';
import { ErjianComponent } from './subject/erjian/erjian.component';
import { Cet4Component } from './subject/cet4/cet4.component';
import { Cet6Component } from './subject/cet6/cet6.component';
import { JianliComponent } from './subject/jianli/jianli.component';
import { IeltsComponent } from './subject/ielts/ielts.component';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TestComponent,
    MyComponent,
    InfoComponent,
    SubjectComponent,
    YijianComponent,
    ErjianComponent,
    Cet4Component,
    Cet6Component,
    JianliComponent,
    IeltsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
