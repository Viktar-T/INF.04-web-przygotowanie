# Nazwa kwalifikacji: Projektowanie, programowanie i testowanie aplikacji

**Oznaczenie kwalifikacji:** INF.04  
**Numer zadania:** 01  
**Kod arkusza:** INF.04-01-25.01-SG  
**Wersja arkusza:** SG  

Lp. Elementy podlegające ocenie/kryteria oceny


## R.3 Rezultat 3: Aplikacja webowa

Uwaga: Kryteria 3.1 ÷ 3.7 sprawdzić w kodzie źródłowym, sprawdzane elementy muszą być zapisane zgodnie ze składnią.  
Gdy aplikacja nie uruchamia się, a są zapisane zrzuty ekranu z uruchomienia aplikacji, należy sprawdzić powód braku kompilacji. Jeśli występują błędy w plikach źródłowych zdającego, kryteria 3.8 ÷ 3.15 nie są spełnione. Jeżeli błędy występują w innych plikach lub bibliotekach, sprawdzić w kodzie oraz na zrzutach ekranu.  
Cały rezultat nie jest spełniony, gdy zdający zapisał kod bez użycia Angular lub React, stosował metody DOM w tym `getElementById` i inne podobne, przypisywał bezpośrednio metody do zdarzeń np. `onclick="fun()"` zamiast `(click)="fun()"` czy `onClick={fun}`.

| Kryterium | Ilość punktów za kryterium | Punkty które otrzymał uczeń |
|-----------|---------------------------|----------------------------|
| **R.3.1** Zapisany w aplikacji jeden komponent, który zawiera nagłówek drugiego stopnia `h2` o treści "Lista produktów", pole wyszukiwania z etykietą "Szukaj:" i przyciskiem "Wyczyść", przyciski sortowania "Sortuj po nazwie" i "Sortuj po cenie", wskaźnik liczby wyników oraz tabelę produktów z kolumnami: Nazwa i Cena. | 8 | |
| **R.3.2** Do projektu dołączona biblioteka Bootstrap oraz zastosowane style Bootstrap do formatowania elementów interfejsu zgodnie z obrazami referencyjnymi. Tabela produktów wykorzystuje klasy Bootstrap (np. `table`, `table-striped`, `thead-dark`). | 6 | |
| **R.3.3** Przyciski mają przypisane odpowiednie klasy Bootstrap (np. `btn btn-primary`, `btn btn-outline-secondary`). Pole wyszukiwania wykorzystuje klasy Bootstrap (np. `form-control`, `form-group`). W React.js zastosowane `className` zamiast `class` oraz domknięte wszystkie znaczniki. | 6 | |
| **R.3.4** W komponencie zdefiniowana tablica obiektów produktów zawierająca 15 elementów. Każdy produkt ma pola: `id`, `name`, `price`. Tablica może być zdefiniowana jako pole komponentu (w Angular jako pole klasy, w React jako stan lub zmienna). | 5 | |
| **R.3.5** Do wyświetlania produktów w tabeli zastosowana pętla działająca na elementach tablicy produktów (np. `*ngFor` w Angular lub `.map()` w React). Pętla generuje wiersze tabeli z odwołaniem do pól obiektu produktu (`produkt.name`, `produkt.price`). | 7 | |
| **R.3.6** Zapisane zdarzenie wprowadzania tekstu w pole wyszukiwania i obsłużone w kodzie, które normalizuje wpisany tekst (usuwa nadmiarowe spacje, ignoruje wielkość liter) i filtruje listę produktów na podstawie wprowadzonego tekstu (wyszukiwanie bez uwzględniania wielkości liter w polu `name`). | 10 | |
| **R.3.7** Zapisane zdarzenia kliknięcia przycisków sortowania i obsłużone w kodzie (sortowanie po nazwie i po cenie, rosnąco, bez uwzględniania wielkości liter dla nazwy). | 10 | |
| **R.3.8** Aplikacja jest interpretowana bez błędów. W stanie początkowym pole wyszukiwania jest puste, wyświetlane są wszystkie produkty posortowane po nazwie rosnąco, wskaźnik liczby wyników pokazuje pełną liczbę produktów (np. "Liczba produktów: 15"), co jest udokumentowane zrzutem ekranu. W konsoli przeglądarki wyświetlany jest komunikat `Wyniki: 15` (lub odpowiednia liczba). | 6 | |
| **R.3.9** Po wprowadzeniu tekstu w pole wyszukiwania lista produktów jest filtrowana (wyszukiwanie bez uwzględniania wielkości liter w polu `name`), lista jest sortowana według aktualnie wybranego kryterium, wskaźnik liczby wyników jest aktualizowany, w konsoli przeglądarki wyświetlany jest komunikat `Wyniki: N` (gdzie N to liczba produktów widocznych na liście po filtrowaniu) - sprawdzić w uruchomionej aplikacji lub na zrzucie oraz obowiązkowo w kodzie. | 12 | |
| **R.3.10** Po kliknięciu przycisku "Sortuj po nazwie" lista produktów jest sortowana po nazwie (rosnąco, bez uwzględniania wielkości liter), w konsoli przeglądarki wyświetlany jest komunikat `"Sortowanie: po nazwie"`, lista produktów jest aktualizowana - sprawdzić w uruchomionej aplikacji lub na zrzucie oraz obowiązkowo w kodzie. | 6 | |
| **R.3.11** Po kliknięciu przycisku "Sortuj po cenie" lista produktów jest sortowana po cenie (rosnąco), w konsoli przeglądarki wyświetlany jest komunikat `"Sortowanie: po cenie"`, lista produktów jest aktualizowana - sprawdzić w uruchomionej aplikacji lub na zrzucie oraz obowiązkowo w kodzie. | 6 | |
| **R.3.12** Po kliknięciu przycisku "Wyczyść" pole wyszukiwania jest czyszczone, wyświetlane są wszystkie produkty, wskaźnik liczby wyników pokazuje pełną liczbę produktów, w konsoli przeglądarki wyświetlany jest komunikat `Wyniki: N` z pełną liczbą produktów - sprawdzić w uruchomionej aplikacji lub na zrzucie oraz obowiązkowo w kodzie. | 6 | |
| **R.3.13** Jeżeli po filtrowaniu nie znaleziono żadnych produktów, komponent wyświetla w interfejsie czytelny komunikat o braku wyników (np. nagłówek "Brak wyników" i krótki opis: "Nie znaleziono produktów pasujących do frazy "......"") zgodnie z obrazem 3 - sprawdzić w uruchomionej aplikacji lub na zrzucie oraz obowiązkowo w kodzie. | 5 | |
| **R.3.14** Lista produktów jest najpierw filtrowana, a dopiero potem sortowana według aktualnie wybranego kryterium - sprawdzić w kodzie źródłowym oraz w działaniu aplikacji. | 5 | |
| **R.3.15** Aplikacja jest zapisana czytelnie, z zachowaniem zasad czystego formatowania kodu, stosowane są znaczące nazwy zmiennych i funkcji - sprawdzić w kodzie źródłowym. | 2 | |
| **SUMMA** | **100** | |
| **OCENA** | | |
