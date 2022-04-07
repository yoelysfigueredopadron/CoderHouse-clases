const cars = ["Saab", "Volvo", "BMW", "Mercedes-Benz", "Audi", "Renault", "Ford", "Opel", "Seat"];

const cars2 = [
  "Saab",
  "Volvo",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Renault",
  "Saab",
  "Ford",
  "Seat"
];

const cars3 = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
cars[3] = "Saab";
cars[4] = "Volvo";
cars[5] = "BMW";
cars[6] = "Saab";
cars[7] = "Volvo";
cars[8] = "BMW";

document.getElementById("mostrar").innerHTML = cars;

const posts = [{
  id: 1,
  title: 'Mi primer post',
  // image: 'https://www.google.com/search?q=javascript+descargas&tbm=isch&ved=2ahUKEwjNj9TYlsb0AhXODLkGHbhfB6EQ2-cCegQIABAA&oq=javascript+descargas&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoECAAQQzoFCAAQgAQ6BAgAEB46BggAEAgQHjoECAAQGFDbCFjSImCFL2gAcAB4AIABkgGIAYgIkgEDOS4ymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=X0qpYY3kE86Z5OUPuL-diAo&bih=694&biw=1517&rlz=1C1ALOY_esAR954AR954#imgrc=wlc4bq2X53ix1M',
  tags: ['javascript', 'webdevelopment']
}, {
  id: 2,
  title: 'Mi experiencia con React',
  image: 'https://www.google.com/search?q=react&tbm=isch&ved=2ahUKEwjQ9_v5lsb0AhUEA7kGHYV5AUoQ2-cCegQIABAA&oq=react&gs_lcp=CgNpbWcQAzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIICAAQgAQQsQM6BwgjEO8DECc6BQgAEIAEOgQIABAYOgoIIxDvAxDqAhAnUP8JWOAlYNwoaAFwAHgDgAF2iAG_EJIBBDIzLjKYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=pUqpYZCRC4SG5OUPhfOF0AQ&bih=694&biw=1517&rlz=1C1ALOY_esAR954AR954#imgrc=y27M8DKkgCe0HM',
  tags: ['javascript', 'webdevelopment', 'React']
}, {
  id: 3,
  title: 'Por qué dejé Angular',
  image: 'https://www.google.com/search?q=angular&tbm=isch&ved=2ahUKEwj989CWl8b0AhWsDLkGHZRVCWoQ2-cCegQIABAA&oq=angular&gs_lcp=CgNpbWcQAzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQgAQyBAgAEEMyBAgAEEM6BwgjEO8DECc6CAgAEIAEELEDUP0KWJgaYN8caABwAHgAgAFaiAGoBZIBATiYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=4UqpYb3_EayZ5OUPlKul0AY&bih=694&biw=1517&rlz=1C1ALOY_esAR954AR954#imgrc=2kzhO2s5VNkFlM',
  tags: ['javascript', 'webdevelopment', 'angular']
}]

// las siguientes lineas la pueden copiar y pegar en la consola para ver el resultado que les devuelve
posts.find(post => post.title == 'Por qué dejé Angular');
posts.find(post => post.id == 1);

// some si se cumple en alguno
posts.some(post => post.id === 4); // false
posts.some(post => post.id === 3); // true
posts.some(post => post.tags.includes('vue')); // false
posts.some(post => post.tags.includes('javascript')); // true

// every si se cumple en todas
// console.log(posts.every(post => post.tags.includes('javascript')));
posts.every(post => post.tags.includes('javascript')); // true
posts.every(post => post.tags.includes('react')); // false

// map nos devuelve un nuevo arreglo 
posts.every(post => post.tags.includes('react')); // false

// filter filtrar
posts.filter(post => post.tags.includes('angular'));
posts.filter(post => post.image !== undefined);

// reduce y spreat operator
posts.reduce((alltags, post) => {
  return [...alltags, ...post.tags]
}, []);


// reduce y spreat operator no repetir elementos
posts.reduce((alltags, post) => {
  return Array.from(new Set([...alltags, ...post.tags]))
}, []);

// otra forma de hacer lo anterior pero con filter
posts.reduce((alltags, post) => {
  return [...alltags, ...post.tags]
}, []).filter((post, index, self) => self.indexOf(post));