const s = 'One Piece'.toLocaleUpperCase();


fetch(`https://www.omdbapi.com/?apikey=985ff0d4&s=${s}`)
    .then(response => response.json())
    .then(response => {
        const gethandler = response.Search;
        let cards = '';
        gethandler.forEach(m => cards += getdataapi(m));
        const datapi = document.querySelector('.card-detail');
        datapi.innerHTML = cards;

        const gettitleapis = gettitle(s);
        const apidefaultittle = document.querySelector('.haikal');
        apidefaultittle.innerHTML = gettitleapis;


        const getanyidmdb = document.querySelectorAll('.modal-detail-button')
        getanyidmdb.forEach(btn => {
            btn.addEventListener('click', function () {
                const dataid = this.dataset.idmovies;
                fetch('https://omdbapi.com/?apikey=985ff0d4&i=' + dataid)
                    .then(response => response.json())
                    .then(m => {
                        const some = detailsapi(m);
                        const hakarimeker = document.querySelector('.modal-body');
                        hakarimeker.innerHTML = some;


                    })
            })

        })

        // $('.modal-detail-button').on('click', function () {
        //     $.ajax({
        //         url: `https://omdbapi.com/?apikey=985ff0d4&i=` + $(this).data(`idmovies`),
        //         success: m => {


        //             const some = detailsapi(m);
        //             $('.modal-body').html(some);


        //         },
        //         error: error => {
        //             return alert('Errror Id Tidak ada');

        //         }




        //     })

        // })

    })

const searchbutton = document.querySelector('.button-saken');
searchbutton.addEventListener('click', function () {
    const getkeyword = document.querySelector('.sakensearch');
    const set = getkeyword.value.toLocaleUpperCase();
    fetch('https://www.omdbapi.com/?apikey=985ff0d4&s=' + getkeyword.value)
        .then(response => response.json())
        .then(response => {
            const getmovie = response.Search;
            let cards = '';
            getmovie.forEach(m => cards += getdataapi(m));
            const getapidetail = document.querySelector('.card-detail');
            getapidetail.innerHTML = cards;




            // ...
            const searchtitle = gettitleapi(set);
            const getanytitle = document.querySelector('.haikal');
            getanytitle.innerHTML = searchtitle;

            const getanyidmdb = document.querySelectorAll('.modal-detail-button')
            getanyidmdb.forEach(btn => {
                btn.addEventListener('click', function () {
                    const dataid = this.dataset.idmovies;
                    fetch(`https://omdbapi.com/?apikey=985ff0d4&i=` + dataid)
                        .then(response => response.json())
                        .then(m => {
                            const some = detailsapi(m);
                            const sendreqid = document.querySelector('.modal-body');
                            sendreqid.innerHTML = some;

                        })

                })

            })




            // $('.modal-detail-button').on('click', function () {

            //     $.ajax({
            //         url: `https://omdbapi.com/?apikey=985ff0d4&i=` + $(this).data(`idmovies`),
            //         success: m => {


            //             const some = detailsapi(m);
            //             $('.modal-body').html(some);


            //         },
            //         error: error => {
            //             return alert('Errror Id Tidak ada');

            //         }




            //     })

            // })


        })

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

function gettitleapi(set) {
    return `<div class="col-md-10">
 <h1>Imam Wahyu Widodo | Search Film : ${set}</h1>
 <h5>Api By : Omdbapi</h5>
 <br>   
</div>`;
}

function gettitle(s) {
    return `<div class="col-md-10">
 <h1>Imam Wahyu Widodo | Search Film : ${s}</h1>
 <h5>Api By : Omdbapi</h5>
 <br>   
</div>`;
}

function detailsapi(m) {
    return `  <div class="container-fluid">
 <div class="row">
     <div class="col-md-3">
         <center><img class="img-fluid my-3" src="${m.Poster}"></center>
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