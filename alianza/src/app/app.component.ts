import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alianza';
  data:any;

  constructor(private dialogRef : MatDialog,
              private http : HttpClient){
  this.http.get('http://localhost:8080/clients').subscribe(data=>{

    this.data = data;

  })
  }

  openDialog(){
    this.dialogRef.open(NewClientComponent);
  }

}
