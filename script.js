var app_Vue = new Vue (
    {
        el : "#app_Vue",
        data : {
            movie : [],
        },
        mounted : function () {
            axios.get("something").then((answer) => ) {

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