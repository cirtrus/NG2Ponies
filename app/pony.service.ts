import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Pony}           from './pony';
import {Observable}     from 'rxjs/Observable';
@Injectable()
export class PonyService
{
  private ponyUrl="/pony.json";

   constructor(private http:Http)
   {

   }
  getPonies()
  {
    return this.http.get(this.ponyUrl)
                    .map(res =><Pony[]>res.json())
                    .catch(this.handleError);
  }
  handleError(error:Response)
  {
    console.log(404);
    return Observable.throw(error.json().error || "404 Error");
  }

}
