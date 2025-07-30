document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!email.endsWith("@nitt.edu")) {
        document.getElementById("error").innerText = "Only NIT emails allowed!";
        return;
      }

      localStorage.setItem("user", JSON.stringify({ name, email }));
      alert("Signup successful!");
      window.location.href = "matches.html";
    });
  }
});
