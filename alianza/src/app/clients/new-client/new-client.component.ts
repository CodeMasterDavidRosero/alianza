import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { Clients } from 'src/app/Models/Clients';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']

})
export class NewClientComponent implements OnInit {

  client: Clients = new Clients();

  constructor(private serviceService: ServiceService, public modal: NgbActiveModal, private router:Router) {}

  closeModal() {
    this.modal.dismiss();
  }

  createClient(client: Clients) {
    this.serviceService.createClient(client).subscribe(() => {
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success').then(() => {
        // Refrescar la página después de mostrar el mensaje de éxito
        location.reload();
      });
    }, error => {
      Swal.fire('Error', 'something went wrong.', 'error');
    });
  }

  ngOnInit(): void {
    console.log(this.client);
  }
  onSubmit(){
    console.log(this.client)
  }
}
