import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseEntry4Component } from './expense-entry4/expense-entry4.component';
import { HttpClientModule } from '@angular/common/http';
import { CraeteFormComponent } from './craete-form/craete-form.component';
import { FormComponent } from './form/form.component';
import { EditFormComponent } from './edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseEntry4Component,
    FormComponent,
    CraeteFormComponent,
    EditFormComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
