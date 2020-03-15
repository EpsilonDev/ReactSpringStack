package com.epsilondev.backend.controller;

import com.epsilondev.backend.entity.Categorie;
import com.epsilondev.backend.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategorieController {

    @Autowired
    private CategorieService categorieService;

    @CrossOrigin
    @GetMapping("/categories")
    public List<Categorie> findAllArticles() {
        return categorieService.getCategories();
    }

    @CrossOrigin
    @GetMapping("/categorieById/{id}")
    public  Categorie findArticleById(@PathVariable int id) {
        return categorieService.getCategorieById(id);
    }

}
