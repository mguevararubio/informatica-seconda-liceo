let canciones = [
    {nombre: "Humble", año: "2019", artista: "Eden Nash, Ren", imagen: "https://images.genius.com/7ad893836a4e0d7b7736fd3418b6465a.450x450x1.jpg"},
    {nombre: "It's Alright", año: "2019", artista: "The Big Push", imagen: "https://images.genius.com/24096396d49c033f5b3239a17b303f07.370x370x1.jpg"},
    {nombre: "I shot the sheriff", año: "1974", artista: "Eric Clapton", imagen: "https://www.nacionrock.com/wp-content/uploads/125930-a.jpg"},
    {nombre: "Englishman in New York", año: "1987", artista: "Sting", imagen: "https://historiasdenuevayork.files.wordpress.com/2011/09/11392.jpg?w=640"},
    {nombre: "OCEAN", año: "2012", artista: "John Butler", imagen: "https://images-na.ssl-images-amazon.com/images/I/51b5kzl%2Bx9L._SX425_.jpg"},
    {nombre: "What's Up", año: "1993", artista: "4 Non Blondes", imagen: "https://cdns-images.dzcdn.net/images/cover/22ab04ebf46e75a8c2c83a774c8831a8/500x500.jpg"},
    {nombre: "Fly me to the moon", año: "1963", artista: "Frank Sinatra", imagen: "https://static.qobuz.com/images/covers/9b/u4/qe9o9pdvuu49b_600.jpg"},
    {nombre: "Algo contigo", año: "2003", artista: "Vicentico", imagen: "https://img.discogs.com/t8OWVez00QPK3-2-xQl8k0MGXKs=/fit-in/600x604/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10330763-1495718071-9576.jpeg.jpg"},
    {nombre: "Blackbird", año: "1968", artista: "The Beatles", imagen: "https://note-store.es/upload/resize_cache/iblock/957/340_420_0/THE-BEATLES-_-Blackbird.jpg"}
]

let tabla = document.querySelector ("#canciones")
let conttabla = `<tr><th>nombre</<th><th>año</<th><th>artista</<th><th>imagen</th><tr>`
for (cancion of canciones) {
    conttabla = conttabla + `<tr><th> ${cancion.nombre}</td><td> ${cancion.año} </td><td> ${cancion.artista}</td><td><img widt ="450 px" src= "${cancion.imagen}" alt = " " ></td></tr>`
}
tabla.innerHTML= conttabla;