// Wykonał AdamrePL 2025

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'book-mgmt',
  imports: [FormsModule],
  templateUrl: './book-mgmt.component.html',
  styleUrl: './book-mgmt.component.css'
})
export class BOOKMGMTComponent {

    // Lista dla książek
    books: {title: string, author: string, published: number}[] = []; // pola obiektu muszą być wczesniej zdefiniowane, aby pokazywały się w wzorze komponentu (component template)
    // Obiekt do edycji dla późniejszego dodanawania do listy
    book = {
        title: '',
        author: '',
        published: 0,
        available: false
    }
    /**
     * @method remove() - Usuwa obiekt z listy o podanym indexie
     * @param i index elementu na liscie, który jest podawany z listy, który tutaj ustawiany jest w momencie generowania przez pętle listy w htmlu
     */
    remove(i: number) {
        this.books = this.books.filter((_,index) => i != index); // to samo co this.books.forEach((książka, index) => {if (index != i) nowy_zbior.push(książka);}); - oczywiscie trzeba wtedy miec dodatkową listę
    }
    /**
     * @method handleSubmit() - Dodaje obiekt do listy obiektow books z parametrami podanymi w obiekcie book
     */
    handleSubmit() {
        this.books.push({ ...this.book });
    }
}
