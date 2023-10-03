import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewClientComponent } from '../clients/new-client/new-client.component';
import { NgModel } from '@angular/forms';
import { ServiceService } from '../Service/service.service';
import { Clients } from '../Models/Clients';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Clients[] = [];

  constructor(private modalService: NgbModal, private serviceService: ServiceService) { }

  openNewClients(){
    const modalRef = this.modalService.open(NewClientComponent);
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.serviceService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  exportToCSV() {
    if (this.clients.length > 0) {
      this.serviceService.exportToCSV(this.clients);
    } else {
      console.error('No data to export to CSV.');
    }
  }
}

