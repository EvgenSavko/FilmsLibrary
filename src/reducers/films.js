const initialState = [
  {
    title: 'Harry Potter',
    URL: `http://7.belpotter.by/files/2014/05/001c0071-0000-0000-0000-000000000000_53966cad-6a12-4c07-a69e-f753048d1d21_20101001155624_Poster_300_400.jpg`,
    describe: ' Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and RonWeasley, all of whom are students at Hogwarts School of Witchcraftand Wizardry. The main story arc concerns Harrys struggle against .',
    country : 'USA',
    year : '2017',
    genre : 'Fantasy',
    actors : 'Daniel Radcliffe, Rupert Grint, Emma Watson, Chris Rankin, James Phelps, Oliver Phelps, Matthew Lewis, Tom Felton, Luke Youngblood, Sean Biggerstaff',
    comments : ['test comment']
  }
];

export default function films(state = initialState, action) {
 if (action.type === 'ADD_COMMENT') {
   const newFilms = [...state];
    newFilms.map( (item, index) => {
      if (index == action.payload.id) {
        item.comments.push(action.payload.value)
      }
    })
    return newFilms;
  } else if (action.type === 'ADD_FILM') {
      const newFilms = [...state, action.payload];
      return newFilms;
  } else if (action.type === 'DEL_FILM') {
      const newFilms = [...state];
      newFilms.splice(action.index, 1);
    return newFilms;
  }
  return state;
}
