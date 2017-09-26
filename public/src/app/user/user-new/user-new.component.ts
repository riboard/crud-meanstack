import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

import { User } from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  @Output() createNewUserEvent = new EventEmitter();
  newUser = new User;
  data: any;
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
  cropperSettings: CropperSettings;

  constructor() {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 200;
    this.cropperSettings.canvasHeight = 200;
    this.data = {};

  }

  ngOnInit() {
  }

  create() {
    // Set foto data
    this.newUser.foto = this.data.image;
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
    this.cropper.reset();
  }

  fileChangeListener($event) {
    let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function (loadEvent: any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
}

}
