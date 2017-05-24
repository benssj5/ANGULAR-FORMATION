// 13.1.1 imports de Pipe et PipeTransform
import { Pipe, PipeTransform } from '@angular/core';

//  13.1.2 declarer @Pipe
@Pipe({
    name:'itemFilter',
    pure: false
})

export class ItemPipe implements PipeTransform {
    // 13.1.3 utilisation methode transform
      transform(value: any, ...args: any[]): any{
          //console.log(value);
          let filtre = args[0].toLowerCase();
        //   13.1.4 return tableau à partir de notre collection filtree
          return filtre ? value.filter(item => item.name.toLowerCase()
                               .indexOf(filtre) != -1) : value; 

      }
}
