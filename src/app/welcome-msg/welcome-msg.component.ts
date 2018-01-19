import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit, AfterViewInit {
	title = 'app';
  userName = 'noasly';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	const checkTouchedFn = () => {
  		if(this.valid) return;
  		alert('이름을 입력해 주세요');

  		setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  	};
  	// checkTouchedFn();
  }

  setName(name) {
  	this.userName = name;
  }

  onKeyUp(name) {
  	this.valid = name.length > 0;
  }

}