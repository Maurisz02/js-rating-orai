

export class Book{
    #nev : string;
    #rating: number;

    constructor(nev : string, rating : number) {
        this.#nev = nev;
        this.#rating = rating;
    }


    get nev(){
        return this.#nev;
    }

    get rating(){
        return this.#rating;
    }

    toString():void{
        console.log(this.#nev, this.#rating);
    }

    set rating (rating: number){
        this.#rating = rating;
    }

    bestof(books : Array<Book>):Book{
        let max = books[0];
        for(let i = 0; i < books.length; i++){
            if(books[i]>max){
                max = books[i];
            }
        }
        return max;
    }

}

