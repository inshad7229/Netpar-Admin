import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTooltipModule, MatTableModule, MatPaginator ,
         MatProgressBarModule,MatDialogModule,MatDatepickerModule,MatIconModule,
         MatNativeDateModule,MatCheckboxModule,MatProgressSpinnerModule,MatTabsModule,
         MatSelectModule,MatRadioModule,MatInputModule, MatChipsModule,MatAutocompleteModule,MatSortModule
       } from '@angular/material';
import {MatListModule} from '@angular/material';
// import {DataTableModule} from "angular2-datatable";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxCroppieModule } from 'ngx-croppie';
import {DndModule} from 'ng2-dnd';
// import { SwiperModule } from 'angular2-useful-swiper';
import {ColorPickerModule} from 'ngx-color-picker';
import { CKEditorModule } from 'ng2-ckeditor';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { ClipboardModule } from 'ngx-clipboard';


import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';


import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ViewSectionComponent,SectionConfirmation } from './view-section/view-section.component';
import { DialogComponent} from './view-section/dialog/dialog.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { AddContentComponent } from './add-content/add-content.component';
import { ViewContentComponent,ContentConfirmation,downloadContentConfirmation } from './view-content/view-content.component';
import { ViewDialogComponent } from './view-content/view-dialog/view-dialog.component';
import { AdminConfirmation} from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeDialogComponent } from './homepage/home-dialog/home-dialog.component';
import { PriorityComponent } from './priority/priority.component';
import { PriorityDialogComponent } from './priority/priority-dialog/priority-dialog.component';
import { CommentComponent,CommentConfirmation } from './comment/comment.component';
import { UserContributionComponent } from './user-contribution/user-contribution.component';
import { UserComponent,UserConfirmation } from './user/user.component';
import { FilterDialogComponent } from './user/filter-dialog/filter-dialog.component';
import { SectionAnalyticsComponent } from './section-analytics/section-analytics.component';
import { ArticleAnalyticsComponent } from './article-analytics/article-analytics.component';
import { ElementAnalyticsComponent } from './element-analytics/element-analytics.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserDialogComponent } from './user/user-dialog/user-dialog.component';
import { LanguageDialogComponent } from './home/language-dialog/language-dialog.component';
import { SuggestArticleDialogComponent } from './add-content/suggest-article-dialog/suggest-article-dialog.component';
import { DragDropComponent } from './add-content/drag-drop/drag-drop.component';
import { ContentViewComponent } from './add-content/content-view/content-view.component';
import { ContentViewDialogComponent } from './view-content/content-view-dialog/content-view-dialog.component';
import {ContentViewHomeDialogComponent} from './homepage/content-view-home-dialog/content-view-home-dialog.component';
import {ContentViewPriorityDialogComponent } from './priority/content-view-priority-dialog/content-view-priority-dialog.component';
import { ListingViewComponent } from './add-content/listing-view/listing-view.component';
import {EditorComponent } from './add-content/editor/editor.component';
import { ImageResizerComponent} from './add-content/imageResizer/imageResizer.component';
import {MediaDialogComponent} from './user-contribution/media-dialog/media-dialog.component';

import { SimpleTinyComponent } from './tiny/tiny.component';
import { TrimPipe } from '../pipes/trim/trim.pipe';
import {TrimDirective  } from '../directives/trim/trim.directive';
import {ClipDirective  } from '../directives/clip/clip.directive';
import { OrderByPipe } from '../pipes/orderBy/order-by.pipe';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({

    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        PerfectScrollbarModule,
        MatDatepickerModule,
        CKEditorModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatIconModule,
        MatTabsModule,
        NgxCroppieModule,
        // DataTableModule,
        // SwiperModule,
        MatListModule,
        ColorPickerModule,
        CKEditorModule,
        DateTimePickerModule,
        DndModule.forRoot(),
        // ClipboardModule
        // FroalaEditorModule.forRoot(), 
        // FroalaViewModule.forRoot(),
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
             SuggestArticleDialogComponent,
              LanguageDialogComponent,
              DragDropComponent,
              ContentViewComponent,
              ListingViewComponent,
              ContentViewDialogComponent,
              ContentViewHomeDialogComponent,
              ContentViewPriorityDialogComponent,
              ContentConfirmation,
              FilterDialogComponent,
              SimpleTinyComponent,
              EditorComponent,
              TrimPipe,
              TrimDirective,
              ImageResizerComponent,
              CommentConfirmation,
              MediaDialogComponent ,
              ClipDirective,
              SectionConfirmation,
              downloadContentConfirmation,
              UserConfirmation,
              OrderByPipe

           ],

entryComponents: [DialogComponent,AdminConfirmation, ViewDialogComponent, HomeDialogComponent, PriorityDialogComponent, UserDialogComponent ,LanguageDialogComponent,SuggestArticleDialogComponent,DragDropComponent,ContentViewComponent,
ListingViewComponent,ContentViewDialogComponent,ContentConfirmation,FilterDialogComponent,UserConfirmation,EditorComponent,ContentViewHomeDialogComponent,ContentViewPriorityDialogComponent,ImageResizerComponent,CommentConfirmation,MediaDialogComponent,SectionConfirmation,downloadContentConfirmation ],
providers:[TrimPipe,{
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }]
})

export class DashboardModule{

}

