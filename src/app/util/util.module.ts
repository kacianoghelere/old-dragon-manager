import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlyphComponent } from './glyph/glyph.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { MessageComponent } from './message/message.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    GlyphComponent,
    RouterLinkComponent,
    MessageComponent,
    FormGroupComponent,
    IconComponent
  ],
  exports: [
    GlyphComponent,
    RouterLinkComponent,
    MessageComponent,
    FormGroupComponent,
    IconComponent
  ]
})
export class UtilModule { }
