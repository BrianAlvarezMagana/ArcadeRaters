const apiKey = "e99bccc3b7764f57a2f95f4de8626e55"; 
const apiUrl = "https://api.rawg.io/api/games";

// remove existing list of top rated and random games
function removeList(target) {
	 const listContainer = document.getElementById(target)
  	listContainer.innerHTML = "";
}

// to show the list of top rated games
async function topRateGames() {
    const url = `${apiUrl}?ordering=-rating&key=${apiKey}`;
    let response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        accept: 'application/json'},}).then(response => response.json()).then(json => {
          const data = json["results"] // Array List 
            
          const listContainer = document.getElementById("games-list") // TODO: Add to HTML

          data.forEach((item) => {
            const listItem = document.createElement("li")
            listItem.textContent = item.name + " (" + item.rating + ") " // set the name of listItem
            
        
            listContainer.appendChild(listItem)                                             
       })})
}

// to show the list of random games (changes everytime we click)
async function randomGames() {
  const url = `${apiUrl}?key=${apiKey}`;
  let response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        accept: 'application/json'},}).then(response => response.json()).then(json => {
          const shuffledArray = json["results"].sort((a, b) => 0.5 - Math.random());
          const listContainer = document.getElementById("games-list") // TODO: Add to HTML

          shuffledArray.forEach((item) => {
            const listItem = document.createElement("li")
            listItem.textContent = item.name + " (" + item.rating + ") " // set the name of listItem
            
        
            listContainer.appendChild(listItem)                                             
       })})
}

async function topMetaGames() {
  const url = `${apiUrl}?ordering=-metacritic&key=${apiKey}`;
  let response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      accept: 'application/json'},}).then(response => response.json()).then(json => {
        const data = json["results"] // Array List 
          
        const listContainer = document.getElementById("games-list") // TODO: Add to HTML

        data.forEach((item) => {
          const listItem = document.createElement("li")
          listItem.textContent = item.name + " (" + item.metacritic + ") " // set the name of listItem
          
      
          listContainer.appendChild(listItem)                                             
     })})
}

// Let, Const, Var
var historyArray = []
// searchbar
async function search() {
  	let gameTitle = document.getElementById('gameInput').value.toLowerCase();

// fetch the API
	  const url = `${apiUrl}?search=${gameTitle}&key=${apiKey}`;
    let response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          accept: 'application/json'},}).then(response =>         response.json()).then(json => {const result = json["results"] 
        historyArray.push(gameTitle)                                                                                      

// Array List 
generateList(result)}
);

// show the list of searched games
function generateList(data) {
    const listContainer = document.getElementById("result-list")
    console.log(data)
    data.forEach((item) => {
      const listItem = document.createElement("li")
      listItem.textContent = item.name // set the name of listItem
      listItem.addEventListener("click", () => {
// Change the current game textfield
      document.getElementById('gameName').innerHTML = item.name
      document.getElementById('rating').innerHTML = "Rating: " + item.rating
      let genres = '' // Action, Else, ..
      for (let i=0; i < item.genres.length; i++) {
        genres += item.genres[i].name + ", "
      }
      genres = genres.substring(0, genres.length-2)
      document.getElementById('genre').innerHTML = "Genres: " + genres;
              removeList("result-list")
        
  })
        listContainer.appendChild(listItem)                                             
 })}

}



// const Rawger = require ('rawger');
let loginButton = document.getElementById("login-button");
let loginButton1 = document.getElementById("dropdownMenu2");
let signupButton = document.getElementById("signup-button");
let welcomeTag = document.getElementById("welcome-tag");
let homeButton = document.getElementById("home-button");
let profileButton = document.getElementById("profile-button");
let helpButton = document.getElementById("help-button");
let logoutButton = document.getElementById("logout-button");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let searchButton = document.getElementById("searchBtn");
let topRateButton = document.getElementById("topRatedBtn");
let randomGameButton = document.getElementById("randomGameBtn");
let metaScoreButton = document.getElementById("topMetaBtn");
let preSearchButton = document.getElementById('prevSearchBtn');

// event listener for search button
searchButton.addEventListener("click", () => {
	// clear the list
  	removeList("result-list")
  	search()
  	
});

// even listerner for top rated games
topRateButton.addEventListener("click", () => {
	// clear the list
  	removeList("games-list")
  	topRateGames()
});

// event lister for random games
randomGameButton.addEventListener("click", () => {
	// clear the list
    removeList("games-list")
  	randomGames()
});

// event listner for metacritic score
metaScoreButton.addEventListener("click", () => {
	// clear the list
  	removeList("games-list")
  	topMetaGames()
  	
});

preSearchButton.addEventListener("click", () => {
	// clear the list
  	removeList("games-list")

    const listContainer = document.getElementById("games-list") // TODO: Add to HTML

          historyArray.forEach((item, index) => {
            if (index < historyArray.length-1) {
              const listItem = document.createElement("li")
              listItem.textContent = item // set the name of listItem
              listContainer.appendChild(listItem)   
            }
            
  	})
});

