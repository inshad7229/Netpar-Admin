import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
  	//alert(field)
    array.sort((a: any, b: any) => {
    	console.log(a.order)
    	if (a.order && b.order) {
		     if (a.order < b.order) {
		        return -1;
		      } else if (a.order > b.order) {
		        return 1;
		      } else {
		        return 0;
		      }
    	}else{
    		return 0
    	}
      
    });
    return array;
  }

}
