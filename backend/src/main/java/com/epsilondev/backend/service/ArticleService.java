package com.epsilondev.backend.service;

import com.epsilondev.backend.entity.Article;
import com.epsilondev.backend.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    public Article saveArticle(Article article) {
        return articleRepository.save(article);
    }
    public List<Article> getArticles() {
        return articleRepository.findAll();
    }
    public Article getArticleById(int id) {
        return articleRepository.findById(id).orElse(null);
    }
    public String deleteArticle(int id) {
        articleRepository.deleteById(id);
        return "L'article " + id + " est supprime !";
    }
}
