
import { Component, OnInit } from '@angular/core';
import { MyFirstInterface } from '../model/my-first-interface';
//import { DebugService } from '../debug.service'; 
import { ExpenseEntryService } from '../expense-entry.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-expense-entry4',
  templateUrl: './expense-entry4.component.html',
  styleUrls: ['./expense-entry4.component.scss']
})
export class ExpenseEntry4Component implements OnInit {
  expenseEntry!: MyFirstInterface;
  expenseEntry$ !:any;
  selectedId !: number;
  getExpenseEntries(): MyFirstInterface[] {
    let mockExpenseEntries: MyFirstInterface[] = []
        return mockExpenseEntries;
  }
  constructor(//private debugService: DebugService, 
  private restService : ExpenseEntryService, private router: Router, private route : ActivatedRoute) {}

  expenseEntries!: MyFirstInterface[];
  title!: string;

  ngOnInit(): void {
    this.title = "Expense Entry List"; 
    this.getExpenseItems();
    this.expenseEntry$ = this.route.paramMap.pipe( switchMap(params => 
      { 
        this.selectedId = Number(params.get('id')); 
      return this.restService.getExpenseEntry(this.selectedId); 
    })); 
    
      this.expenseEntry$.subscribe( (data:any) => {this.expenseEntry = data, this.deletePost()} ); 
  }

   getExpenseItems() { 
    this.restService.getExpenseEntries() .subscribe( data => this.expenseEntries = data ); };

    add(){
      this.router.navigate(['/createForm']); 
    };

    deletePost() {
      if (this.expenseEntry) {
        this.restService.deleteExpenseEntry(this.selectedId).subscribe(res => {
          console.log(res)
        })
        this.router.navigate(['/expenses']); 
        this.getExpenseItems();
      }
     
    };
}


