import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewClientComponent } from './clients/new-client/new-client.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alianza';

  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(NewClientComponent);
  }

}
