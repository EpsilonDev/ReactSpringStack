package com.epsilondev.backend.service;

import com.epsilondev.backend.entity.Client;
import com.epsilondev.backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;


    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }
    public List<Client> getClients() {
        return clientRepository.findAll();
    }
    public Client getClientById(int id) {
        return clientRepository.findById(id).orElse(null);
    }
    public String deleteArticle(int id) {
        clientRepository.deleteById(id);
        return "Le client " + id + " est supprime !";
    }
    public Client getClientByEmail(String email) {
        return clientRepository.findByEmail(email);
    }
}
