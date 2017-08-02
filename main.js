console.log(customers.results[0]);
let data = `<h1> INTERNAL COMPANY DIRECTORY</h1>`;
let container = document.querySelector(".container");
for(i=0;i<customers.results.length;i++){
data += ` 
<div class = "customer-container">
<img src = ${customers.results[i].picture.large}></img>
<h2> ${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
<hr></hr>
<p class="email">${customers.results[i].email}</p>
<p class ="street-address">${customers.results[i].location.street}</p>
<p class = "location">${customers.results[i].location.city},${customers.results[i].location.state}, ${customers.results[0].location.postcode}</p>
<p class = "phone">${customers.results[i].phone}</p>
</div>

			
`;
}
window.onload = function(){
container.innerHTML = data;
};