import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntry4Component } from './expense-entry4/expense-entry4.component';
import { FormComponent } from './form/form.component';
import { CraeteFormComponent } from './craete-form/craete-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [ 
  { 
    path: 'expenses', 
    component: ExpenseEntry4Component
  }, 
  { 
    path: 'delete/:id', 
    component: ExpenseEntry4Component
  }, 
  { 
    path: 'Editform/:id', 
    component: EditFormComponent
  }, 
  { 
    path: 'createForm', 
    component: CraeteFormComponent
  },
  { 
    path: 'form/detail/:id', 
    component: FormComponent
  },
  { 
    path: 'expenses/detail/:id', 
    component: ExpenseEntryComponent 
  }, 
  { 
    path: '', redirectTo: 'expenses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
