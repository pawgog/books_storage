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

export interface BookSchema {
    author: string;
    title: string;
    publishing: string;
    genre: string;
    price: string;
}
