import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';

@NgModule({
  declarations: [
    HomeComponent,
    ImgUploadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[HomeComponent,ImgUploadComponent]
})
export class SharedModule { }
