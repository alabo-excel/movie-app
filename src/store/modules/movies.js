const SET_SEARCH = "SET_SEARCH";
const SET_FILTER = "SET_FILTER";
const ADD_MOVIE = "ADD_FILTER";
const DELETE_MOVIE = "DELETE_MOVIE";
const UPDATE_MOVIE = "UPDATE_MOVIE";



const state = {
    movies: [{
            id: 1,
            title: "Forest Gump",
            yearReleased: 1994,
            director: "Robert Zemeckis",
            genre: "Comedy",
            wasSuccessfull: true,
            poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
            storyline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofF",
        },
        {
            id: 2,
            title: "Harry Potter",
            yearReleased: 2001,
            director: "Mike Newell",
            genre: "Fantasy Fiction",
            wasSuccessfull: true,
            poster: "https://i.pinimg.com/originals/ff/cf/07/ffcf070e22c2ca7e9134d0b1779877f8.jpg",
            storyline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofF",
        },
        {
            id: 3,
            title: "Titanic",
            yearReleased: 1998,
            director: "James Cameron",
            genre: "Romance",
            wasSuccessFull: true,
            poster: "https://images-na.ssl-images-amazon.com/images/I/51G13d3EwBL._AC_.jpg",
            storyline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofF",
        },
        {
            id: 4,
            title: "Best Worst Movie",
            yearReleased: 2009,
            director: "Michael Stephen",
            genre: "Comedy",
            wasSuccessfull: false,
            poster: "https://images-na.ssl-images-amazon.com/images/I/61GxKblWwhL._SY445_.jpg",
            storyline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofF",
        },
        {
            id: 5,
            title: "Troll 2",
            yearReleased: 2003,
            director: "Shawn Black",
            genre: "Horror",
            wasSuccessfull: false,
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Trolls_World_Tour_poster.jpg/220px-Trolls_World_Tour_poster.jpg",
            storyline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofF",
        },
    ],
    search: "",
    filter: {
        key: "year",
        order: "desc",
    },
};
const mutations = {
    [SET_SEARCH](state, search) {
        state.search = search;
    },
    [SET_FILTER](state, filter) {
        state.filter = filter;
    },
    [ADD_MOVIE](state, movie) {
        state.movies.push(movie);
    },
    [DELETE_MOVIE](state, id) {
        state.movies.splice(state.movies.findIndex(movie => movie.id === id), 1);
    },

    [UPDATE_MOVIE](state, movie) {
        state.movies = state.movies.map(oldMovie => {
            if (movie.id === oldMovie.id) {
                return movie
            }
            return oldMovie
        })
    },
};
const actions = {
    search({ commit }, search) {
        commit(SET_SEARCH, search);
    },
    filter({ commit }, filter) {
        commit(SET_FILTER, filter);
    },
    addMovie({ commit, state }, movie) {
        movie.id = state.movies.length + 1
        commit(ADD_MOVIE, movie);
    },
    deleteMovie({ commit }, id) {
        commit(DELETE_MOVIE, id)
    },

    updateMovie({ commit }, movie) {
        commit(UPDATE_MOVIE, movie)
    }
};

const getters = {
    getMovies: (state) => {
        return state.movies
            .filter(
                (movie) =>
                movie.title.toLowerCase().indexOf(state.search.toLowerCase()) > -1
            )
            .sort(compare(state.filter));
    },
    getMovieById: (state) => (id) => {
        return state.movies.find((movies) => movies.id === id);
    },
};

const compare = ({ key, order }) => {
    return (a, b) => {
        let result = 0;

        if (a[key] > b[key]) {
            result = 1;
        }
        if (a[key] < b[key]) {
            result = -1;
        }
        if (order === "asc") {
            return result;
        }

        return result * -1;
    };
};
export default {
    state,
    mutations,
    actions,
    getters,
};