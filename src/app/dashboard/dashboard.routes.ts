import { Route } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ViewSectionComponent } from './view-section/view-section.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { AddContentComponent } from './add-content/add-content.component';
import { ViewContentComponent } from './view-content/view-content.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PriorityComponent } from './priority/priority.component';
import { CommentComponent } from './comment/comment.component';
import { UserContributionComponent } from './user-contribution/user-contribution.component';
import { UserComponent } from './user/user.component';
import { SectionAnalyticsComponent } from './section-analytics/section-analytics.component';
import { ArticleAnalyticsComponent } from './article-analytics/article-analytics.component';
import { ElementAnalyticsComponent } from './element-analytics/element-analytics.component';
import { TemplateAnalyticsComponent } from './template-analytics/template-analytics.component';
import { SectionTemplatesComponent } from './section-templates/section-templates.component';
import { CategoryTemplatesComponent } from './category-templates/category-templates.component';
import { ListTemplatesComponent } from './list-templates/list-templates.component';
import { HomepageTemplatesComponent } from './homepage-templates/homepage-templates.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


export const MODULE_ROUTES: Route[] =[
   { path: 'administrator', component: AdminComponent },
    { path: 'home', component:  HomeComponent },
    { path: 'edit-admin', component:  EditAdminComponent },
     { path: 'view-section', component:  ViewSectionComponent },
     { path: 'add-section', component:  AddSectionComponent },
    { path: 'add-category', component:  AddCategoryComponent },
    { path: 'add-subcategory', component:  AddSubcategoryComponent },
    { path: 'add-content', component:  AddContentComponent },
    { path: 'view-content', component:  ViewContentComponent },
    { path: 'homepage', component:  HomepageComponent },
    { path: 'priority', component:  PriorityComponent },
    { path: 'comment', component:  CommentComponent },
    { path: 'user-contribution', component:  UserContributionComponent },
    { path: 'user', component:  UserComponent },
    { path: 'section-analytics', component:  SectionAnalyticsComponent },
    { path: 'article-analytics', component:  ArticleAnalyticsComponent },
    { path: 'element-analytics', component:  ElementAnalyticsComponent },
    { path: 'template-analytics', component:  TemplateAnalyticsComponent },
    { path: 'section-templates', component:  SectionTemplatesComponent },
    { path: 'category-templates', component:  CategoryTemplatesComponent },
    { path: 'list-templates', component:  ListTemplatesComponent },
    { path: 'homepage-templates', component:  HomepageTemplatesComponent },
    { path: 'welcome', component:  WelcomeComponent },
    { path: 'profile', component:  ProfileComponent },
    { path: 'edit-profile', component:  EditProfileComponent },
]  

export const MODULE_COMPONENTS = [
  AdminComponent,
  HomeComponent,
  EditAdminComponent,
  ViewSectionComponent,
  AddSectionComponent,
  AddCategoryComponent,
  AddSubcategoryComponent,
  AddContentComponent,
  ViewContentComponent,
  HomepageComponent,
  PriorityComponent,
  CommentComponent,
  UserContributionComponent,
  UserComponent,
  SectionAnalyticsComponent,
  ArticleAnalyticsComponent,
  ElementAnalyticsComponent,
  TemplateAnalyticsComponent,
  SectionTemplatesComponent,
  CategoryTemplatesComponent,
  ListTemplatesComponent,
  HomepageTemplatesComponent,
  WelcomeComponent,
  ProfileComponent,
  EditProfileComponent,
]
