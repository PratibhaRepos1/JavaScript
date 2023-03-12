//showProperties from object if type is string
const movie = {
    title: 'Race',
    releaseYear: 2004,
    rating: 4.3,
    director: 'Rohit Shetti'
};
showProperties(movie);

function showProperties(obj)
{
    for(key in obj)
       if(typeof(obj[key]) === 'string')
        console.log(key, obj[key]);
}
