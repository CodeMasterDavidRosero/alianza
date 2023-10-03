package com.alianza.prueba.controllers;

import com.alianza.prueba.models.ClientsModel;
import com.alianza.prueba.services.ClientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientsController {
    @Autowired
    ClientsService clientsService;

    @GetMapping()
    public ArrayList<ClientsModel> showList(){
        return clientsService.showList();
    }
    @PostMapping("/create")
    public ClientsModel saveClints(@RequestBody ClientsModel clients){
        return this.clientsService.SaveClients(clients);
    }
    @GetMapping(path = "/{id}")
    public Optional<ClientsModel> findById(@PathVariable("id") Integer id){
        return this.clientsService.findById(id);
    }
    @GetMapping(path = "query")
    public ArrayList<ClientsModel> findBySkey(@RequestParam("skey") String skey){
        return this.clientsService.findBySkey(skey);
    }
    @DeleteMapping(path = "/{id}")
    public String deleteByPath(@PathVariable("id") Integer id){
        boolean ok= this.clientsService.deleteClient(id);
        if(ok){
            return "Client delete by id:"+id;
        }else {
            return "Client not delete by id:"+id;
        }
    }

}
