package com.epsilondev.backend.service;
import com.epsilondev.backend.entity.Commande;
import com.epsilondev.backend.repository.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandeService {

    @Autowired
    private CommandeRepository commandeRepository;

    public Commande saveCommande(Commande commande) {
        return commandeRepository.save(commande);
    }
    public List<Commande> getCommandeByClientId(int id) {
        return commandeRepository.findByClientIdClient(id);
    }
    public Commande getCommandeById(int id) {
        return commandeRepository.findById(id).orElse(null);
    }
    public String deleteCommande(int id) {
        commandeRepository.deleteById(id);
        return "La commande " + id + " est supprime !";
    }

}
