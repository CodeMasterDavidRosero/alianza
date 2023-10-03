import { Component, OnInit} from '@angular/core';
import { error } from 'jquery';
import { Clients } from 'src/app/Models/Clients';
import { ClientsComponent } from '../clients.component';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  [x: string]: any;
  clients: Clients[] = [];
  searchText: string = ''; // Propiedad para almacenar el valor de búsqueda

  constructor(private serviceService: ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getClients();
  }

  // Función para filtrar la lista de clientes
  filterClients() {
    if (this.searchText) {
      this.clients = this.clients.filter(client =>
        client.skey.toLowerCase().includes(this.searchText.toLowerCase()) ||
        client.business_id.toLowerCase().includes(this.searchText.toLowerCase()) ||
        client.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        client.phone.toLowerCase().includes(this.searchText.toLowerCase()) ||
        client.start_date.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      // Si el campo de búsqueda está vacío, muestra todos los clientes nuevamente
      this.serviceService.getClients().subscribe(data => {
        this.clients = data;
      });
    }
  }

  getClients() {
    this.serviceService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  deleteClient(id: number) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'red',
      confirmButtonText: 'yes, Deleted',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceService.deleteClient(id).subscribe(response => {
          this.clients = this.clients.filter(clients => clients.id !== id);
          Swal.fire('¡Deleted!', 'the client has been deleted eliminado.', 'success');
          // Redirigir a la página de "clients" después de la eliminación exitosa
      })
        } else if (result.dismiss === Swal.DismissReason.cancel){
          Swal.fire(
            'Cancelled',
            'the client data is safe :)',
            'error'
          );
        }window.location.reload();
    }
 )}

}

