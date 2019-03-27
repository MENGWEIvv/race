import { NgModule } from '@angular/core';

import { ControlComponent } from './control/control.component';
import { RouterModule } from '@angular/router';
import { iframeState } from 'app/iframe/iframe.route';
import { RaceSharedModule } from 'app/shared';

@NgModule({
    declarations: [ControlComponent],
    imports: [RaceSharedModule, RouterModule.forChild(iframeState)]
})
export class IframeModule {}