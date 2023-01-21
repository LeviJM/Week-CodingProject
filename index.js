class Game {
    constructor(name, price, rating) {
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
}

class Genre {
    constructor(gameType) {
        this.gameType = gameType;
        this.games = []
    }
    
}


class Menu {
    constructor() {
        this.genres = []
        this.selected = null
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection) {
                case '1':
                    this.displayGenres();
                    break;
                case '2':
                    this.viewGenre();
                    break;
                case '3':
                    this.createGenre();
                    break;
                case '4':
                    this.deleteGenre();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Adios!')
    }
    showMainMenuOptions() {
        return prompt(`
        0) Bye Bye!
        1) Show all genres
        2) View genre
        3) Create genre
        4) Delete genre
        `)
    }

    showGenreMenuOptions(GenreInfo) {
        return prompt(`
        0) Back
        1) Add game
        2) Remove game
        --------------
        ${GenreInfo}
        `)
    }

    displayGenres() {
        let allGenres = '';
        for (let i = 0; i < this.genres.length; i++) {
            allGenres += i + ') ' + this.genres[i].gameType + '\n';
        }
        alert(allGenres)
    }

    createGenre() {
        let gameType = prompt('Enter Game Genre');
        this.genres.push(new Genre(gameType));
    }

    
    viewGenre() {
        let index = prompt('Enter Index of Genre');
        if (index > -1 && index < this.genres.length) {
            this.selected = this.genres[index];
            let description = this.selected.gameType + '\n';
            for (let i = 0; i < this.selected.games.length; i++){
                description += i + ') ' + this.selected.games[i].name + ' - ' + this.selected.games[i].price + ' - ' + this.selected.games[i].rating + '\n'
            }

            let selection = this.showGenreMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createGame();
                    break;
                case '2':
                    this.deleteGame();
            }
        }
    }

    deleteGenre() {
        let index = prompt('Enter index of genre you are deleting');
        if (index > -1 && index < this.genres.length) {
            this.genres.splice(index, 1);
        }
    }

    createGame() {
        let name = prompt('Enter name of game');
        let price = prompt('Enter cost of game');
        let rating = prompt('Enter rating of your game');
        this.selected.games.push(new Game(name, price, rating));
    }

    deleteGame() {
        let index = prompt ('Enter index of game you are removing');
        if (index > -1 && index < this.selected.games.length) {
            this.selected.games.splice(index,1);
        }
    }



}


let menu = new Menu();
menu.start()