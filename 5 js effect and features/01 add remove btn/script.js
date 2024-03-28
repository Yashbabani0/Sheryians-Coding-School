let profileStatus = document.querySelector("h5");
let addFriend = document.querySelector("#add");
let profileStatusCheck = 0;
// let removeFriend = document.querySelector("#remove");

/*
// Add and Remove Button Separately

addFriend.addEventListener('click', function() {
    profileStatus.innerHTML = 'Friends'
    profileStatus.style.color = 'green'
})

removeFriend.addEventListener('click', function() {
    profileStatus.innerHTML = 'You are no longer friends'
    profileStatus.style.color = 'red'
    profileStatus.style.fontSize = '20px'
})
*/

// Add and Remove Functionality on Single Button

addFriend.addEventListener("click", function () {
  if (profileStatusCheck == 0) {
    profileStatus.innerHTML = "Friends";
    profileStatus.style.color = "green";
    addFriend.innerHTML = "Remove Friend";
    profileStatus.style.fontSize = "30px";
    profileStatusCheck = 1;
  } else {
    alert("Your are Removing Him/Her from your Friend circle");
    profileStatus.innerHTML = "You are no longer friends";
    profileStatus.style.color = "red";
    profileStatus.style.fontSize = "20px";
    addFriend.innerHTML = "Add Friend";
    profileStatusCheck = 0;
  }
});
