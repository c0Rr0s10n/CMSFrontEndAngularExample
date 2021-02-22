import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  changeTab(event: any) {
    let tabs = document.querySelectorAll(".tab");
    event.srcElement.classList.add("tab-active")
  }
}
