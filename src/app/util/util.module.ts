import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlyphComponent } from './glyph/glyph.component';
import { CheckGlyphComponent } from './check-glyph/check-glyph.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GlyphComponent, CheckGlyphComponent],
  exports: [GlyphComponent, CheckGlyphComponent]
})
export class UtilModule { }
