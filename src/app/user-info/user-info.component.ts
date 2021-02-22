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
    if (event.srcElement.tagName == "A"){
      let activeTab = Array.from(document.getElementsByClassName('mat-form-field-infix') as HTMLCollectionOf<HTMLElement>)
      activeTab[0].classList.remove("tab-active");
      activeTab[0].style.animation = "deactivation";
      event.srcElement.classList.add("tab-active")

    }
  }
}
