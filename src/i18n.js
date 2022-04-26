import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            author: 'author',
            title: 'title',
            publishing: 'publishing',
            genre: 'genre',
            price: 'price',
            'Search books': 'Search books',
            'Add book': 'Add book',
            'There is no item!': 'There is no item!',
            'Would you like to delete book item?': 'Would you like to delete book item?',
        },
    },
    pl: {
        translation: {
            author: 'autor',
            title: 'tytuł',
            publishing: 'wydawnictwo',
            genre: 'gatunek',
            price: 'cena',
            'Search books': 'Szukaj książki',
            'Add book': 'Dodaj książkę',
            'There is no item!': 'Nie ma wyszukiwanych elementów!',
            'Would you like to delete book item?': 'Czy na pewno chcesz usunąć ten element?',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
