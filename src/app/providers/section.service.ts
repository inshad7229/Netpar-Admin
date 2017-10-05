import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable} from 'rxjs/Rx'
import {AddSectionRequest,AddCategoryRequest,AddSubCategoryRequest} from '../models/section.modal'
import "rxjs"


import  {ENV} from '../env'
// import {Admin} from './edit.model.component'

@Injectable()
export class SectionService {
    constructor(private http: Http) {}

    onAddSection(addSectionRequest:AddSectionRequest): Observable <any> {
        let api = ENV.mainApi + "addSection";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(addSectionRequest), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    onAddCategory(addCategoryRequest:AddCategoryRequest): Observable <any> {
        let api = ENV.mainApi + "addCategory";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(addCategoryRequest), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

     onAddSubcategory(addSubCategoryRequest:AddSubCategoryRequest): Observable <any> {
        let api = ENV.mainApi + "addSubCategory";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(addSubCategoryRequest), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
     onGetSection():  Observable<any> {
        let api =  ENV.mainApi+"sectionList";
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(api,options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    onGetCategory(id):  Observable<any> {
        let api =  ENV.mainApi+"getCategory/"+id;
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(api,options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    onGetSectionData():  Observable<any> {
        let api =  ENV.mainApi+"joinsTest";
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(api,options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
onEditSection(addSectionRequest:AddSectionRequest): Observable < any > {
    let api = ENV.mainApi + "editSection/" + addSectionRequest._id;
    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addSectionRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onDeleteSection(addSectionRequest:AddSectionRequest): Observable < any > {
    let api = ENV.mainApi + "editSection/" + addSectionRequest._id;
    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addSectionRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onEnableDisableSection(addSectionRequest:AddSectionRequest): Observable < any > {
    let api = ENV.mainApi + "editSection/" + addSectionRequest._id;
    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addSectionRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onPublishUnpublishSection(addSectionRequest:AddSectionRequest): Observable < any > {
    let api = ENV.mainApi + "editSection/" + addSectionRequest._id;
    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addSectionRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onEditCategory(addCategoryRequest:AddCategoryRequest): Observable < any > {
    let api = ENV.mainApi + "editCategory/" + addCategoryRequest._id;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addCategoryRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onDeleteCategory(addCategoryRequest:AddCategoryRequest): Observable < any > {
    let api = ENV.mainApi + "editCategory/" + addCategoryRequest._id;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addCategoryRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onEnableDisableCategory(addCategoryRequest:AddCategoryRequest): Observable < any > {
    let api = ENV.mainApi + "editCategory/" + addCategoryRequest._id;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addCategoryRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onPublishUnpublishCategory(addCategoryRequest:AddCategoryRequest): Observable < any > {
    let api = ENV.mainApi + "editCategory/" + addCategoryRequest._id;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addCategoryRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onEditSubCategory(addSubCategoryRequest:AddSubCategoryRequest): Observable < any > {
    let api = ENV.mainApi + "editSubCategory/" + addSubCategoryRequest._id;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addSubCategoryRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onDeleteSubCategory(addSubCategoryRequest:AddSubCategoryRequest): Observable < any > {
     let api = ENV.mainApi + "editSubCategory/" + addSubCategoryRequest._id;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addSubCategoryRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onEnableDisableSubCategory(addSubCategoryRequest:AddSubCategoryRequest): Observable < any > {
     let api = ENV.mainApi + "editSubCategory/" + addSubCategoryRequest._id;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addSubCategoryRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onPublishUnpublishSubCategory(addSubCategoryRequest:AddSubCategoryRequest): Observable < any > {
      let api = ENV.mainApi + "editSubCategory/" + addSubCategoryRequest._id;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage['token']
    });
    let options = new RequestOptions({
        headers: headers
    });
    return this.http.put(api, JSON.stringify(addSubCategoryRequest), options).map(response => {
        console.log("customer Info datais " + response);
        return response.json();
    }).catch(error => {
        return error;
    });
}
onGetSingleSectionData(id):  Observable<any> {
        let api =  ENV.mainApi+"getSingleSection/"+id;
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(api,options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
onGetSingleSCategoryData(id):  Observable<any> {
        let api =  ENV.mainApi+"getSingleCategory/"+id;
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(api,options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

onGetSingleSubCategoryData(id):  Observable<any> {
        let api =  ENV.mainApi+"getSingleSubCategory/"+id;
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(api,options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}