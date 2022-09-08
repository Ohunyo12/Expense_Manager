import { Component, OnInit } from '@angular/core';
import { MyFirstInterface } from '../model/my-first-interface';
import { ExpenseEntryService } from '../expense-entry.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router'; 
//import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title !: string; 
  expenseEntry$ !: Observable<MyFirstInterface>; 
  //expenseEntry: MyFirstInterface = {} as MyFirstInterface; 
  expenseEntry!: MyFirstInterface;
  expenseEntries!: MyFirstInterface[];

  selectedId !: number; 
  //formdata!: any;
  
  constructor(private restService : ExpenseEntryService, private router : Router, private route : ActivatedRoute ) { } 
  
  getData(): any {
    return this.restService.getExpenseEntries().subscribe((response) => { this.expenseEntries = response });
  };
  ngOnInit() { 
    this.title = "Expense Entry"; 

  
    
    this.expenseEntry$ = this.route.paramMap.pipe( switchMap(params => 
      { 
        this.selectedId = Number(params.get('id')); 
      return this.restService.getExpenseEntry(this.selectedId); 
    })); 
    
      this.expenseEntry$.subscribe( (data) => this.expenseEntry = data ); 
    
      // this.formdata = new FormGroup({ 
      //   userName1: new FormControl(this.expenseEntry.item),
      //   userName2: new FormControl(this.expenseEntry.amount)
      // });

    } 

      goToList() { 
        this.router.navigate(['/expenses']); 
      }
      editPost() {
        if (this.expenseEntry) {
          this.restService.editExpenseEntry(this.expenseEntry.id,this.expenseEntry).subscribe(res => {
            console.log(res)
          })
          this.getData();
          this.goToList();
        }
       
      };

      createPost() {
        console.log(this.expenseEntry)
        if (this.expenseEntry) {
          this.restService.createExpenseEntry(this.expenseEntry).subscribe(res => {
            console.log(res)
          })
          this.getData();
          this.goToList();
        }
       
      };
      deletePost() {
        if (this.expenseEntry) {
          this.restService.deleteExpenseEntry(this.expenseEntry.id).subscribe(res => {
            console.log(res)
          })
          this.getData();
        }
       
      };
}
