package com.epsilondev.backend.controller;

import com.epsilondev.backend.entity.Client;
import com.epsilondev.backend.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {

    @Autowired
    private ClientService clientService;

    @CrossOrigin
    @PostMapping("/addClient")
    public Client addClient(@RequestBody Client client) {
        return clientService.saveClient(client);
    }

    @CrossOrigin
    @GetMapping("/clients")
    public List<Client> findAllArticles() {
        return clientService.getClients();
    }

    @CrossOrigin
    @GetMapping("/clientById/{id}")
    public Client findClientById(@PathVariable int id) {
        return clientService.getClientById(id);
    }

    @CrossOrigin
    @GetMapping("/clientByEmail/{email}")
    public Client findClientByEmail(@PathVariable String email) {
        return clientService.getClientByEmail(email);
    }
}
