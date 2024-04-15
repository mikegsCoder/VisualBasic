import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { storageServiceProvider } from './storage.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [storageServiceProvider, UserService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
