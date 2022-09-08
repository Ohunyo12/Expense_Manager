import { Injectable } from '@angular/core'; 
import { MyFirstInterface } from './model/my-first-interface';
import { Observable, throwError } from 'rxjs'; 
import { catchError, retry } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseEntryService { 
  private expenseRestUrl = 'http://localhost:8000/api/expense'; 
  private httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' }) }; 
  
  constructor(private httpClient : HttpClient) { } 
  getExpenseEntries() : Observable<MyFirstInterface[]> {
     return this.httpClient.get<MyFirstInterface[]>(this.expenseRestUrl, this.httpOptions) .pipe( retry(3), catchError(this.httpErrorHandler) ); 
    } 
     
  getExpenseEntry(id: number) : Observable<MyFirstInterface> { 
      return this.httpClient.get<MyFirstInterface>(this.expenseRestUrl + "/" + id, this.httpOptions) .pipe( retry(3), catchError(this.httpErrorHandler) ); 
    } 

  editExpenseEntry(number:any,object:any) : Observable<MyFirstInterface> { 
      return this.httpClient.put<MyFirstInterface>(this.expenseRestUrl + "/" + number, object) .pipe( retry(3), catchError(this.httpErrorHandler) ); 
    } 
  createExpenseEntry(object:any){ 
      return this.httpClient.post(this.expenseRestUrl , object) .pipe( retry(3), catchError(this.httpErrorHandler) ); 
    } 
    deleteExpenseEntry(id: number) : Observable<any> { 
      return this.httpClient.delete<MyFirstInterface>(this.expenseRestUrl + "/" + id, this.httpOptions) .pipe( retry(3), catchError(this.httpErrorHandler) ); 
    }
  private httpErrorHandler (error: HttpErrorResponse) { 
      if (error.error instanceof ErrorEvent) { 
        console.error("A client side error occurs. The error message is " + error.message); 
      } else { 
        console.error( "An error happened in server. The HTTP status code is " + error.status + " and the error returned is " + error.message); 
      } 
      return throwError("Error occurred. Pleas try again"); 
    } 
  }
