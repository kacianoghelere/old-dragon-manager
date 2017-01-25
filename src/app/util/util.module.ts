import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlyphComponent } from './glyph/glyph.component';
import { CheckGlyphComponent } from './check-glyph/check-glyph.component';
import { Message } from './message';
import { RouterLinkComponent } from './router-link/router-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CheckGlyphComponent,
    GlyphComponent,
    RouterLinkComponent
  ],
  exports: [
    CheckGlyphComponent,
    GlyphComponent,
    RouterLinkComponent
  ]
})
export class UtilModule { }
