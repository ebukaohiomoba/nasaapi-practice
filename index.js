document.querySelector('button').addEventListener('click',getFetch);
  function getFetch(){
    const img = document.querySelector('img')
    const choice = document.querySelector('input').value.toLocaleLowerCase()

  const url = 'https://api.nasa.gov/planetary/apod?api_key=LXvgP4XhCVtuOosO0VdOHtocozreJt4ti5T3uKw0&date='+choice
  
  
  fetch(url, {mode: 'cors'})
   
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}