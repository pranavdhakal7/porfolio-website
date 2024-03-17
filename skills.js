// Array of technologies with names and icons
const technologies = [
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    // Add other technologies here...
];

// Function to fetch and display technologies
function displayTechnologies() {
    const container = document.getElementById('technologies-container');

    // Clear previous content
    container.innerHTML = '';

    // Loop through technologies array
    technologies.forEach(tech => {
        // Create elements for each technology
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        // Set attributes and content
        img.src = tech.icon;
        img.alt = tech.name;
        p.textContent = tech.name;

        // Append elements to container
        div.appendChild(img);
        div.appendChild(p);
        container.appendChild(div);
    });
}

// Call the function to display technologies when the page loads
window.onload = displayTechnologies;
