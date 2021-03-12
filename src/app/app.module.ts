import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { ActivityListComponent } from './activity-list/activity-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopPanelComponent,
    UserInfoComponent,
    UserActivityComponent,
    ActivityListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
