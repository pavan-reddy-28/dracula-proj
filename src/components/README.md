<!-- 
inline styling


const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}

 -->

<!-- 
 font awesome link from https://cdnjs.com/libraries/font-awesome/5.15.1 pasted in index.html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" /> 

-->

Currency echange rates:
api:
https://exchangeratesapi.io/

Request specific exchange rates by setting the symbols parameter.
api :GET https://api.exchangeratesapi.io/latest?symbols=USD,GBP 

Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.
api : GET https://api.exchangeratesapi.io/latest?base=USD 