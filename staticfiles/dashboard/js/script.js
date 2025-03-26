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

document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx, {
        type: 'line', // Set the default chart type here (can be changed later)
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales Data',
                data: [500, 1000, 1500, 2000, 2500, 3000],
                borderColor: '#007bff',
                borderWidth: 2,
                fill: true,
                backgroundColor: 'rgba(0, 123, 255, 0.1)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});