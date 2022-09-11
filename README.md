# Seedbox-CodeChallenge

## Szenario
Die Baubranche hat in letzter Zeit mit Engpässen bei Baustoffen zu kämpfen. Durch die Knappheit werden
Bauprojekte verzögert und aufgrund der damit verbundenen Preisschwankungen schwer zu kalkulieren. Baustoffe
wie Holz oder Sand werden häufig über weite Strecken aus dem Ausland eingekauft.
Gleichzeitig passiert es, dass lokale Bauunternehmen, Baustoffe, ungenutzt einlagern, von denen sie mehr
eingekauft haben, als sie aktuell benötigen. Gründe dafür könnten z.B. Fehlkalkulation sein, oder der Gedanke,
beim Einkauf Skaleneffekte zu nutzen.
Wir haben also drei Parteien:
- Unternehmen, die auf einem knappen Markt dringend nach Baustoffen suchen
- Unternehmen, die Baustoffe ungenutzt einlagern
- Wir, die wir die Probleme dieser Unternehmen lösen möchten und dabei ein profitables Geschäftsmodell
generieren möchten.

Meine Idee ist, eine Lösung zu entwickeln, die wie Amazon Baustoffe für seine Kunden anbietet.
## Es gibt drei Parteien: 
-	die Plattform Buildzon - den Anbieter, 
-	die Produzenten/Lieferanten, 
-	die Käufer/Konsumenten


## Die Applikation besteht aus:
-	Hauptseite, die öffentliche Inhalte und eine Navigationsleiste anzeigt. Der Nutzer hat die Möglichkeit, sich als neuer Nutzer zu registrieren und später einzuloggen. Meine Lösung bietet (noch) keine Registrierungsmöglichkeit, da die Benutzer simuliert werden. 
-	Lieferanten haben die Möglichkeit, ihre eigenen Produkte einzusehen. Das Lieferanten-Board ermöglicht es dem Benutzer, seine eigenen Produkte zu filtern,  zu sortieren und ein neues Produkt erstellen. Die Google-Kartenoption, die die Verteilung von Produkten auf der Karte anzeigt, dient nur zu Visualisierung und ist nicht fertig implementiert. 
-	Kunden haben eine Kundenboard-Option, mit der sie alle verfügbaren Produkte anzeigen können. Produkte können gefiltert und sortiert werden Die Option zum Warenkorb hinzufügen ist nicht implementiert, wird aber auf dem Lieferanten-Board angeboten.


## Die Seite für Lieferanten und Käufer zeigt folgende Informationen zum Produkt:
-	Name
-	Name der Firma
-	Ort
-	Entfernung
-	Maßeinheit 
-	Stückpreis 
-	Menge auf Lager


## Technologie:
## Für die Implementierung der Feature habe ich folgende Komponenten realisiert:

-	Table grid component mit Technologie Kendo Grid
-	Form component mit Technologie Yup und Vee-validate
-	CSS template mit Bootstrap
-	Client side routing mit Vue-router
-	Api services mit axios
-	State managment mit Vuex


## Um die Applikation zu testen sind folgende Schritte notwendig:

##	ecommerce-app: 
  -	Project setup - npm install
  -	Compiles and hot-reloads for development - npm run serve
  -	Compiles and minifies for production - npm run build
  -	Lints and fixes files- npm run lint


##	api:
  -	Project setup - npm install
  -	Start API - npm start

##Zugangsdaten sind beispielsweise:

##	Login als die Käufer/Konsumenten: 
  -	Username: tsmith
  -	Password: test


##	Login als die Produzenten/Lieferanten: 
  -	Username: americainc
  -	Password: test

