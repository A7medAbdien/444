import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

var firebaseConfig = {
  apiKey: "AIzaSyDEGcc9Td9SnVPV4eA9741wYPFstMmP1Qc",
  authDomain: "test-a4a87.firebaseapp.com",
  projectId: "test-a4a87",
  storageBucket: "test-a4a87.appspot.com",
  messagingSenderId: "571282620186",
  appId: "1:571282620186:web:0f40f3d70f36311d0836a3",
  measurementId: "G-JHLKEG5M6S"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),

    // initialize angularfire with credentials from the dashboard
    AngularFireModule.initializeApp(firebaseConfig),
    // Import the AngularFireDatabaseModule to use database
    AngularFirestoreModule

    , AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
