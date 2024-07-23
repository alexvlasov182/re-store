export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Learning Go",
        author: "Jon Bodner",
        price: 60.68,
        coverImage:
          "https://m.media-amazon.com/images/I/91yMrjrKOmL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "Cloud Native Go",
        author: "Matthew A. Titmus",
        price: 54.97,
        coverImage:
          "https://m.media-amazon.com/images/I/81Plc5+iybS._SL1500_.jpg",
      },
    ];
  }
}
