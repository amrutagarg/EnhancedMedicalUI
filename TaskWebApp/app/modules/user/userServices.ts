import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Global } from '../shared/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    get(): Observable<any> {
        return this._http.get(Global.USER_GET)
            .map((responce: Response) => <any>responce.json())
            .catch(this.handleError)

    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}