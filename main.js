function findMovies(favoriteGenre) {
    const movies = [
        {
            id: 1,
            name: 'Avengers end game',
            genre: 'Action',
            soldTicket: 149,
            capacity: 150
        },
        {
            id: 2,
            name: 'La la Land',
            genre: 'Romance',
            soldTicket: 20,
            capacity: 75
        },
        {
            id: 3,
            name: 'Beauty and the Beast',
            genre: 'Romance',
            soldTicket: 50,
            capacity: 50
        },
        {
            id: 4,
            name: 'Superman vs Batman',
            genre: 'Action',
            soldTicket: 150,
            capacity: 250
        },
        {
            id: 5,
            name: 'Transformer',
            genre: 'Action',
            soldTicket: 90,
            capacity: 90
        },
        {
            id: 6,
            name: '5 feet apart',
            genre: 'Romance',
            soldTicket: 25,
            capacity: 45
        },
        {
            id: 7,
            name: 'Hamilton',
            genre: 'Musical',
            soldTicket: 295,
            capacity: 300
        },
        {
            id: 8,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        },
        {
            id: 9,
            name: 'Conjuring',
            genre: 'Horror',
            soldTicket: 30,
            capacity: 100
        },
        {
            id: 10,
            name: 'Annabelle',
            genre: 'Horror',
            soldTicket: 10,
            capacity: 30
        },
        {
            id: 11,
            name: 'Fast and Furios',
            genre: 'Action',
            soldTicket: 25,
            capacity: 40
        },
        {
            id: 12,
            name: 'Romeo and Julet',
            genre: 'Romance',
            soldTicket: 15,
            capacity: 15
        },
        {
            id: 13,
            name: 'Wicked',
            genre: 'Musical',
            soldTicket: 75,
            capacity: 75
        }
    ]

    let result = [];
    for (var i in favoriteGenre) {
        const favgenre = favoriteGenre[i];
        for (var j in movies) {
            const movie = movies[j]
            if (movie.genre === favgenre) {
                result.push(movie)
            }
        }
    }
    return result
}
// console.log(findMovies(["Action", "Musical"]))

function findTicketAvailability(movie, user) {
    for (var i in user.favoriteGenre) {
        const favgenre = user.favoriteGenre[i];
        if (Array.isArray(movie)) {
            for (var j in movie) {
                // const movies = movie[j]
                let availableSeat = movie[j].capacity - movie[j].soldTicket
                if (movie[j].genre === favgenre && availableSeat >= user.ticket) {
                    return true
                } else if (movie[j].genre === favgenre && availableSeat < user[i].ticket) {
                    return false
                }
            }
        } else {
            // const movies = movie
            let availableSeat = movie.capacity - movie.soldTicket
            if (movie.genre === favgenre && availableSeat >= user.ticket) {
                return true
            } else if (movie.genre === favgenre && availableSeat < user.ticket) {
                return false
            }
        }
    }

}

// let userr = {
//     name: "Aditira",
//     ticket: 10,
//     favoriteGenre: ["Action", "Musical"],
// };

// let movie1 = {
//     id: 7,
//     name: "Dear Evan Hansen",
//     genre: "Musical",
//     soldTicket: 150,
//     capacity: 200,
// };
// console.log(findTicketAvailability(movie1, userr))

function findRecommendation(user) {
    let findmov = findMovies(user.favoriteGenre)
    let hasil = []
    for (var i in user.favoriteGenre) {
        const favgenre = user.favoriteGenre[i];
        for (var j in findmov) {
            let availableSeat = findmov[j].capacity - findmov[j].soldTicket
            if (findmov[j].genre === favgenre && availableSeat >= user.ticket) {
                hasil.push(findmov[j])
            }
        }
    }
    return hasil
    // console.log(hasil)
}
// let user1 = {
//     name: 'Djalal',
//     ticket: 20,
//     favoriteGenre: ['Musical', 'Romance']
// }

// let user2 = {
//     name: 'Djarot',
//     ticket: 10,
//     favoriteGenre: ['Action', 'Musical']
// }
// console.log(findRecommendation(user1))

function generateRecommendation(user) {

    let findrec = findRecommendation(user)
    let result = []
    let total = 0

    if(findrec.length > 0){
        for (var j in findrec) {
            if (findrec[j].genre === "Action") {
                total = user.ticket * 100000
                findrec[j]['totalPrice'] = total;
            } else if (findrec[j].genre === "Musical") {
                total = user.ticket * 80000
                findrec[j]['totalPrice'] = total;
            } else if (findrec[j].genre === "Romance") {
                total = user.ticket * 40000
                findrec[j]['totalPrice'] = total;
            } else if (findrec[j].genre === "Horror") {
                total = user.ticket * 75000
                findrec[j]['totalPrice'] = total;
            }

        }

        findrec.forEach((recmovie) => {
            delete recmovie.soldTicket;
            delete recmovie.capacity;
        });
        result.push(findrec)
        return findrec
    } else {
        return "Tidak ada film yang sesuai kriteria"
    }
}

let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}

let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))

module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation
}
