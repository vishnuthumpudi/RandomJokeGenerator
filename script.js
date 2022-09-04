const joketext = document.querySelector('.joke-text');

const newJokeBtn = document.querySelector('.new-joke-btn');

const tweetbtn = document.querySelector('.tweet-btn')

newJokeBtn.addEventListener('click',getJoke);

getJoke();

function getJoke(){
    fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept' : 'application/json'
        }
    }).then(function(response){
        return response.json();
    }).then(function(data){
        const Joke = data.jokes;

        joketext.innerText= joke;

        const tweetLink = 'https://twitter.com/share?text=$(joke)';

        tweetBtn.setAttribute('href',tweetLink);
    }).catch(function(error){

        joketext.innerText= 'Oops! Something Went Wrong :(';

        tweetBtn.removerAttribute('href');

        console.log(error);
    });
}