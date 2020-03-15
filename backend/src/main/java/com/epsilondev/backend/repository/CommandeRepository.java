package com.epsilondev.backend.repository;

import com.epsilondev.backend.entity.Client;
import com.epsilondev.backend.entity.Commande;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommandeRepository extends JpaRepository<Commande, Integer> {
    List<Commande> findByClientIdClient(int id);
}
