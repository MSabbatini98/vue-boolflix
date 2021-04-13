//!  url base del query : https://api.themoviedb.org/3
// ! GET url : /search/movie
// ! API Key : api_key=44c0abd41cd7f15ce525a6fdbc83e665 
var app_Vue = new Vue (
    {
        el : "#app_Vue",
        data : {
            movies : [],
            flag : "",
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
                    }), 
                axios.get("https://api.themoviedb.org/3/search/tv",
                    {
                        params: {
                            api_key : '44c0abd41cd7f15ce525a6fdbc83e665',
                            query: this.user_input,
                        }
                    }).then((answer) => {
                        // console.log(answer.data.results[0].original_language); //risultato della lingua del primo elemento
                        this.movies = answer.data.results;
                        
                    }
                ).catch((error) => {
                    console.log("c'è un erroreeee")
                }
            )
        }
    }
});
/*startSearch() {
                axios.get("https://api.themoviedb.org/3/search/movie", 
                    {
                        params: {
                            api_key : '44c0abd41cd7f15ce525a6fdbc83e665',
                            query: this.user_input,
                        }
                    // senza arrow function, serve self = this
                    }).then((answer) => {
                        // console.log(answer.data.results[0].original_language); //risultato della lingua del primo elemento
                        this.movies = answer.data.results;
                        
                    }).catch((error) => {
                    console.log("c'è un erroreeee", error)
                });
                axios.get("https://api.themoviedb.org/3/search/tv",
                    {
                        params: {
                            api_key : '44c0abd41cd7f15ce525a6fdbc83e665',
                            query: this.user_input,
                        }
                    }).then((answer) => {
                        // console.log(answer.data.results[0].original_language); //risultato della lingua del primo elemento
                        this.tv = answer.data.results;
                        
                    }).catch((error) => {
                    console.log("c'è un erroreeee", error)
                }
            );
            this.output.push(this.movies, this.tv)
        }
    }
});
*/