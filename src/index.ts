import { Book } from "./book";

let konyvek : Book[] = [];

let k1 : Book = new Book("K1",5);
let k2 : Book = new Book("K2",6);
let k3 : Book = new Book("K3",2);

konyvek.push(k1,k2,k3);

for(let k of konyvek) {
    k.toString();
}

console.log("----------------------------------------------------");

let konyvek2 : Book[] = [];



for(let i = 0; i < 30; i++){
    let rating = Math.floor(Math.random() * 10)+1;
    let nev = "Book#"+i;
    let k4 : Book = new Book(nev,rating);
    konyvek2.push(k4);
}

for(let k of konyvek2) {
    k.toString();
}

console.log("---------------------------------------------")
console.log("7 nel nagyobb könyvek:")
for(let k of konyvek2) {
    if(k.rating > 7){
        k.toString();
    }

}
/*
function bestof(books : Array<Book>):Book{
    let max = books[0];
    for(let i = 0; i < books.length; i++){
        if(books[i]>max){
            max = books[i];
        }
    }
    return max;
}

let maxR = bestof(konyvek2);
console.log("--------------------------------------------------")
console.log("Legjobb könyv:")
maxR.toString();
*/



