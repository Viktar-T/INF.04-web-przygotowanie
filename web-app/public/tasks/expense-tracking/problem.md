# Expense Tracking Application

## Informacje ogólne

- **Czas trwania sprawdzinu:** 45 minut

---

## Część II. Aplikacja Web

Wykonaj aplikację internetową typu front-end obsługującą śledzenie wydatków z zastosowaniem dostępnego na stanowisku egzaminacyjnym frameworka Angular lub biblioteki React. Zastosuj bibliotekę Bootstrap do zdefiniowania stylu formularza.

---

### Aplikacja referencyjna

Proszę zbadać Aplikację referencyjną która zbudowana na podstawie tego zadania. Jeśli jakaś część zadania nie jest zrozumiała proszę zbadać aplikację referencyjną. Przy sprawdzaniu zadania nauczyciel sprawdza czy zbudowana przez ucznia aplikacja działa jak aplikacja referencyjna.

---

### Założenia aplikacji

- Aplikacja składa się z jednego komponentu.
- Danymi komponentu jest tablica z transakcjami, gdzie każda transakcja ma: opis, kwotę, datę, kategorię i typ (przychód/wydatek).
- Komponent wyświetla:
  - Nagłówek drugiego stopnia o treści: „Śledzenie wydatków"
  - Formularz do dodawania nowych transakcji składający się z:
    - pola edycyjnego i jego etykiety o treści „Opis:"
    - pola numerycznego i jego etykiety o treści „Kwota:"
    - pola daty i jego etykiety o treści „Data:"
    - pola wyboru i jego etykiety o treści „Kategoria:" z opcjami: Jedzenie, Transport, Rozrywka, Ubrania, Inne
    - pola wyboru i jego etykiety o treści „Typ:" z opcjami: Przychód, Wydatek
    - przycisku „Dodaj transakcję"
  - Listę wszystkich transakcji z możliwością usuwania
  - Podsumowanie finansowe (bilans przychodów i wydatków)
- Aplikacja w stanie początkowym wyświetla puste pola formularza
- Elementy formularza są formatowane zgodnie z obrazem za pomocą stylów biblioteki Bootstrap
- Po wybraniu przycisku formularza jest generowane zdarzenie zatwierdzenia formularza, które dodaje nową transakcję do listy
- Każda transakcja na liście ma przycisk do usuwania
- Aplikacja powinna być zapisana czytelnie, z zachowaniem zasad czystego formatowania kodu, należy stosować znaczące nazwy zmiennych i funkcji

---

## Część III. Testy utworzonych aplikacji

Wykonaj testy aplikacji oraz dokumentację do aplikacji utworzonych na egzaminie.

**Wymagane zrzuty ekranu:**
- Aplikacja web – dowolna liczba zrzutów nazwanych web1, web2 ... (np. stan początkowy, po dodaniu transakcji, po usunięciu transakcji)

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
