// Wait for the full HTML to load before running any script
document.addEventListener("DOMContentLoaded", () => {
  // --- Contact Form Submission (on contact.html) ---
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent the form from refreshing the page

      // Get input values
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // Basic validation
      if (!name || !email.includes("@") || !message) {
        response.textContent = "Please fill out all fields correctly.";
        response.style.color = "orange";
        return;
      }

      // Show sending message
      response.textContent = "Sending...";
      response.style.color = "white";

      try {
        // Send POST request using fetch()
        const res = await fetch("https://reqres.in/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        const data = await res.json();

        if (res.ok) {
          response.textContent = "Thank you! Your message has been sent ✅";
          response.style.color = "lightgreen";
          form.reset(); // Clear the form
        } else {
          response.textContent = "Oops! Something went wrong.";
          response.style.color = "red";
        }
      } catch (error) {
        response.textContent = "Network error. Try again later.";
        response.style.color = "red";
      }
    });
  }

  // --- Quote Button (on index.html or about.html) ---
  const quoteBtn = document.getElementById("getQuoteBtn");
  const quoteText = document.getElementById("quoteText");

  if (quoteBtn && quoteText) {
    quoteBtn.addEventListener("click", () => {
      quoteText.textContent = "Loading...";

      fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
          quoteText.textContent = `"${data.content}" — ${data.author}`;
        })
        .catch(() => {
          quoteText.textContent = "Failed to load quote.";
        });
    });
  }
});
