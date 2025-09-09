# Diet Planning Application

## Informacje ogólne

- **Czas trwania sprawdzinu:** 45 minut

---

## Część II. Aplikacja Web

Wykonaj aplikację internetową typu front-end obsługującą planowanie diety z zastosowaniem dostępnego na stanowisku egzaminacyjnym frameworka Angular lub biblioteki React. Zastosuj bibliotekę Bootstrap do zdefiniowania stylu formularza.

---

### Obraz referencyjny

**Obraz 1. Aplikacja React.js**
![Obraz 1](img/image.png)

Na obrazie przedstawiono działanie aplikacji przygotowanej w środowisku React.js, stan po dodaniu kilku posiłków do planu diety.

---

### Założenia aplikacji

- Aplikacja składa się z jednego komponentu.
- Danymi komponentu jest tablica z posiłkami, gdzie każdy posiłek ma: nazwę, kalorie, czas spożycia i typ posiłku.
- Komponent wyświetla:
  - Nagłówek drugiego stopnia o treści: „Planowanie diety"
  - Formularz do dodawania nowych posiłków składający się z:
    - pola edycyjnego i jego etykiety o treści „Nazwa posiłku:"
    - pola numerycznego i jego etykiety o treści „Kalorie:"
    - pola edycyjnego i jego etykiety o treści „Czas spożycia:"
    - pola wyboru i jego etykiety o treści „Typ posiłku:" z opcjami: Śniadanie, Obiad, Kolacja, Przekąska
    - przycisku „Dodaj posiłek"
  - Listę wszystkich posiłków z możliwością usuwania
  - Podsumowanie kalorii na dzień
- Aplikacja w stanie początkowym wyświetla puste pola formularza
- Elementy formularza są formatowane zgodnie z obrazem za pomocą stylów biblioteki Bootstrap
- Po wybraniu przycisku formularza jest generowane zdarzenie zatwierdzenia formularza, które dodaje nowy posiłek do listy
- Każdy posiłek na liście ma przycisk do usuwania
- Aplikacja powinna być zapisana czytelnie, z zachowaniem zasad czystego formatowania kodu, należy stosować znaczące nazwy zmiennych i funkcji

---

## Część III. Testy utworzonych aplikacji

Wykonaj testy aplikacji oraz dokumentację do aplikacji utworzonych na egzaminie.

**Wymagane zrzuty ekranu:**
- Aplikacja web – dowolna liczba zrzutów nazwanych web1, web2 ... (np. stan początkowy, po dodaniu posiłków, po usunięciu posiłku)

W edytorze tekstu pakietu biurowego utwórz plik z dokumentacją i nazwij go egzamin. Dokument powinien zawierać informacje:

- Nazwę systemu operacyjnego, na którym pracował zdający
- Nazwy środowisk programistycznych, z których zdający korzystał na egzaminie
- Nazwy języków programowania / frameworków / bibliotek użytych podczas tworzenia aplikacji

Zrzuty ekranu i dokument umieść w folderze o nazwie testy.

**Czas przeznaczony na wykonanie zadania:** 180 minut

**Ocenie będą podlegać 4 rezultaty:**
- implementacja, kompilacja, uruchomienie programu
- aplikacja konsolowa
- aplikacja web
- testy aplikacji
