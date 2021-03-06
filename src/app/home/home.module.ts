import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {HomeRoutes} from './home.routing';
import {HomeComponent} from './home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LayoutsModule} from '@shared/layouts/layouts.module';
import {FormService} from '@shared/services/form.service';

@NgModule({
    imports: [CommonModule,
        HomeRoutes,
        TranslateModule,
        FlexLayoutModule,
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        FormsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule, MatButtonModule, LayoutsModule, ReactiveFormsModule],
    declarations: [HomeComponent],
    providers: [
        FormService
    ]
})
export class HomeModule {
}
