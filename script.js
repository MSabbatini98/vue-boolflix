//!  url base del query : https://api.themoviedb.org/3
// ! GET url : /search/movie
// ! API Key : api_key=44c0abd41cd7f15ce525a6fdbc83e665 
var app_Vue = new Vue (
    {
        el : "#app_Vue",
        data : {
            movies : [],
            
            user_input : "e",
        },
        methods : {
            startSearch() {
                axios.get("https://api.themoviedb.org/3/search/movie", 
                    {
                        params: {
                            api_key : '44c0abd41cd7f15ce525a6fdbc83e665',
                            query: this.user_input,
                        }
                    // senza arrow function, serve self = this
                    }).then((answer) => {
                        this.movies = answer.data.results;
                    }
                );
            }
        }
    }
)


/*
var app_Vue = new Vue (
    {
        el : "#app_Vue",
        data : {
            album_arr : [],
            genre : [],
            chosen_genre : "",
        },
        mounted : function () {
            axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((answer) => {

                var sorted_album = answer.data.response.sort(function (num1, num2) {
                    return  num2.year - num1.year;
                })
                // console.log(answer.data.response);
                this.album_arr = sorted_album;

                this.album_arr.forEach((element, index) => {
                    console.log(this.genre);
                    if (!this.genre.includes(element.genre)) {
                        this.genre.push(element.genre)
                    }
                });
            });
        }

    }
);
*/