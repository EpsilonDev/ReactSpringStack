package com.epsilondev.backend.controller;

import com.epsilondev.backend.entity.Article;
import com.epsilondev.backend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @CrossOrigin
    @PostMapping("/addArticle")
    public Article addArticle(@RequestBody Article article) {
        return articleService.saveArticle(article);
    }

    @CrossOrigin
    @GetMapping("/articles")
    public List<Article> findAllArticles() {
        return articleService.getArticles();
    }

    @CrossOrigin
    @GetMapping("/article/{id}")
    public  Article findArticleById(@PathVariable int id) {
        return articleService.getArticleById(id);
    }

    @CrossOrigin
    @DeleteMapping("/deleteArticle/{id}")
    public  String deleteArticle(@PathVariable int id) {
        return articleService.deleteArticle(id);
    }




}
