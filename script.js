/* global fetch */

var myResults = ["Nelson Mandela", "Death of Nelson Mandela", "Presidency of Nelson Mandela"];

function handleClick(){
  const input = document.getElementById("input").value;
  console.log(input);
  
  const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&format=json";
  
  fetch(url)
    .then(function(response){
      return response.json();
    }).then(function(response){
      console.log("response",response);
      // displayResults(response.query.search);
    });
    
    displayResults(myResults)
}


function displayResults(myResults){
  console.log("myResults", myResults);
  // var list = myResults.map(function(item){
  //   return "<li>" + item.title + "</li>";
  // });
  // list = list.join("\n");
  // console.log("list",list);
  myResults.map(function(item){
    const list2 = document.createElement("li");
    
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = item;
    
    list2.appendChild(link);
    
    document.getElementById("results").appendChild(list2);
  });
  
  // console.log("list2",list2)
  
  // document.getElementById("results").innerHTML=list;
}


  

