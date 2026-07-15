document.addEventListener("DOMContentLoaded", () => {
    const cupFill = document.querySelector(".cup-fill");
    const summary = document.getElementById("summary");
    const badges = document.querySelectorAll(".badge");

    function updateOrder() {
        const drink = document.querySelector('input[name="drink"]:checked').value;
        const size = document.querySelector('input[name="size"]:checked').value;
        const milk = document.querySelector('input[name="milk"]:checked').value;
        const extras = Array.from(
            document.querySelectorAll('input[name="extras"]:checked'),
        ).map((el) => el.parentElement.textContent.trim());

        const colorMap = {
            espresso: "#1e0c04",
            latte: "#7b4f2e",
            cappuccino: "#b07442",
            matcha: "#4a7c3f",
            chai: "#b5812a",
        };
        cupFill.style.background = colorMap[drink] || "#6f4e37";

        const sizeMap = {
            small: "40%",
            medium: "65%",
            large: "90%",
        };
        cupFill.style.height = sizeMap[size];

        // Badge activation only when extras selected
        badges.forEach((badge) => {
            const label = badge.getAttribute("aria-label").replace("-", " ");
            badge.classList.toggle(
                "active",
                extras.some((e) => e.includes(label)),
            );
        });

        // Summary display
        summary.innerHTML = `
        <h3>Summary</h3>
        <h5>You ordered a ${size} ${drink} with ${milk} milk ${extras.length ? " + " + extras.join(", ") : ""}.</h5>
        `;
    }
    // Default summary on load
    summary.innerHTML = `
     <h3>Summary</h3>
     <h5>Default selection: Medium Espresso with Regular milk.</h5>
     `;

    //setting style for summary => h3 and h5
    const h3 = summary.querySelector("h3");
    const h5 = summary.querySelector("h5");

    h3.style.color = "#D7A86E";
    h5.style.color="#F6EDD1"

    // find inputs
    document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", updateOrder);
    });
});
