package com.epsilondev.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Entity
    @Table(name = "COMMANDE")

public class Commande {

        @Id
        @GeneratedValue
        private int numCommande;

        private Date dateCommande;
        private int qteCde;

        @ManyToOne
        @JoinColumn(name = "codeArticle")
        private Article article;

        @ManyToOne
        @JoinColumn(name = "idClient")
        private Client client;

        public int getNumCommande() {
            return numCommande;
        }

        public void setNumCommande(int numCommande) {
            this.numCommande = numCommande;
        }


    public Date getDateCommande() {
        return dateCommande;
    }

    public void setDateCommande(Date dateCommande) {
        this.dateCommande = dateCommande;
    }

    public int getQteCde() {
        return qteCde;
    }

    public void setQteCde(int qteCde) {
        this.qteCde = qteCde;
    }
}
