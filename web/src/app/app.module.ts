import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DirectoryComponent } from './directory/directory.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AppComponent, DirectoryComponent, ProfileComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
