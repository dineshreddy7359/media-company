import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullComponent } from './layouts/full/full.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { AboutComponent } from './modules/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
