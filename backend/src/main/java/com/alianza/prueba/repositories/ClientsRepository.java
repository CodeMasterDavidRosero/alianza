package com.alianza.prueba.repositories;

import com.alianza.prueba.models.ClientsModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ClientsRepository extends CrudRepository<ClientsModel, Integer> {
      ArrayList<ClientsModel> findBySkey(String skey);
}
