import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clients } from '../Models/Clients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = "http://localhost:8080/clients";

  constructor(private httpClient:HttpClient) { }

  getClients():Observable<Clients[]>{
    return this.httpClient.get<Clients[]>(`${this.baseUrl}`);
  }

}
