package com.alianza.prueba.services;

import com.alianza.prueba.models.ClientsModel;
import com.alianza.prueba.repositories.ClientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ClientsService {
    @Autowired
    ClientsRepository clientsRepository;

    public ArrayList<ClientsModel> showList(){
        return (ArrayList<ClientsModel>) clientsRepository.findAll();
    }

    public ClientsModel SaveClients(ClientsModel clints){
        return clientsRepository.save(clints);
    }

    public Optional<ClientsModel> findById(Integer id){
        return clientsRepository.findById(id);
    }

    public ArrayList<ClientsModel> findBySkey(String skey){
        return clientsRepository.findBySkey(skey);
    }

    public boolean deleteClient (Integer id){
        try {
            clientsRepository.deleteById(id);
            return true;
        }catch (Exception err){
            return false;
        }
    }

}