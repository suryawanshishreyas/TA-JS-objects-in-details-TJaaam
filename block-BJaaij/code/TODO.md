## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

class Book {
    constructor(title,category,author,isRead,finishedDate){
        this.items = [];
        this.items.title = title;
        this.items.category=category;
        this.items.author = author;
        this.items.status = isRead;
        this.items.finishedDate = finishedDate;
    }
    markBookAsRead(){
        return this.items.status='true' && this.items.finishedDate = Date.now();
    }
   
}
#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index
class BookList extends Book {
    constructor(title,category,author,isRead,finishedDate,index,allBooks){
        super(title,category,author,isRead,finishedDate);
        this.items = [];
        this.items = allBooks;
        this.currentPage = index;
    }
    add([Book]){
        allBooks.push(Book);
    }
    getCurrentBook(){
        return allBooks.title() && allBooks.index;
    }
    getNextBook(){
        return allBooks[index + 1].title;
    }
    getPrevBook(){
        return allBooks[index - 1].title;
    }
    changeCurrentBook(param){
        return allBook[index + param].title;
    }
}
#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
