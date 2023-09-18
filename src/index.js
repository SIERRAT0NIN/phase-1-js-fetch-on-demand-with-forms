const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const input = document.querySelector("input#searchByID");
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;

        console.log(data);
      });

    e.target.reset();
    // e.target.children[1].value;
    console.log(input.value);
  });
};

document.addEventListener("DOMContentLoaded", init);
