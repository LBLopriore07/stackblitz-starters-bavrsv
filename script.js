console.log('Hello!');

// Function to get today's date
function todaysDate() {
    const d = new Date();
    return "Today's date is " + d.toDateString();
}
console.log(todaysDate());

// Set background color based on the current time
const body = document.body;
const d = new Date();

if (d.getHours() > 20 || d.getHours() < 8) {  // Check if it's night
    body.style.backgroundColor = "black";
    body.style.color = "white";
} else {  // It's daytime
    body.style.backgroundColor = "white";
    body.style.color = "black";
}

// Function to create a table dynamically
const makeTable = () => {
    const tableBody = document.getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear previous content

    const select = document.getElementById("tableOption");
    const rows = [
        ["Row 1 - Col 1", "Row 1 - Col 2"],
        ["Row 2 - Col 1", "Row 2 - Col 2"],
    ];

    if (select.value === "all") { // Populate table if "all" is selected
        rows.forEach(rowData => {
            const row = document.createElement("tr");
            rowData.forEach(cellData => {
                const cell = document.createElement("td");
                cell.textContent = cellData;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    }
};

// Enhanced Feature: Change heading text and style dynamically
const changeHeadingText = () => {
    const userInput = document.getElementById("inputText").value;
    const heading = document.getElementById("dynamicHeading");

    if (userInput.trim() !== "") {
        heading.textContent = userInput;
        heading.style.color = "tomato"; // Add dynamic style
        heading.style.fontSize = "2.5em"; // Modify font size
    } else {
        heading.textContent = "Default Heading Text";
        heading.style.color = "black"; // Reset styles
        heading.style.fontSize = "2em";
    }
};

// New Feature: Toggle Dark Mode
const toggleDarkMode = () => {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
};
