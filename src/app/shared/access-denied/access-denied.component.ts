import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  template: `
  <div class="alert alert-danger" role="alert">
        <div class="alert-items">
            <div class="alert-item static">
                <div class="alert-icon-wrapper">
                    <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
                </div>
                <span class="alert-text">
                    ไม่มีสิทธิ์ใช้งาน โมดูลนี้
                </span>
            </div>
        </div>
    </div>
  `,
  styles: []
})
export class AccessDeniedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
