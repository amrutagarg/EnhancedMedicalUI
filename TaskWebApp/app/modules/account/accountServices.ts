import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Global } from '../shared/global';

@Injectable()
export class AccountServices {
    constructor(private _http: Http) { }

    login(data: any): Observable<any> {
        let body = JSON.stringify(data);
        let header = new Headers({ 'Content-Type': 'application/json' });
        let option = new RequestOptions({ headers: header });
        return this._http.post(Global.USER_Login, body, option)
            .map((responce: Response) => <any>responce.json())
            .catch(this.handleError)

    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}