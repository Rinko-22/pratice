const userContainer = document.getElementById('user-container');

async function fetchUser() {
    let usreArray = [];

    await fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((json) => usreArray.push(json.users))

    usreArray[0].forEach((value) => {
        userContainer.innerHTML += `
        
        <div class="single_user">
        <img src="${value.image}" class="profile-pic" />
        <h3> Name: ${value.firstName} ${value.lastName}</h3>
    <div class="age_gender">
        <span> Age: ${value.age}</span>
        <span> Gender: ${value.gender}</span>
    </div>
<p class="phone"> Phone: ${value.phone}</p>
<p class="email"> Email: ${value.email}</p>
<p class="pass">Password: ${value.password}</p>

</div>

        
        
        `
    })
}


fetchUser()