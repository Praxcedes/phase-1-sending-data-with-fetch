function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(data => {
    // Append the ID to the DOM
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.textContent = data.id;
    body.appendChild(p);
  })
  .catch(error => {
    // Append error message to the DOM
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.textContent = error.message;
    body.appendChild(p);
  });
}

