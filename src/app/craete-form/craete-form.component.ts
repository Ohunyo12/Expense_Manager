import { Component, OnInit } from '@angular/core';
import { MyFirstInterface } from '../model/my-first-interface';
import { ExpenseEntryService } from '../expense-entry.service';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';


@Component({
  selector: 'app-craete-form',
  templateUrl: './craete-form.component.html',
  styleUrls: ['./craete-form.component.scss']
})
export class CraeteFormComponent implements OnInit {
  title !: string; 
  expenseEntry$ !: Observable<MyFirstInterface>; 
  //expenseEntry: MyFirstInterface = {} as MyFirstInterface; 
  expenseEntry: MyFirstInterface={
    id: 0, 
    item: '', 
    amount: 0, 
    category: '', 
    location:'' ,
    spendOn: new Date, 
    createdOn:  new Date()
  }
  
  expenseEntries!: MyFirstInterface[];

  //formdata!: any;
  
  constructor(private restService : ExpenseEntryService, private router : Router) { } 
  
  getData(): any {
    return this.restService.getExpenseEntries().subscribe((response) => { this.expenseEntries = response });
  };
  ngOnInit() { 
    this.title = "Expense Entry"; 
    
      // this.formdata = new FormGroup({ 
      //   userName1: new FormControl(this.expenseEntry.item),
      //   userName2: new FormControl(this.expenseEntry.amount)
      // });

    } 

      goToList() { 
        this.router.navigate(['/expenses']); 
      }
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
}

