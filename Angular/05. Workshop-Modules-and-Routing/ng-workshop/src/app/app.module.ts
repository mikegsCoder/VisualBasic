import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { AsideComponent } from './shared/aside/aside.component';

import { CoreModule } from './core/core.module';

import { UserService } from './user.service';
import { ThemeService } from './theme.service';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    CoreModule,
  ],
  providers: [
    UserService, 
    ThemeService, 
    PostService,
  ],
  bootstrap: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent,
  ],
})
export class AppModule {}
