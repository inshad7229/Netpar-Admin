export class AddContentRequest {
	_id:string;
	language:string;
	sectionId:string;
	sectionName:string;
    categoryName:string;
    categoryId:string;
    subCategoryId:string;
    subCategoryName:string;
    headline:string;
    tagline:string;
    tags:string;
    dateOfCreation:string;
    typeOfUser:string;
    userList:object;
    contentBody:object;
    callToActionButton:object;
    userEngagementButton:object;
    suggestedArticle:boolean;
    suggestedArticleList:object;
    thumbnailPicture:string;
    horizontalPicture:string;
    sortlistForHomepage:boolean;
    sortlistForCategory:boolean;
    applicableStateLists:object;
    saveAsDraftStatus:boolean;
    startDateForDraft:string;
    endDateForDraft:string;
    submitForreview:boolean;
    publishStatus:boolean;
    startDateOfPublish:string;
    endDateOfpublish:string;
    publishLaterStatus:boolean;
    startDateForPublishLater:string;
    endDateForPublish:string;
    sendForRevisionStatus:boolean;
    rejectStatus:boolean;
    likeCount:number;
    shareCount:number;
    commentCount:number;
    saveCount:number;
    downloadCount:number;
    applyCount:number;
    callCount:number;
    callMeBackCount:number;
    pageView:number;
    imIntrestedCount:number;
    deleteStatus:boolean;
    googleForm:boolean;
    googleFormUrl:string;




}