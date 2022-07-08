import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent } from './component/image-cropper.component';
import { LoadImageService } from './services/load-image.service';
import { CropService } from '../public-api';
import { CropperPositionService } from './services/cropper-position.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageCropperComponent,

  ],
  providers: [
    CropService,
    CropperPositionService,
    LoadImageService
  ],
  exports: [
    ImageCropperComponent
  ]
})
export class ImageCropperModule {
}
