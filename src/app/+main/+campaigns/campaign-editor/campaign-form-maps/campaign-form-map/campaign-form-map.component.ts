import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { CampaignMap } from '../../../../../shared/entities/campaign-map';

@Component({
  selector: 'campaign-form-map',
  templateUrl: './campaign-form-map.component.html',
  styleUrls: ['./campaign-form-map.component.scss']
})
export class CampaignFormMapComponent implements OnInit {

  @Input('map') map: CampaignMap;
  @Input('maps') maps: FormArray;
  @Output('removeMap') removeMap: EventEmitter<CampaignMap>;
  private mapForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.removeMap = new EventEmitter();
  }

  ngOnInit() {
    this.mapForm = this.toFormGroup(this.map);
    this.maps.push(this.mapForm);
  }

  /**
   * Emite evento de remoção
   */
  remove() {
    this.removeMap.emit(this.map);
  }

  /**
   * Cria um novo FormGroup para o mapa de campanha
   * @param  {CampaignMap} map Mapa de campanha
   * @return {FormGroup}       Novo FormGroup
   */
  toFormGroup(map: CampaignMap): FormGroup {
    return this.formBuilder.group({
      url: [ map.url || '', Validators.required ],
      description: [ map.description || '', Validators.required ],
      active: [ map.active || true ]
    });
  }
}
