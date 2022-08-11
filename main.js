const xhr = new XMLHttpRequest();
const s =
  "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
xhr.open("GET", s, true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    let output = "";
    for (let i = 0; i < response.length; i++) {
      output += `
        <div class="box-container">
           <img src="https://picsum.photos/250/?random=${i}">
            <div class="content-div">
                <p class="user-box">User - ${response[i].userId}</p>
                <p class="title-text">${response[i].title}</p>
                <p class="body-main">${response[i].body}</p>
            </div>
        </div>`;
    }
    document.querySelector(".container").innerHTML = output;
  }
};
xhr.send();