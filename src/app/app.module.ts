import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componente/footer/footer.component';
import { ContactComponent } from './componente/contact/contact.component';
import { TestmonialComponent } from './componente/testmonial/testmonial.component';
import { BlogComponent } from './componente/blog/blog.component';
import { PortfolioComponent } from './componente/portfolio/portfolio.component';
import { AboutComponent } from './componente/about/about.component';
import { SkillComponent } from './componente/skill/skill.component';
import { HeaderComponent } from './componente/header/header.component';
import { NavigationComponent } from './componente/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    TestmonialComponent,
    BlogComponent,
    PortfolioComponent,
    AboutComponent,
    SkillComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
