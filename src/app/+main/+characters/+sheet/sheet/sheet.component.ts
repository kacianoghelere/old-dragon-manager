import { Component, OnInit } from '@angular/core';

import { ToasterService } from '../../../../shared/toaster.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
    this.toasterService.test();
  }

}
