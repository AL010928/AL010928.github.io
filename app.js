document.addEventListener("DOMContentLoaded", () => {
    // Get the current page's URL path
    const page = window.location.pathname.split("/").pop() || "index.html";

    // Load the content of the page
    fetch(page)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Page not found");
            }
        })
        .then(html => {
            document.getElementById("main-content").innerHTML = html;
        })
        .catch(error => {
            document.getElementById("main-content").innerHTML =
                "<h1>Error</h1><p>Content could not be loaded.</p>";
        });
});
