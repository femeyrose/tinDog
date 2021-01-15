import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MosaicComponent } from './mosaic/mosaic.component';
import { ReviewComponent } from './review/review.component';
import { TestComponent } from './test/test.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path:'',component: HomeComponent,
  
  },
  {
    path:'about',component: AboutComponent,
  
  },
  {
    path:'train',component: TrainingComponent,
  
  },
  {
    path:'gal',component: GalleryComponent,
  
  },
  {
    path:'rev',component: ReviewComponent,
  
  },
  {
    path:'con',component: ContactComponent,
  
  },
  {
    path:'mos',component: MosaicComponent,
  
  },
  {
    path:'test',component: TestComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
