import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import firebase from 'firebase';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { MosaicComponent } from './mosaic/mosaic.component';
import { TestComponent } from './test/test.component';

firebase.initializeApp({
  apiKey: "AIzaSyDGnzKSPRLd6WmQrzpMsR5pnyQ3pdqH3rE",
  authDomain: "facebook-55fb8.firebaseapp.com",
  projectId: "facebook-55fb8",
  storageBucket: "facebook-55fb8.appspot.com",
  messagingSenderId: "55199059892",
  appId: "1:55199059892:web:a0554a864c53fbc411ace1",
  measurementId: "G-SNCLFXW6V0"
});



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TrainingComponent,
    GalleryComponent,
    ReviewComponent,
    ContactComponent,
    MosaicComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
