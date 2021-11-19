export interface BooksListArray {
    books: Array<BookObject>;
}

export interface BookObject {
    id: number;
    title: string;
    author: string;
    publishing: string;
    genre: string;
    price: number;
}
