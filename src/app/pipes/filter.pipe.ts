import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userList: any[], filterString: String, PropName:any): any[] {
    const result:any=[]
    if(!userList || filterString=='' || PropName==''){
      return userList
    }

    userList.forEach((users:any)=>{
      if(users[PropName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(users)
        
      }
      
    })

    return result;
  }

}
