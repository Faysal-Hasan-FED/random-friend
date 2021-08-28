const loadUsers = ()=>{
    fetch('https://randomuser.me/api/?results=1')
    .then(res=>res.json())
    .then(data=>showUsers(data.results));
}
const showUsers=(users)=>{

const allUsers= document.getElementById("users");
allUsers.textContent='';
users.forEach(user=>{
    
    const div=document.createElement('div');
    div.innerHTML=`
    <div id="user-details">
   <img class="image" src="${user.picture.large}">
    </div>
    <div class="d-flex justify-content-around">
    <i onclick="showDetails('${user.name.first} ${user.name.last}')"class="fas fa-3x mb-4  fa-user"></i>
    <i onclick="showDetails('${user.phone}')" class="fas fa-3x fa-phone"></i> 
    <i onclick="showDetails('${user.email}')" class="fas fa-3x fa-envelope-open"></i>
    <i onclick="showDetails('${user.location.city}, ${user.location.state} ,${user.location.country}')" class="fas fa-3x fa-map-marker-alt"></i>
    <i onclick="showDetails('${user.gender}')" class="fas fa-3x fa-venus-mars"></i>
    </div>
    
    `;
    allUsers.appendChild(div);
})

}

const showDetails = (details)=>{
    const allUsers= document.getElementById("user-details");
   
    const p=document.createElement('p');
    p.classList.add('name');
    p.innerText=details;
    allUsers.appendChild(p);
   
}


