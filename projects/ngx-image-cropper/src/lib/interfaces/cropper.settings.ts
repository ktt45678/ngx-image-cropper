import { CropperOptions, OutputFormat } from './cropper-options.interface';
import { ImageTransform } from './image-transform.interface';
import { SimpleChanges } from '@angular/core';

export class CropperSettings {

  // From options
  format: OutputFormat = 'png';
  maintainAspectRatio = true;
  transform: ImageTransform = {};
  aspectRatio = 1;
  resizeToWidth = 0;
  resizeToHeight = 0;
  cropperMinWidth = 0;
  cropperMinHeight = 0;
  cropperMaxHeight = 0;
  cropperMaxWidth = 0;
  cropperStaticWidth = 0;
  cropperStaticHeight = 0;
  canvasRotation = 0;
  initialStepSize = 3;
  roundCropper = false;
  onlyScaleDown = false;
  imageQuality = 92;
  autoCrop = true;
  backgroundColor: string | null = null;
  containWithinAspectRatio = false;
  hideResizeSquares = false;
  alignImage: 'left' | 'center' = 'center';
  fixAspectRatioBy: 'width' | 'height' | 'none' = 'width';
  fixAspectRatioWidth = 0;
  fixAspectRatioHeight = 0;
  fixAttempts = 100;

  // Internal
  cropperScaledMinWidth = 20;
  cropperScaledMinHeight = 20;
  cropperScaledMaxWidth = 20;
  cropperScaledMaxHeight = 20;
  stepSize = this.initialStepSize;

  setOptions(options: Partial<CropperOptions>): void {
    Object.keys(options)
      .filter((k) => k in this)
      .forEach((k) => (this as any)[k] = (options as any)[k]);
    this.validateOptions();
  }

  setOptionsFromChanges(changes: SimpleChanges): void {
    Object.keys(changes)
      .filter((k) => k in this)
      .forEach((k) => (this as any)[k] = changes[k].currentValue);
    this.validateOptions();
  }

  private validateOptions(): void {
    if (this.maintainAspectRatio && !this.aspectRatio) {
      throw new Error('`aspectRatio` should > 0 when `maintainAspectRatio` is enabled');
    }
  }
}
