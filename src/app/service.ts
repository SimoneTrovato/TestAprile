
import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export class service {

    baseURL: string = "https://gorest.co.in/public/v2/users";

    constructor(private http: HttpClient) {
    }
    auth_token: string = "3afda37c878311078125552a03243f0cdb08d63139cf794f22cf619f662cff3b";

    getRepos(id: any): Observable<any> {

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.auth_token}`
        })

        return this.http.get(this.baseURL + "/" + id, { headers })
    }

    setRepos(person: any): Observable<any> {
        //    console.log(person.form.value +"EEEEEEEEELLLALALALA")
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.auth_token}`,

        })
        const body = JSON.stringify(person);
        console.log(body);
        console.log(this.baseURL)

        return this.http.post(this.baseURL, body, { headers })

    }

}