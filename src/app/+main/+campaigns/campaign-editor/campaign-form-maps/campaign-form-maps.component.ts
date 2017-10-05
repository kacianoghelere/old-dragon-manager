import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { CampaignMap } from '../../../../shared/entities/campaign-map';

@Component({
  selector: 'campaign-form-maps',
  templateUrl: './campaign-form-maps.component.html',
  styleUrls: ['./campaign-form-maps.component.scss']
})
export class CampaignFormMapsComponent implements OnInit {

  @Input('campaignForm') campaignForm: FormGroup;
  @Input('maps') maps: CampaignMap[];

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.campaignForm.addControl('maps', new FormArray([]));
  }

  /**
   * Adds a new map in the campaign
   */
  addMap() {
    const child: CampaignMap = {
      url: '',
      description: '',
      active: true
    };
    this.maps.push(child);
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Remove o mapa do FormArray
   * @param {CampaignMap} map Campaign map entity
   */
  removeMap(map: CampaignMap) {
    if (this.maps.length) {
      let index = this.maps.indexOf(map);
      if (index >= 0) {
        this.maps.splice(index, 1);
        (<FormArray>this.campaignForm.get('maps')).removeAt(index);
      }
    }
  }
}
