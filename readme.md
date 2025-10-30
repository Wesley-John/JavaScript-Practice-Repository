# MY JAVASCRIPT PRACTICE

## Description

This is a repository that contains all the JavaScript files that I have used to practice various aspects of Javascript.

## Table of Contents

- [Credit Card Masker](#credit-card-masker)
- [Book Organizer](#book-organizer)
- [Sorted Index Finder](#sorted-index-finder)
- [Author](#author)

## Credit Card Masker

Given a string of credit card numbers, return a masked version of it using the following constraints:

- The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
- Replace all numbers, except the last four, with an asterisk (*).
- Leave the remaining characters unchanged.
For example, given "4012-8888-8888-1881" return "\*\*\*\*-\*\*\*\*-\*\*\*\*-1881".

[View the code](cardMasker.js)

## Book Organizer

- You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.
- Your books array should have a minimum of three objects.
- You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.
- The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.
- The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.
- The sortByYear function should return 0 if both releaseYear values are equal.
- You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.
- You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lesson that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.

[View the code](bookOrganizer.js)

## Sorted Index Finder

Create a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.

- You should have a getIndexToIns function that takes two arguments: an array and a number.
- You should use the sort method to sort the array in ascending order.
- Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
- Your getIndexToIns function should always return a number

[View the code](sortedIndexFinder.js)

## Author

👤 **John Wesley**  

- [Connect with me on LinkedIn](https://www.linkedin.com/in/john-wesley-omondi)  
- [Connect with me on GitHub](https://github.com/Wesley-John)
