import { Component, OnInit } from '@angular/core';
import { MyFirstInterface } from '../model/my-first-interface';
import { ExpenseEntryService } from '../expense-entry.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  title !: string; 
  expenseEntry$ !: Observable<MyFirstInterface>; 
  expenseEntry!: MyFirstInterface;
  expenseEntries!: MyFirstInterface[];
  selectedId !: number; 
  
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
}

