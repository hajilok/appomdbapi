

let getdatase = function (s) {
    // const se = s;
    return fetch(`https://www.omdbapi.com/?apikey=985ff0d4&s=` + s)
        .then(response => response.json())
        .then(response => {
            moviehandler = response.Search;
            let cards = '';
            moviehandler.forEach(m => cards += getdataapi(m));

            const datasendapi = document.querySelector('.card-detail');
            datasendapi.innerHTML = cards;

            const gettitleapis = gettitle(s);
            const apidefaultittle = document.querySelector('.haikal');
            apidefaultittle.innerHTML = gettitleapis;

        }
        );

}
getdatase('One Piece');

const ahkari = document.querySelector('.button-saken');
ahkari.addEventListener('click', async function () {
    try {
        const keywordiput = document.querySelector('.sakensearch')
        const inputmovies = await getanyinput(keywordiput.value.toLocaleUpperCase());
        updatedataapi(inputmovies);

    } catch (err) {
        console.log(err);
        if (err == 'Error: Movie not found!') {
            alert('Series Or movie not found')

        } else {
            alert('Error You api is incorect or dead')
        }

    }
})

function getanyinput(sendkeyword) {
    return fetch('https://www.omdbapi.com/?apikey=985ff0d4&s=' + sendkeyword)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);

            }
            return response.json()
        })
        .then(response => {
            if (response.Response === "False") {
                throw new Error(response.Error);

            }

            return response.Search;

        });


}

function updatedataapi(inputmovies) {
    const getresponseinput = document.querySelector('.sakensearch')
    const getserchinput = getresponseinput.value.toLocaleUpperCase();
    let cards = '';
    inputmovies.forEach(m => cards += getdataapi(m));

    const datasendapi = document.querySelector('.card-detail');
    datasendapi.innerHTML = cards;

    const gdaserd = gettitleapi(getserchinput);
    const senddataserch = document.querySelector('.haikal');
    senddataserch.innerHTML = gdaserd;

}



document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const dataidmod = e.target.dataset.idmovies;
        const datasetid = await getdetailtitle(dataidmod);
        updateanyid(datasetid);




    }

})

function getdetailtitle(dataidmod) {
    return fetch(`https://omdbapi.com/?apikey=985ff0d4&i=` + dataidmod)
        .then(response => response.json())
        .then(m => m);



}

function updateanyid(m) {
    const datasetid = detailsapi(m);
    hakarisenddetail = document.querySelector('.modal-body');
    hakarisenddetail.innerHTML = datasetid;
}





















function getdataapi(m) {
    return `<div class="col-md-4 my-3"
  <div class="card">
   <img src="${m.Poster}" class="card-img-top">
       <div class="card-body">
       <br>
      <h5 class="card-title">${m.Title}</h5>
      <p class="card-text">${m.Year}</p>
   <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#detailmodal" data-idmovies="${m.imdbID}">See Details</a>
</div>
</div>
</div>`;
}

function gettitleapi(getserchinput) {
    return `<div class="col-md-10">
 <h1>Imam Wahyu Widodo | Search Film : ${getserchinput}</h1>
 <h5>Api By : Omdbapi</h5>
 <br>   
</div>`;
}

function gettitle(s) {
    return `<div class="col-md-10">
 <h1>Imam Wahyu Widodo | Search Film : ${s.toLocaleUpperCase()}</h1>
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