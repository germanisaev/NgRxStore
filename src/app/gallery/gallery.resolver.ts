import { Injectable } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UserResolver implements Resolve<any> {
   constructor(public galleryService: GalleryService) { }
   resolve(): Observable<any> {
      return this.galleryService.loadGallery().pipe(
         catchError((error) => {
            return of('No data');
         })
      )
   }
}