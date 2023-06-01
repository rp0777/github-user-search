const ApiUrl = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.getElementById("search");

const getUserDetails = async (username) => {
  const res = await fetch(ApiUrl + username);
  const data = await res.json();

  const card = `
  <div class="card bg-dark bg-gradient justify-content-evenly rounded-4">
  <div class="row g-0 p-4">
    <div class="col-6 col-md-3 p-3">
      <img
        src="${data.avatar_url}"
        class="card-img object-fit-cover img-fluid rounded-circle border border-5"
        alt="avatar"
      />
    </div>
    <div class="col-6 col-md-9 text-white" id="userDetail">
      <div class="card-body d-flex flex-column">
        <h3 class="card-title pb-2">${data.name}</h3>
        <p class="pb-2">
          ${data.bio}
        </p>
        <div class="d-flex justify-content-between" id="stats">
          <p><strong>Followers:</strong> ${data.followers}</p>
          <p><strong>Following:</strong> ${data.following}</p>
          <p><strong>Repos:</strong> ${data.public_repos}</p>
        </div>
        <div class="d-flex justify-content-between" id="stats">
          <p><strong>Twitter:</strong> ${data.twitter_username}</p>
          <p><strong>Location:</strong> ${data.location}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  main.innerHTML = card;
};

const formSubmit = (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  if (searchBox.value !== "") {
    getUserDetails(searchBox.value);
    searchBox.value = "";
  }

  return false;
};

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    formSubmit(event);
  }
});
