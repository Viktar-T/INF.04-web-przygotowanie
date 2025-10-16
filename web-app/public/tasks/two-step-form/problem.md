# EGZAMIN ZAWODOWY — INF.04 (INF.04-TWO-STEP-FORM)

## Informacje ogólne

- **Czas trwania sprawdzinu:** 45 minut

---

## Część II. Aplikacja Web

Wykonaj aplikację internetową typu front-end obsługującą dwuetapowy formularz (wizard) z walidacją kroków z zastosowaniem dostępnego na stanowisku egzaminacyjnym frameworka Angular lub biblioteki React. Zastosuj bibliotekę Bootstrap do zdefiniowania stylu aplikacji.

---

### Aplikacja referencyjna

Proszę zbadać Aplikację referencyjną która zbudowana na podstawie tego zadania. Jeśli jakaś część zadania nie jest zrozumiała proszę zbadać aplikację referencyjną. Przy sprawdzaniu zadania nauczyciel sprawdza czy zbudowana przez ucznia aplikacja działa jak aplikacja referencyjna.

---

### Założenia aplikacji

- Aplikacja składa się z jednego komponentu.
- Danymi komponentu są: dane osobowe (krok 1), preferencje (krok 2), aktualny krok, stan walidacji. Dla uproszczenia dane mogą być zdefiniowane jako stan komponentu. Należy założyć, że struktura danych w przyszłości może się zmienić, co będzie miało wpływ na zachowanie i wygląd aplikacji.
- Komponent wyświetla:
  - Nagłówek drugiego stopnia o treści: „Dwuetapowy formularz"
  - Wskaźnik postępu pokazujący aktualny krok (1/2)
  - Formularz kroku 1: dane osobowe (imię, nazwisko, email)
  - Formularz kroku 2: preferencje (ulubiony kolor, poziom doświadczenia)
  - Przyciski nawigacji: „Dalej", „Wstecz", „Zakończ"
  - Panel podsumowania po ukończeniu formularza
- Aplikacja w stanie początkowym wyświetla krok 1 z pustymi polami
- Elementy interfejsu są formatowane zgodnie z obrazem 1b za pomocą stylów biblioteki Bootstrap. Do budowy szablonu HTML należy wykorzystać pomoc zamieszczoną w Tabeli 1. Należy zastosować znaczące nazwy dla identyfikatorów elementów
- **Krok 1 - Dane osobowe:**
  - Pole „Imię" (wymagane, minimum 2 znaki)
  - Pole „Nazwisko" (wymagane, minimum 2 znaki)
  - Pole „Email" (wymagane, poprawny format email)
  - Przycisk „Dalej" (aktywny tylko gdy wszystkie pola są poprawne)
- **Krok 2 - Preferencje:**
  - Pole „Ulubiony kolor" (wybór z listy: Czerwony, Niebieski, Zielony, Żółty)
  - Pole „Poziom doświadczenia" (radio buttons: Początkujący, Średniozaawansowany, Zaawansowany)
  - Przyciski „Wstecz" i „Zakończ"
- **Walidacja kroków:**
  - Krok 1: wszystkie pola muszą być wypełnione i poprawne
  - Krok 2: wszystkie pola muszą być wybrane
  - Przycisk „Dalej" jest nieaktywny gdy walidacja kroku 1 nie przechodzi
  - Przycisk „Zakończ" jest nieaktywny gdy walidacja kroku 2 nie przechodzi
- **Nawigacja między krokami:**
  - Przycisk „Dalej" przechodzi do kroku 2 (tylko gdy krok 1 jest poprawny)
  - Przycisk „Wstecz" wraca do kroku 1 (zachowuje dane z kroku 2)
  - Przycisk „Zakończ" kończy formularz (tylko gdy krok 2 jest poprawny)
- **Po ukończeniu formularza:**
  - Wyświetla się panel podsumowania z wszystkimi danymi
  - W konsoli przeglądarki wyświetla się obiekt zawierający dane z obu kroków w formacie: `{ personalData: {...}, preferences: {...} }`
  - Przycisk „Rozpocznij ponownie" pozwala zresetować formularz
- Dane są zachowywane podczas nawigacji między krokami
- Aplikacja powinna być zapisana czytelnie, z zachowaniem zasad czystego formatowania kodu, należy stosować znaczące nazwy zmiennych i funkcji
- Dokumentacja do programu wykonana zgodnie z wytycznymi z części III zadania egzaminacyjnego. Kod aplikacji przygotuj do nagrania na płytę. W podfolderze web powinno znaleźć się archiwum całego projektu o nazwie web.zip oraz pliki z kodem źródłowym, które były modyfikowane.

---

## Część III. Testy utworzonych aplikacji

Wykonaj testy aplikacji konsolowej oraz dokumentację do aplikacji utworzonych na egzaminie.

W podfolderze konsola w programie głównym aplikacji konsolowej należy sprawdzić działanie klasy poprzez, kolejno:

