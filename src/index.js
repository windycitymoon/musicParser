import axios from 'axios';
const css = require('./app.scss');

function gitInfo(){
  var result = document.getElementById('app');
  result.innerHTML = '';
  axios.get('https://api.github.com/users/windycitymoon')
    .then(function(response){
      // console.log(typeof response.data);
      Object.keys(response.data).forEach(key => {
        if (response.data [key] != ''){
          result.innerHTML +=
            '<div class="result">' +
              '<div class="result__key">' + key + '</div>' +
              '<div class="result__value">'+ response.data [key] + '</div>' +
            '</div>';
        }
      });
    })
    .catch(function(error){
      console.log(error);
  });

}

gitInfo();
