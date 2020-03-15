package com.epsilondev.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Entity
    @Table(name = "ARTICLE")

public class Article {

        @Id
        private int codeArticle;

        private String Designation;
        private double prix;
        private Stock stock;
        private String photo;
        private String description;

        @JsonIgnore
        @OneToMany(mappedBy = "article")
        private Collection<Commande> commandes;

        @ManyToOne
        @JoinColumn(name = "refCategorie")
        private Categorie categorie;

        public int getCodeArticle() {
            return codeArticle;
        }

        public void setCodeArticle(int codeArticle) {
            this.codeArticle = codeArticle;
        }

        public String getDesignation() {
            return Designation;
        }

        public void setDesignation(String designation) {
            Designation = designation;
        }

        public double getPrix() {
            return prix;
        }

        public void setPrix(double prix) {
            this.prix = prix;
        }


        public Stock getStock() {
            return stock;
        }

        public void setStock(Stock stock) {
            this.stock = stock;
        }

        public String getPhoto() {
            return photo;
        }

        public void setPhoto(String photo) {
            this.photo = photo;
        }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
