import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clients } from '../Models/Clients';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Papa from 'papaparse';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = "http://localhost:8080/clients";

  constructor(private httpClient:HttpClient) { }

  getClients():Observable<Clients[]>{
    return this.httpClient.get<Clients[]>(this.baseUrl);
  }

  createClient(client: Clients){
    return this.httpClient.post<Clients>(this.baseUrl+'/create', client, { responseType: 'json'});
  }

  deleteClient(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl+'/'+id);
  }

  exportToCSV(clients: Clients[]): void {
    const csvData = Papa.unparse(clients);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'clients.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

}
