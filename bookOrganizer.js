const books = [
  {
    title: "The Gander and The Goose",
    authorName: "Charlie Young",
    releaseYear: 2023
  },

  {
    title: "Chequemate",
    authorName: "Harley Amanenla",
    releaseYear: 1980
  },

  {
    title: "If anyone builds this...",
    authorName: "Harry Stings",
    releaseYear: 2020
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1
  } else if(book1.releaseYear > book2.releaseYear) {
    return 1
  } else {
    return 0
  }
};

const filteredBooks = books.filter((books) => books.releaseYear > 2000);

filteredBooks.sort(sortByYear);
console.log(filteredBooks.sort((sortByYear)));