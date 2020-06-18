// angular
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// libs
import {CookieService, CookieModule} from '@gorniv/ngx-universal';
import {TransferHttpCacheModule} from '@nguniversal/common';
// shared
import {SharedModule} from '@shared/shared.module';
import {TranslatesService} from '@shared/translates';
import {AuthService} from '@shared/services/auth.service';
// components
import {AppRoutes} from './app.routing';
import {AppComponent} from './app.component';
import {UniversalStorage} from '@shared/storage/universal.storage';
import {FlexLayoutModule} from '@angular/flex-layout';

export function initLanguage(translateService: TranslatesService): Function {
    return (): Promise<any> => translateService.initLanguage();
}

@NgModule({
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        TransferHttpCacheModule,
        HttpClientModule,
        RouterModule,
        AppRoutes,
        BrowserAnimationsModule,
        CookieModule.forRoot(),
        SharedModule.forRoot(),
    ],
    declarations: [AppComponent],
    providers: [
        CookieService,
        UniversalStorage,
        AuthService,
        // Guards
        FlexLayoutModule,
    ],
})
export class AppModule {
}
