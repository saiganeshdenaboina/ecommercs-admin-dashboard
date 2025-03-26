const sidebar = document.getElementById('sidebar');
const mainContainer = document.getElementById('mainContainer');
const sidebarTexts = document.querySelectorAll('.sidebar-text');
const dashboardCards = document.getElementById('dashboardCards');

// Card Hover Animation (Optional)
dashboardCards.addEventListener('mouseenter', () => {
    dashboardCards.classList.add('hovered');
});

dashboardCards.addEventListener('mouseleave', () => {
    dashboardCards.classList.remove('hovered');
});

function toggleSidebar() {
    sidebar.classList.toggle("collapsed");
    mainContainer.classList.toggle("collapsed");
    sidebarTexts.forEach(span => {
        span.classList.toggle('d-none');
    });
}

function loadPage(section) {
    document.getElementById("section-title").textContent = section;
    document.querySelectorAll(".content-section").forEach(el => el.classList.remove("active"));
    document.getElementById(section.toLowerCase()).classList.add("active");
}

function logout() {
    alert("Logging out...");
}

function searchFunction() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let sidebarLinks = document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(link => {
        let textSpan = link.querySelector(".sidebar-text");
        if (textSpan && textSpan.innerText.toLowerCase().includes(input)) {
            link.style.display = "flex";
        } else if (!sidebar.classList.contains("collapsed")) {
            link.style.display = "none";
        } else if (sidebar.classList.contains("collapsed") && link.querySelector("i")) {
            // Always show icons when sidebar is collapsed
            link.style.display = "flex";
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    loadChart();
});

// Function to dynamically load pages
function loadPage(page) {
    let content = document.getElementById('main-content');
    content.innerHTML = `<h2>Loading ${page}...</h2>`;

    setTimeout(() => {
        content.innerHTML = `<h2>Welcome to ${page}</h2>`;
    }, 500);
}

// Toggle sidebar
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("collapsed");
}

// Chart.js: Sales Data
function loadChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Sales',
                data: [3000, 5000, 7000, 4000, 8000, 10000, 12000],
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}
