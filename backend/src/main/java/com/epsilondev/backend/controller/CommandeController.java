package com.epsilondev.backend.controller;
import com.epsilondev.backend.entity.Commande;
import com.epsilondev.backend.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommandeController {

    @Autowired
    private CommandeService commandeService;

    @CrossOrigin
    @PostMapping("/addCommande")
    public Commande addCommande(@RequestBody Commande commande) {
        return commandeService.saveCommande(commande);
    }

    @CrossOrigin
    @GetMapping("/commandesByClientId/{id}")
    public List<Commande> findAllClientCommandes(@PathVariable int id) {
        return commandeService.getCommandeByClientId(id);
    }

    @CrossOrigin
    @GetMapping("/commande/{id}")
    public  Commande findCommandeById(@PathVariable int id) {
        return commandeService.getCommandeById(id);
    }

    @CrossOrigin
    @DeleteMapping("/deleteCommande/{id}")
    public  String deleteCommande(@PathVariable int id) {
        return commandeService.deleteCommande(id);
    }
}