// Login form when login button is click and modal will pop up
loginButton.addEventListener("click", () => {
  Swal.fire({
    title: `<h3 style="color: #00FFFF;">Login</h3>`,
    html: `
        <input type="text" id="login" class="swal2-input" placeholder="Username" style="color: white; border-color: #00FFFF;">
        <input type="password" id="password" class="swal2-input" placeholder="Password" style="color: white; border-color: #00FFFF;">
        <br>
        <input type="checkbox" onclick="showPassword()"><p style="color: white; display: inline-block; margin-left: 10px;">Show Password</p>`,
    showCancelButton: true,
    cancelButtontext: `<a style="color: #00FFFF;">Cancel</a>`,
    confirmButtonColor: "#00FFFF",
    confirmButtonText: `<a style="color: #202A44;">Sign In</a>`,
    padding: "3.5rem",
    background: "#202A44",
    allowOutsideClick: false,
    focusConfirm: false,
    footer: `<a>Made By ArcadeRaters</a>`,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#login").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!login || !password) {
        Swal.showValidationMessage(`Please Enter Username And Password`);
      }
      if (!login && password) {
        Swal.showValidationMessage(`Please Enter Your Username`);
      }
      if (login && !password) {
        Swal.showValidationMessage(`Please Enter Your Password`);
      }
      return { login: login, password: password };
    },
  }).then((result) => {
    if (result.dismiss === "cancel") {
      return;
    }
    Swal.fire({
      title: `<h3 style="color: #00FFFF;"> Logged In Successfully</h3>`,
      icon: "success",
      text: " ",
      background: "#202A44",
      showConfirmButton: false,
      timer: 1500,
    });
    loginButton.style.display = "none";
    signupButton.style.display = "none";
    loginButton1.style.display = "block";
    loginButton1.innerHTML = result.value.login;
    welcomeTag.innerHTML = "Welcome," + " " + result.value.login;
  });
});

signupButton.addEventListener("click", () => {
  Swal.fire({
    title: `<h3 style="color: #00FFFF;">Sign Up Now!</h3>`,
    html: `
        <input type="text" id="first-name" class="swal2-input" placeholder="First Name" style="color: white; border-color: #00FFFF;">
        <input type="text" id="last-name" class="swal2-input" placeholder="Last Name" style="color: white; border-color: #00FFFF;">
        <input type="text" id="username" class="swal2-input" placeholder="Username" style="color: white; border-color: #00FFFF;">
        <input type="password" id="password" class="swal2-input" placeholder="Password" style="color: white; border-color: #00FFFF;">
        <input type="password" id="confirm-password" class="swal2-input" placeholder="Confirm Password" style="color: white; border-color: #00FFFF;">
        <br>
        <input type="checkbox" onclick="showPassword()"><p style="color: white; display: inline-block; margin-left: 10px;">Show Password</p>`,
    showCancelButton: true,
    cancelButtontext: `<a style="color: #00FFFF;">Cancel</a>`,
    confirmButtonColor: "#00FFFF",
    confirmButtonText: `<a style="color: #202A44;">Sign Up</a>`,
    padding: "3.5rem",
    background: "#202A44",
    allowOutsideClick: false,
    focusConfirm: false,
    footer: `<a>Made By ArcadeRaters</a>`,
    preConfirm: () => {
      const firstName = Swal.getPopup().querySelector("#first-name").value;
      const lastName = Swal.getPopup().querySelector("#last-name").value;
      const username = Swal.getPopup().querySelector("#username").value;
      const password = Swal.getPopup().querySelector("#password").value;
      const confirmPassword =
        Swal.getPopup().querySelector("#confirm-password").value;
      if (!firstName) {
        Swal.showValidationMessage(`Please Enter Your First Name`);
      }
      if (!lastName) {
        Swal.showValidationMessage(`Please Enter Your Last Name`);
      }
      if (!username) {
        Swal.showValidationMessage(`Please Choose A Username`);
      }
      if (!password) {
        Swal.showValidationMessage(`Please Choose A Password`);
      }
      if (!confirmPassword) {
        Swal.showValidationMessage(`Please Re-type Password Again`);
      }
      if (password != confirmPassword) {
        Swal.showValidationMessage(`Password does not match, Try Again!`);
      }
      return {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
      };
    },
  }).then((result) => {
    if (result.dismiss === "cancel") {
      return;
    }
    Swal.fire({
      title: `<h3 style="color: #00FFFF;">Signed Up Successfully</h3>`,
      icon: "success",
      text: " ",
      background: "#202A44",
      showConfirmButton: false,
      timer: 1500,
    });
    loginButton.style.display = "none";
    signupButton.style.display = "none";
    loginButton1.style.display = "block";
    loginButton1.innerHTML = result.value.username;
    welcomeTag.innerHTML = "Welcome," + " " + result.value.firstName;
  });
});

// will take user to homescreen
homeButton.addEventListener("click", () => {
  window.history.forward();
});

// page profile for user when click, it wont log out but still go to the next page.
profileButton.addEventListener("click", () => {
  window.history.forward();
});

// help page if user need guidance and will be taken to a separate page
helpButton.addEventListener("click", () => {
  // need code here
});

// Logout Button Refreshes the page and go back to home page
logoutButton.addEventListener("click", () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: `<h3 style="color: #00FFFF;">Logging Out</h3>`,
    background: "#202A44",
  }).then(() => {
    window.location.reload();
  });
});

function showPassword() {
  var x = document.getElementById("password");
  var y = document.getElementById("confirm-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}