- Wyświetlenie komunikatu „Liczba zarejestrowanych osób to ", gdzie jest wartością pobraną z pola statycznego klasy.
- Utworzenie obiektu za pomocą konstruktora bezparametrowego.
- Utworzenie obiektu za pomocą konstruktora z dwoma parametrami. Dane obiektu wprowadzane z klawiatury.
- Utworzenie obiektu za pomocą konstruktora kopiującego (w Python konstruktora bezparametrowego i metody kopiującej). Obiekt z wypełnionymi polami jest źródłem kopiowania danych.
- Wywołanie metody do wypisania imienia z parametrem wejściowym równym „Jan" dla wszystkich utworzonych obiektów.
- Ponowne wyświetlenie komunikatu „Liczba zarejestrowanych osób to ", gdzie jest wartością pobraną z pola statycznego klasy

Wykonaj zrzuty ekranu dokumentujące uruchomienie aplikacji utworzonych podczas egzaminu. Zrzuty powinny obejmować cały obszar ekranu monitora z widocznym paskiem zadań. Jeżeli aplikacja uruchamia się, na zrzucie należy umieścić okno z wynikiem działania programu oraz otwarte środowisko programistyczne z projektem lub okno terminala z kompilacją projektu. Jeżeli aplikacja nie uruchamia się z powodu błędów kompilacji, należy na zrzucie umieścić okno ze spisem błędów i widocznym otwartym środowiskiem programistycznym. Wykonać należy tyle zrzutów ile interakcji podejmuje aplikacja.

**Wymagane zrzuty ekranu:**
- Aplikacja konsolowa – dowolna liczba zrzutów nazwanych konsola1, konsola2 ...
- Aplikacja web – dowolna liczba zrzutów nazwanych web1, web2 ... (np. stan początkowy krok 1, krok 1 z błędami walidacji, krok 2, krok 2 z błędami walidacji, panel podsumowania, stan konsoli przeglądarki z wyświetlonymi danymi)

W edytorze tekstu pakietu biurowego utwórz plik z dokumentacją i nazwij go egzamin. Dokument powinien zawierać informacje:

- Nazwę systemu operacyjnego, na którym pracował zdający
- Nazwy środowisk programistycznych, z których zdający korzystał na egzaminie
- Nazwy języków programowania / frameworków / bibliotek użytych podczas tworzenia aplikacji

Zrzuty ekranu i dokument umieść w folderze o nazwie testy.

**UWAGA:** Nagraj płytę z rezultatami pracy. W folderze z numerem zdającego powinny się znajdować podfoldery: konsola, testy, web. W folderze konsola: spakowany cały projekt aplikacji konsolowej, pliki z kodem źródłowym, opcjonalnie plik uruchomieniowy. W folderze testy: pliki ze zrzutami oraz plik egzamin. W folderze web: spakowany cały projekt aplikacji web, pliki modyfikowane przez zdającego. Po nagraniu płyty sprawdź poprawność nagrania. Opisz płytę swoim numerem i pozostaw na stanowisku, zapakowaną w pudełku wraz z arkuszem egzaminacyjnym.

**Czas przeznaczony na wykonanie zadania:** 180 minut

**Ocenie będą podlegać 4 rezultaty:**
- implementacja, kompilacja, uruchomienie programu
- aplikacja konsolowa
- aplikacja web
- testy aplikacji

---

## Tabela 1. Wybrane elementy frameworka Angular, biblioteki React.js i biblioteki Bootstrap - przykłady

### Angular

To use ngModel i ngForm add: import { FormsModule } from '@angular/forms'; in app.module.ts file. Add FormsModule to imports table

To use Bootstrap add to styles.css: @import "~bootstrap/dist/css/bootstrap.css";

### React.js

To use Bootstrap add: import 'bootstrap/dist/css/bootstrap.css';

### Bootstrap Forms

(Źródło https://getbootstrap.com/docs/4.0/components/forms/)

Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Textual form controls—like inputs, selects, and textareas—are styled with the .form-control class. Included are styles for general appearance, focus state, sizing, and more.

```html
<form> 
  <div class="form-group"> 
    <label for="exampleInputEmail1">Email address</label> 
    <input type="email" class="form-control" id="exampleInputEmail1" /> 
  </div> 
  <div class="form-group">   
    <label for="exampleText">Text</label>
    <input type="text" class="form-control" id="exampleText" />
  </div>
</form>
```

**Important!** In React render method use className instead of class; htmlFor instead of for.

### Bootstrap Cards

(Źródło https://getbootstrap.com/docs/4.0/components/card/)

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

```html
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
</div>
```

### Bootstrap Progress

(Źródło https://getbootstrap.com/docs/4.0/components/progress/)

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use the HTML5 `<progress>` element, ensuring you can stack progress bars, animate them, and place text labels over them.

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### Bootstrap Alerts

(Źródło https://getbootstrap.com/docs/4.0/components/alerts/)

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts JavaScript plugin.

```html
<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  This is an info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  This is a light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert—check it out!
</div>
```

### Bootstrap Buttons

(Źródło https://getbootstrap.com/docs/4.0/components/buttons/)

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. The btn classes are designed to be used with the `<button>` element. Add modifier classes as: btn-primary, btn-secondary, btn-success and more to btn class in order to add background colors.

e.g. `<button type="button" class="btn btn-success">Success</button>`
