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
    @Table(name = "CATEGORIE")

public class Categorie {

        @Id
        @GeneratedValue
        private int refCategorie;

        private String nomCategorie;

        @JsonIgnore
        @OneToMany(mappedBy = "categorie")
        private Collection<Article> articles;

        public int getRefCategorie() {
            return refCategorie;
        }

        public void setRefCategorie(int refCategorie) {
            this.refCategorie = refCategorie;
        }

        public String getNomCategorie() {
            return nomCategorie;
        }

        public void setNomCategorie(String nomCategorie) {
            this.nomCategorie = nomCategorie;
        }
    }
