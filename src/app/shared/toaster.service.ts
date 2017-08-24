import { Injectable } from '@angular/core';

import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Injectable()
export class ToasterService {

  toastOptions: ToastOptions;

  constructor(private toastyService: ToastyService) {
    this.toastOptions = {
      title: "Toast title",
      msg: "Toast message",
      showClose: true,
      timeout: 5000,
      theme: 'bootstrap',
      onAdd: (toast: ToastData) => {
        console.log('Toast ', toast.id, ' has been added!');
      },
      onRemove: function(toast: ToastData) {
        console.log('Toast ', toast.id, ' has been removed!');
      }
    };
  }

  test() {
    this.toastyService.default(this.toastOptions);
  }
}
