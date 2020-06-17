import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule, FlexLayoutModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatStepperModule],
  declarations: [FooterComponent, SidebarComponent, ToolbarComponent, WrapperComponent, HeaderComponent, BrokerFormComponent, ProgressStatusComponent],
  exports: [FooterComponent, SidebarComponent, ToolbarComponent, WrapperComponent, BrokerFormComponent, ProgressStatusComponent],
})
export class LayoutsModule {}
