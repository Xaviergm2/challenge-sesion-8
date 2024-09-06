document
  .getElementById("notify-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Thank you! We will notify you at ${email} when we launch.`);
  });
