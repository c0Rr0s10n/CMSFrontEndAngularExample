import { NONE_TYPE } from '@angular/compiler';
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
      let activeTab = Array.from(document.getElementsByClassName('tab-active') as HTMLCollectionOf<HTMLElement>)
      activeTab.forEach(element => {
        element.classList.remove("tab-active");
        element.classList.add("tab-deactivated");
      });
      event.srcElement.classList.add("tab-active")
      event.srcElement.classList.remove("tab-deactivated")

  }
}
