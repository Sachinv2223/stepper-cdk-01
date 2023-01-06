import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-stepper1',
  templateUrl: './my-stepper1.component.html',
  styleUrls: ['./my-stepper1.component.css'],
  providers: [{ provide: CdkStepper, useExisting: MyStepper1Component }],
})
export class MyStepper1Component extends CdkStepper {

  @Input()
  activeClass = 'active';

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }

}
