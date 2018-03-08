import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'core',
  template: '',
  styleUrls: []
})
export class CoreComponent {

  protected activeTab: number = 0;

  protected emptyCollection(collection: any[]): boolean {
    return !(collection && collection.length);
  }

  getErrorClass(
    control: AbstractControl,
    field: string
  ): any {
    return {'is-invalid': this.hasError(control)};
  }

  protected getModifier(attribute: number): string {
    let modifier = (attribute - 10) / 2;
    let signal = modifier !== 0 ? (modifier > 0 ? '+' : '-') : '';
    let absModifier = Math.abs(modifier).toFixed(0);
    return `${signal}${absModifier}`;
  }

  getRandom(min: number, max: number): number {
    return (Math.random() * (max - min) + min);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(this.getRandom(min, max));
  }

  rollDice(max: number): number {
    return Math.floor(this.getRandom(1, 6));
  }

  rollAttribute(dices: number = 4) {
    let values: number[] = [];

    for (let i = 1; i <= dices; i++) {
      values.push(this.rollDice(6));
    }

    let sortedValues = values.sort();

    sortedValues.shift();

    return sortedValues.reduce((a, b) => a + b);
  }

  protected hasData(collection: any[]): boolean {
    return !this.emptyCollection(collection);
  }

  hasError(field: AbstractControl): boolean {
    return (field.touched && !field.pristine && !field.valid);
  }

  protected isActiveClass(index: any): {active: boolean} {
    return {active: this.isActiveTab(index)};
  }

  protected isActiveTab(index: any): boolean {
    return index === this.activeTab;
  }

  protected setActiveTab(index: any) {
    this.activeTab = index;
  }
}
