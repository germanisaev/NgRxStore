import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { galleryReducer } from './store/gallery.reducer';

import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from './gallery/gallery.service';

import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';

import { EffectsModule } from '@ngrx/effects';
import { GalleryEffect } from './gallery/gallery.effect';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ gallery: galleryReducer }),
    EffectsModule.forRoot([GalleryEffect])
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
