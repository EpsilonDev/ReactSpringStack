package com.epsilondev.backend.service;

import com.epsilondev.backend.entity.Categorie;
import com.epsilondev.backend.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieService {

    @Autowired
    private CategorieRepository categorieRepository;

    public List<Categorie> getCategories() {
        return categorieRepository.findAll();
    }
    public Categorie getCategorieById(int id) {
        return categorieRepository.findById(id).orElse(null);
    }
}
