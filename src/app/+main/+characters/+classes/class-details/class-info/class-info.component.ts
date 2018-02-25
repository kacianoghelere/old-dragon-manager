import { Component, OnInit, Input } from '@angular/core';

import { CharacterClass } from '../../../../../shared/models';

@Component({
  selector: 'class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.scss']
})
export class ClassInfoComponent implements OnInit {

  @Input() characterClass: CharacterClass;
  activePicture: number = 0;

  constructor() { }

  get examplePictures(): string[] {
    return [
      this.characterClass.example_picture_1,
      this.characterClass.example_picture_2,
      this.characterClass.example_picture_3
    ];
  }

  isActivePicture(index: number): boolean {
    return index === this.activePicture;
  }

  nextPicture() {
    if (this.activePicture < (this.examplePictures.length - 1)) {
      this.activePicture++;
    } else {
      this.activePicture = 0;
    }
  }

  previousPicture() {
    if (this.activePicture === 0) {
      this.activePicture = this.examplePictures.length;
    } else {
      this.activePicture--;
    }
  }

  ngOnInit() {
  }

  boolFormat(
    source: any,
    property: string,
    trueParam: string = 'Sim',
    falseParam: string = 'Não'
  ): string {
    if (!source || !property || !source[property]) {
      return falseParam;
    }

    return source[property] ? trueParam : falseParam;
  }
}
