import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import { I18nSupportService } from "./i18n-support.service";
import { HighlightDirective } from './highlight.directive';


@NgModule({
    declarations: [
        AppComponent,
        WelcomeMsgComponent,
        LangSelectorComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        I18nSupportService // 의존성 주입 정보 등록
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
