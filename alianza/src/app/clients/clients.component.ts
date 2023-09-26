import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewClientComponent } from '../clients/new-client/new-client.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }


  openNewClients(){
    const modalRef = this.modalService.open(NewClientComponent);
  }

  ngOnInit(): void {
  }

}
