/**
 * Created by spaipalle on 10/6/17.
 */

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('featureSelected') featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
      this.featureSelected.emit(feature);
  }

}
