const movies = fetchData()
const $main = document.querySelector("main")
console.log(movies[0].title) //name of first movie
console.log(movies[2].rating) //rating of the third movie
console.log(movies[1].actors[0].name) //name of first actor in the second movie
console.log(movies[1].title) //name of first movie
console.log(movies[1].rating) //rating of the second movie
console.log(Movie(movies[0]))
MovieList()
function MovieList() {

   const $movies = movies.map((movie) => {Movie(movie)} )
    .join('')
    console.log($movies)
    $main.innerHTML = ($movies)
    
}
function like(title) {
    movies.find((movie) => movie.id==id)
    .likes++
    MovieList()
}
function Movie(movie) {
    return `<section>
    <button onclick=like(${movie.id})> Like <span> ${movie.like}</button>
    <h3>  ${movie.title}  </h3>
    <h5>  Rating: ${stars(movie.rating)}</h5>
    <h5> Length: ${movie.length}   </h5>
    <h5> Actors:</h5>
    <ul> 
     <li>${movie.actors[0].name}</li>
     <li>${movie.actors[1].name}</li>
    </ul>
    </section>`

}
function stars(rating) {
   return new Array(rating)
   .fill("⭐")
   .reduce((o,n) => o+n )
}

function fetchData (){

const movies = [
    {
        id: 1,
        title: "Fast and the Furious I", //key: value
        length: 120,
        rating: 4,
        likes: 0,
        actors: [
            {
            name: "Vin Diesel",
            gender: "male"
        },
            {
                name: "Paul Walker",
                gender: "male"

            }

        ]},
        [
            {
                title: "Don't Breathe 2", //key: value
                length: 93,
                rating: 6.3,
                likes: 0,
                actors: [
                    {
                    name: "Stephen Lang",
                    gender: "male"
                },
                    {
                        name: "Madelyn Grace",
                        gender: "female"
        
                    }

                ]},
                [
                    {
                        title: "The Green Knight", //key: value
                        length: 130,
                        rating: 6.9,
                        likes: 0,
                        actors: [
                            {
                            name: "Dev Patel",
                            gender: "male"
                        },
                            {
                                name: "Alicia",
                                gender: "Vikander"
                
                            }
                
                        ]},
                        [
                            {
                          title: "The Gateway", //key: value
                                length: 91,
                                rating: 7,
                                likes: 0,
                                actors: [
                                    {
                                    name: "Olivia Munn",
                                    gender: "female"
                                },
                                    {
                                        name: "Shea",
                                        gender: "Whigham"
                        
                                    }
                        
                                ]},
    
    {},
    {} 
    return movies
}