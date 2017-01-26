import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlyphComponent } from './glyph/glyph.component';
import { CheckGlyphComponent } from './check-glyph/check-glyph.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CheckGlyphComponent,
    GlyphComponent,
    RouterLinkComponent,
    MessageComponent
  ],
  exports: [
    CheckGlyphComponent,
    GlyphComponent,
    RouterLinkComponent,
    MessageComponent
  ]
})
export class UtilModule { }
