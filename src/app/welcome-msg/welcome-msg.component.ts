import { Component, OnInit, AfterViewInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

@Component({
    selector: 'app-welcome-msg',
    templateUrl: './welcome-msg.component.html',
    styleUrls: ['./welcome-msg.component.css']
})

export class WelcomeMsgComponent implements OnInit, AfterViewInit {
    title = 'app';
    userName = '';
    dogName = '';
    welcomeMsg = '';
    private valid = false;
    private static CHK_KEYUP_WAIT_SEC = 5000;

    // 앵귤러에서 대신 클래스를 생성해 제공(의존성 주입)
    constructor(public i18nSupporter: I18nSupportService) { }

    ngOnInit() { }

    ngAfterViewInit() {
        const checkTouchedFn = () => {
            if(this.valid) return;
            alert('이름을 입력해 주세요');
        };

        // setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
    }

    setName(name) { this.userName = name; }
    onKeyUp(name) { this.valid = name.length > 0; }
    onChange() { console.log('onChange'); }

    showWelcomeMsg() {
        this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName);
    }
}