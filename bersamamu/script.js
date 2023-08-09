
let s = 'Naruto';

$('.button-saken').on('click', function () {
    let keywordInput = $(".sakensearch").val();
    $.ajax({
        url: `https://www.omdbapi.com/?apikey=985ff0d4&s=` + $('.sakensearch').val(),
        success: result => {
            let movies = result.Search;
            let cards = '';
            let titlesearch = '';
            movies.forEach(m => {
                cards += getdataapi(m);

                titlesearch = gettitle(keywordInput);


            })
            $('.haikal').html(titlesearch);

            $('.card-detail').html(cards);
            $('.modal-detail-button').on('click', function () {
                // console.log($(this).data(`idmovies`));
                $.ajax({
                    url: `https://omdbapi.com/?apikey=985ff0d4&i=` + $(this).data(`idmovies`),
                    success: m => {



                        const some = detailsapi(m);
                        $('.modal-body').html(some);
                    },
                    error: error => {

                        return alert('Error Api salah , Silahkan Coba Lagi');


                    }

                })
            })
        },
        error: error => {

            return alert('Error Api salah , Silahkan Coba Lagi');


        }
    });
})


$.ajax({
    url: `https://www.omdbapi.com/?apikey=985ff0d4&s=${s}`,
    success: result => {
        let movies = result.Search;
        let cards = '';
        let titlesearch = '';
        movies.forEach(m => {
            cards += getdataapi(m);

            titlesearch = searchtitle(s);


        })
        $('.haikal').html(titlesearch);

        $('.card-detail').html(cards);
        $('.modal-detail-button').on('click', function () {
            // console.log($(this).data(`idmovies`));
            $.ajax({
                url: `https://omdbapi.com/?apikey=985ff0d4&i=` + $(this).data(`idmovies`),
                success: m => {



                    const some = detailsapi(m);
                    $('.modal-body').html(some);
                },
                error: error => {

                    return alert('Error Api salah , Silahkan Coba Lagi');


                }

            })
        })
    },
    error: error => {

        return alert('Error Api salah , Silahkan Coba Lagi');


    }
});

function getdataapi(m) {
    return `<div class="col-md-4 my-3"
  <div class="card">
   <img src="${m.Poster}" class="card-img-top">
       <div class="card-body">
      <h5 class="card-title">${m.Title}</h5>
      <p class="card-text">${m.Year}</p>
   <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#detailmodal" data-idmovies="${m.imdbID}">See Details</a>
</div>
</div>
</div>`;
}

function searchtitle(keywordInput) {
    return `<div class="col-md-10">
 <h1>Imam Wahyu Widodo | Search Film : ${keywordInput}</h1>
 <h5>Api By : Omdbapi</h5>
 <br>   
</div>`;
}

function gettitle(g) {
    return `<div class="col-md-10">
 <h1>Imam Wahyu Widodo | Search Film : ${g}</h1>
 <h5>Api By : Omdbapi</h5>
 <br>   
</div>`;
}

function detailsapi(m) {
    return `  <div class="container-fluid">
 <div class="row">
     <div class="col-md-3">
         <img class="img-fluid" src="${m.Poster}">
     </div>
         <div class="col-md">
         <ul class="list-group">
             <li class="list-group-item list-group-item-light"><strong><h1>Title : ${m.Title}</h1></strong> </li>
             <li class="list-group-item list-group-item-light"><strong><h1>Genre : ${m.Genre}</h1></strong></li>
             <li class="list-group-item list-group-item-light"><strong><h1>Release : ${m.Released}</h1></strong></li>
             <li class="list-group-item list-group-item-light"><strong><h1>Sinopsis : ${m.Plot}</h1></strong></li>
             <li class="list-group-item list-group-item-light"><strong><h1>Pencipta : ${m.Writer}</h1></strong></li>
           </ul>
     </div>
         </div>
     </div>
 </div>
</div>
</div>`;

}