import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceRestService } from './services/service-rest.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp, getApps, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule,CommonModule,AngularFireModule,AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebaseConfig, "Huellas"), 
    provideFirebaseApp(() => initializeApp({"projectId":"huellas-5510b","appId":"1:165091675696:web:25d0a04cc687c78a5f27f5",
    "storageBucket":"huellas-5510b.appspot.com","apiKey":"AIzaSyCnCWpp_tVzfgwhGSNxvnxd2ECwwWNESok",
    "authDomain":"huellas-5510b.firebaseapp.com","messagingSenderId":"165091675696","measurementId":"G-12B3W82EZ8"})),
     provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ServiceRestService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule {}
