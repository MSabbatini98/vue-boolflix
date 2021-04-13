//!  url base del query : https://api.themoviedb.org/3
// ! GET url1 : /search/movie
// ! GET url2 : /search/tv
// ! API Key : api_key=44c0abd41cd7f15ce525a6fdbc83e665 
var app_Vue = new Vue (
    {
        el : "#app_Vue",
        data : {
            
            show_error : true,
            api_key : '44c0abd41cd7f15ce525a6fdbc83e665',
            language : "it-IT",
            movies : [],
            flag : "",
            flags : [   'en', 'br', 'cn', 'da', 'de', 'en',
                        'es', 'fi', 'fr', 'gr', 'it', 'ja', 
                        'il', 'ko', 'nl', 'ko', 'no', 'pl', 
                        'pt', 'ru', 'se', 'sv', 'tr'
            ],
            params: {
                api_key : '44c0abd41cd7f15ce525a6fdbc83e665',
                query: "",
                language : "it-IT",
            }
        },

        methods : {
            // errore () {
            //     console.log("eHELLO");
            //     this.movies = [];

            // },
            startSearch() {
                if (this.params.query){

                    axios.get("https://api.themoviedb.org/3/search/movie",
                        {
                            params : this.params,
                        }
                    ).then((answer) => {
                        this.movies.push(...answer.data.results);       
                        }
                    );
                    axios.get("https://api.themoviedb.org/3/search/tv",
                        {
                            params : this.params,

                        }
                    ).then((answer) => {
                        this.movies.push(...answer.data.results);       
                        }
                    );
                }//?chiudo l'if
            } //?finisce la funzione startSearch
        }, // ? finiscono i methods
        mounted: function () {
            console.log("23");
        },
    }   
);
