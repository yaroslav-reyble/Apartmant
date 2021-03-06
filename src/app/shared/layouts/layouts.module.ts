import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrokerFormComponent } from './broker-form/broker-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProgressStatusComponent } from './progress-status/progress-status.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [CommonModule, RouterModule, TranslateModule, FlexLayoutModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatStepperModule, ReactiveFormsModule, MatSelectModule],
  declarations: [FooterComponent,  ToolbarComponent, WrapperComponent, HeaderComponent, BrokerFormComponent, ProgressStatusComponent],
  exports: [FooterComponent,  ToolbarComponent, WrapperComponent, BrokerFormComponent, ProgressStatusComponent],
})
export class LayoutsModule {}

