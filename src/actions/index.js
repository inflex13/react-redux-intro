export default function selectBook(book) {
    //select is an action create it needs to return an action,
    //an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };

}