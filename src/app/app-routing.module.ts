import { NgModule } from '@angular/core';
import {RouterModule, Routes, TitleStrategy} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {BlogPageComponent} from "./blog-page/blog-page.component";
import {PortfolioPageComponent} from "./portfolio-page/portfolio-page.component";
import {ChatPageComponent} from "./chat-page/chat-page.component";
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";
import {PageTitleStrategyService} from "./page-title-strategy.service";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    title: 'Home'
  },
  {
    path: 'blog',
    component: BlogPageComponent,
    title: 'Blog'
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent,
    title: 'Portfolio'
  },
  {
    path: 'chat',
    component: ChatPageComponent,
    title: 'Chat'
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    title: 'Contacts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategyService,
    }
  ]
})
export class AppRoutingModule { }
