import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AboutComponent } from './modules/about/about.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: FullComponent,
    children: [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'about',
      component: AboutComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
