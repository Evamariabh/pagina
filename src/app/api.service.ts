import {Injectable, Output, EventEmitter} from'@angular/core';
import { map } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    baseUrl:string="http://localhost/phpmyadmin/index.php?route=/database/structure&db=angularcrud";
   
    constructor(private httpClient : HttpClient){}
    
    
    public userregistration(f_name:any, l_name:any, email:any, password:any, mobile:any)
        {
            return this.httpClient.post<any>(this.baseUrl + '/register.php',
            {
                f_name,l_name,email,password,mobile}

            )
            .pipe(map(Users=>{
                return Users;
            }));
        }
}