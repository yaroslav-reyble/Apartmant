import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterRoutes} from './registration.routing';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LayoutsModule} from '@shared/layouts/layouts.module';
import {SharedModule} from '@shared/shared.module';
import {RegistrationComponent} from './registration.component';
import {FormService} from '@shared/services/form.service';


@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutes,
        TranslateModule,
        FlexLayoutModule,
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        FormsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        LayoutsModule,

    ],
    providers: [
        FormService
    ]
})
export class RegistrationModule {
}
