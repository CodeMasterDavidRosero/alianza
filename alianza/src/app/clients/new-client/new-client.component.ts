import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Clients } from 'src/app/Models/Clients';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  client: Clients = new Clients();
  constructor(public modal: NgbActiveModal) { }

  closeModal() {
    this.modal.dismiss();
  }

  ngOnInit(): void {
    console.log(this.client);
  }

}
