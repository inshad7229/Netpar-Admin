import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdTooltipModule, MdTableModule, MdPaginator ,
         MdProgressBarModule,MdDialogModule,MdDatepickerModule,
         MdNativeDateModule,MdCheckboxModule,MdProgressSpinnerModule,
         MdSelectModule,MdRadioModule,MdInputModule
       } from '@angular/material';
import {DataTableModule} from "angular2-datatable";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface}  from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxCroppieModule } from 'ngx-croppie';
import {DndModule} from 'ng2-dnd';
import { SwiperModule } from 'angular2-useful-swiper';



import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';


import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ViewSectionComponent } from './view-section/view-section.component';
import { DialogComponent} from './view-section/dialog/dialog.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { AddContentComponent } from './add-content/add-content.component';
import { ViewContentComponent } from './view-content/view-content.component';
import { ViewDialogComponent } from './view-content/view-dialog/view-dialog.component';
import { AdminConfirmation} from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeDialogComponent } from './homepage/home-dialog/home-dialog.component';
import { PriorityComponent } from './priority/priority.component';
import { PriorityDialogComponent } from './priority/priority-dialog/priority-dialog.component';
import { CommentComponent } from './comment/comment.component';
import { UserContributionComponent } from './user-contribution/user-contribution.component';
import { UserComponent } from './user/user.component';
import { SectionAnalyticsComponent } from './section-analytics/section-analytics.component';
import { ArticleAnalyticsComponent } from './article-analytics/article-analytics.component';
import { ElementAnalyticsComponent } from './element-analytics/element-analytics.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserDialogComponent } from './user/user-dialog/user-dialog.component';
import { LanguageDialogComponent } from './home/language-dialog/language-dialog.component';


const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({

    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
        MdDatepickerModule,
        MdNativeDateModule,
        MdTooltipModule,
        MdTableModule,
        ReactiveFormsModule,
        FormsModule,
        MdProgressBarModule,
        MdCheckboxModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdInputModule,
        MdSelectModule,
        NgxCroppieModule,
        DataTableModule,
        SwiperModule,
        DndModule.forRoot(),

    ],
    declarations: [
             AdminConfirmation,///inshad
              FooterComponent,
              NavbarComponent,
              SidebarComponent,
             MODULE_COMPONENTS,
             EditAdminComponent,
             ViewSectionComponent,
             DialogComponent,
             AddSectionComponent,
             AddCategoryComponent,
             AddSubcategoryComponent,
             AddContentComponent,
             ViewContentComponent,
             ViewDialogComponent,
             HomepageComponent,
             HomeDialogComponent,
             PriorityComponent,
             PriorityDialogComponent,
             CommentComponent,
             UserContributionComponent,
             UserComponent,
             SectionAnalyticsComponent,
             ArticleAnalyticsComponent,
             ElementAnalyticsComponent,
              UserDialogComponent,
              LanguageDialogComponent

           ],

entryComponents: [DialogComponent,AdminConfirmation, ViewDialogComponent, HomeDialogComponent, PriorityDialogComponent, UserDialogComponent ,LanguageDialogComponent ],
})

export class DashboardModule{

}

