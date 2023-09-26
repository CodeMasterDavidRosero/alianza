import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/Models/Clients';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  client: Clients[]

  constructor(private clientsService:ServiceService) { }

  ngOnInit(): void {
    this.showClients();
  }

  private showClients(){
    this.clientsService.getClients().subscribe(dato => {
      this.client = dato;
    })
  }

}
