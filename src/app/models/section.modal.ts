

export class AddSectionRequest {
	 _id:string;
     sectionName:string;
     categoryView:string;
     thumbnailImage:string;
     horigontalImage:string;
     status:boolean;
	 publishStatus:boolean;
	 deleteStatus:boolean;
	 createdDate:string;
	 updatedDate:string;
	 enableDisableDate:string;
	 publishUnbuplishDate:string;
	 sectionViewFormat:string;
	 language:string;
	 orderNo:number;

}

export class AddCategoryRequest {
	_id:string;
	sectionId:string;
	sectionName:string;
	categoryName:string;
	categoryView:string;
	categoryFormat:string;
	subCategoryView:string;
	listView:string;
	listViewFormat:string;
	contributionForm:string;
	titleForm:string;
	guildTextForForm:string;
	guildTextForMedia:string;
	thumbnailImage:string;
    horigontalImage:string;
	userEngBtnLike:boolean;
	userEngBtnShare:boolean;
	userEngBtnComment:boolean;
	userEngBtnSave:boolean;
	userEngBtnDownload:boolean;
	callToActBtnApply:boolean;
	callToActBtnCallMe:boolean;
	callToActBtnInterested:boolean;
	callToActBtnCall:boolean;
	status:boolean;
	publishStatus:boolean;
	deleteStatus:boolean;
	createdDate:string;
	updatedDate:string;
	enableDisableDate:string;
	publishUnbuplishDate:string;
	language:string;

}

export class AddSubCategoryRequest {
	_id:string;
	sectionId:string;
	categoryId:string;
	sectionName:string;
	categoryName:string;
	subCategoryName:string;
	subCategoryView:string;
	subCategoryFormat:string;
	thumbnailImage:string;
	horigontalImage:string;
	userEngBtnLike:boolean;
	userEngBtnShare:boolean;
	userEngBtnComment:boolean;
	userEngBtnSave:boolean;
	userEngBtnDownload:boolean;
	callToActBtnApply:boolean;
	callToActBtnCallMe:boolean;
	callToActBtnInterested:boolean;
	callToActBtnCall:boolean;
	status:boolean;
	publishStatus:boolean;
	deleteStatus:boolean;
	createdDate:string;
	updatedDate:string;
	enableDisableDate:string;
	publishUnbuplishDate:string;
	language:string;

}