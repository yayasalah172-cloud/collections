/**
 * ==========================================================================
 * SYSTÈME LOGIQUE DE LA BOUTIQUE E-COMMERCE YEYAH
 * Horodatage de déploiement : Juin 2026
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    console.log("🚀 Système YEYAH activé avec succès. Prêt pour les ventes !");

    // ==========================================================================
    // 1. GESTION DES COMMANDES WHATSAPP AUTOMATIQUES
    // ==========================================================================
    
    // Sélection de tous les boutons de commande du site
    const boutonsCommande = document.querySelectorAll(".btn-commander");
    
    // CONFIGURATION : Remplace par ton vrai numéro WhatsApp (sans le + ni d'espaces)
    // Exemple pour le Sénégal : "221788586605"
    const numeroWhatsApp = "221788586605"; 

    // Écoute des clics sur chaque bouton de commande
    boutonsCommande.forEach(bouton => {
        bouton.addEventListener("click", () => {
            
            // Récupération des informations du maillot cliqué
            const nomProduit = bouton.getAttribute("data-nom");
            const prixProduit = bouton.getAttribute("data-prix");

            // Vérification de sécurité pour s'assurer que les données existent
            if (!nomProduit || !prixProduit) {
                console.error("❌ Erreur : Attributs data-nom ou data-prix manquants sur ce bouton.");
                return;
            }

            // Construction du message personnalisé et professionnel pour WhatsApp
            const message = `Bonjour YEYAH,\n\nJe viens de visiter votre site web et je souhaite commander l'article suivant :\n\n🛒 *Article :* ${nomProduit}\n💰 *Prix :* ${prixProduit}\n\nEst-il toujours disponible pour une livraison ? Merci !`;
            
            // Encodage propre du texte pour qu'il soit compatible avec une URL web
            const messageEncode = encodeURIComponent(message);

            // Génération du lien final d'API WhatsApp
            const lienFinal = `https://wa.me/${numeroWhatsApp}?text=${messageEncode}`;

            // Ouverture de la discussion WhatsApp dans un nouvel onglet sécurisé
            window.open(lienFinal, "_blank");
        });
    });


    // ==========================================================================
    // 2. FILTRE DYNAMIQUE DU CATALOGUE (PAGE HABIT.HTML)
    // ==========================================================================
    
    // Sélection des boutons de filtres et des cartes de maillots
    const boutonsFiltre = document.querySelectorAll(".btn-filtre");
    const cartesMaillots = document.querySelectorAll(".maillot-card");

    // Gestion du système de filtrage si les éléments sont présents sur la page
    if (boutonsFiltre.length > 0 && cartesMaillots.length > 0) {
        
        boutonsFiltre.forEach(bouton => {
            bouton.addEventListener("click", () => {
                
                // Récupération de la catégorie du bouton cliqué (all, clubs, ou national)
                const cibleCategorie = bouton.getAttribute("data-categorie");

                // Style visuel : On peut optionnellement ajouter une classe active ici
                console.log(`🔍 Filtrage en cours pour la catégorie : ${cibleCategorie}`);

                // Parcours de tous les maillots pour masquer ou afficher
                cartesMaillots.forEach(maillot => {
                    const categorieMaillot = maillot.getAttribute("data-cat");

                    // Logique d'affichage : si "all" ou si la catégorie correspond exactement
                    if (cibleCategorie === "all" || categorieMaillot === cibleCategorie) {
                        // Réaffichage fluide
                        maillot.style.display = "block";
                        maillot.style.opacity = "1";
                    } else {
                        // Masquage propre
                        maillot.style.display = "none";
                    }
                });
            });
        });
    }


    // ==========================================================================
    // 3. BOUTON INTERACTIF RETOUR EN HAUT (SCROLL FLUIDE)
    // ==========================================================================
    
    // Récupération du bouton flèche de retour en haut
    const boutonScrollTop = document.getElementById("scrollBtn");

    if (boutonScrollTop) {
        
        // Surveillance du défilement de la page par l'utilisateur
        window.addEventListener("scroll", () => {
            
            // Si l'utilisateur descend plus bas que 400 pixels, on affiche le bouton
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                boutonScrollTop.style.display = "block";
            } else {
                // Sinon on le cache discrètement
                boutonScrollTop.style.display = "none";
            }
        });

        // Action de retour au sommet lors du clic sur le bouton
        boutonScrollTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Remontée fluide sans saccade
            });
        });
    }

});
