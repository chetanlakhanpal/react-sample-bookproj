# MyReads Project

This is small react project which List Books on Dashboard by communicating with a Backend Server. User can select which book they would like to read, can also mark it as Currently Reading or already Read. It uses React router to show different page and uses React Context to share data with component (BookShelf) nested deep inside.

## To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components # Helpful images for your app. Use at your discretion.
    │   ├── Book.js # Individual component that displays book tiles on page
    │   ├── Bookshelf.js # Used to categorize books as Currently Reading, Read, Want To Read
    │   ├── BookshelfChanger.js # Dropdown component attached to every book to let user categorize the bok
    │   ├── BookShelfContext.js # To allow sharing data from parent to BookShelfChanger
    │   ├── ListBook.js # Main component ot display all the books section on Dashboard
    │   ├── Search.js # Another page to allow user to search a particular book
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Dependencies used

* React Router
* Prop Types

### About

Create by Chetan Lakhanpal
