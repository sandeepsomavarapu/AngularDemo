import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderPipe implements PipeTransform {

  transform(name :string,gender:string) : string {
    console.log(name);//name,male/female
    if(gender.toLowerCase()=='male'){
    return "Mr."+name;
}
    else{
        return "Miss."+name; 
    }
 }

}
//ng g p pipename 