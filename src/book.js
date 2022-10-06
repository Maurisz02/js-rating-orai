"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Book_nev, _Book_rating;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(nev, rating) {
        _Book_nev.set(this, void 0);
        _Book_rating.set(this, void 0);
        __classPrivateFieldSet(this, _Book_nev, nev, "f");
        __classPrivateFieldSet(this, _Book_rating, rating, "f");
    }
    get nev() {
        return __classPrivateFieldGet(this, _Book_nev, "f");
    }
    get rating() {
        return __classPrivateFieldGet(this, _Book_rating, "f");
    }
    toString() {
        console.log(__classPrivateFieldGet(this, _Book_nev, "f"), __classPrivateFieldGet(this, _Book_rating, "f"));
    }
    set rating(rating) {
        __classPrivateFieldSet(this, _Book_rating, rating, "f");
    }
    bestof(books) {
        let max = books[0];
        for (let i = 0; i < books.length; i++) {
            if (books[i] > max) {
                max = books[i];
            }
        }
        return max;
    }
}
exports.Book = Book;
_Book_nev = new WeakMap(), _Book_rating = new WeakMap();
