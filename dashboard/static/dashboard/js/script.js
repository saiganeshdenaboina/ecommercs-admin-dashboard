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

// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.getElementById('mainContainer');
    sidebar.classList.toggle("collapsed");
    mainContainer.classList.toggle("collapsed");
}

// Search functionality for the sidebar
function searchFunction() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(input)) {
            link.style.display = "flex";
        } else {
            link.style.display = "none";
        }
    });
}

// Toggle Notifications Dropdown
function toggleNotifications() {
    const dropdown = document.getElementById("notificationsDropdown");
    dropdown.classList.toggle("show");
}

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    const dropdown = document.getElementById("notificationsDropdown");
    if (!event.target.closest(".dropdown")) {
        dropdown.classList.remove("show");
    }
});

// Toggle Profile Dropdown
function toggleProfileDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("show");
}

// Close profile dropdown when clicking outside
document.addEventListener("click", (event) => {
    const dropdown = document.getElementById("profileDropdown");
    if (!event.target.closest(".profile-dropdown")) {
        dropdown.classList.remove("show");
    }
});

// Toggle Dark Mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save preference to localStorage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Apply saved dark mode preference on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

// Initialize Chart.js
function loadChart() {
    const chartElement = document.getElementById('salesChart');
    if (chartElement) {
        const chartData = JSON.parse(chartElement.getAttribute('data-chart'));
        const ctx = chartElement.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Sales',
                    data: chartData.data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    }
}

// Load the chart on page load
document.addEventListener("DOMContentLoaded", loadChart);

// Initialize Analytics Chart
function loadAnalyticsChart() {
    const chartElement = document.getElementById('analyticsChart');
    if (chartElement) {
        const chartData = JSON.parse(chartElement.getAttribute('data-chart'));
        const ctx = chartElement.getContext('2d');
        new Chart(ctx, {
            type: 'bar', // Bar chart for analytics
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Sales',
                    data: chartData.data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Months'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Revenue ($)'
                        }
                    }
                }
            }
        });
    }
}

// Load the analytics chart on page load
document.addEventListener("DOMContentLoaded", loadAnalyticsChart);

// Initialize Sales Chart
function loadSalesChart() {
    const chartElement = document.getElementById('salesPerformanceChart');
    if (chartElement) {
        const chartData = JSON.parse(chartElement.getAttribute('data-chart'));
        const ctx = chartElement.getContext('2d');
        new Chart(ctx, {
            type: 'line', // Line chart for sales performance
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Sales',
                    data: chartData.data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Months'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Revenue ($)'
                        }
                    }
                }
            }
        });
    }
}

// Load the sales chart on page load
document.addEventListener("DOMContentLoaded", loadSalesChart);

// Initialize Overview Chart
function loadOverviewChart() {
    const chartElement = document.getElementById('overviewChart');
    if (chartElement) {
        const chartData = JSON.parse(chartElement.getAttribute('data-chart'));
        const ctx = chartElement.getContext('2d');
        new Chart(ctx, {
            type: 'line', // Line chart for overview
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Revenue',
                    data: chartData.data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Months'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Revenue ($)'
                        }
                    }
                }
            }
        });
    }
}

// Load the overview chart on page load
document.addEventListener("DOMContentLoaded", loadOverviewChart);

// Redirect to specific pages when cards are clicked
function redirectTo(page) {
    const urls = {
        sales: "{% url 'sales' %}",
        orders: "{% url 'orders' %}",
        customers: "{% url 'customers' %}",
        inventory: "{% url 'inventory' %}"
    };
    if (urls[page]) {
        window.location.href = urls[page];
    }
}

// Scatter Plot Graph
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('scatterChart').getContext('2d');

    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'User Data',
                data: [
                    { x: 10, y: 20 },
                    { x: 15, y: 10 },
                    { x: 20, y: 30 },
                    { x: 25, y: 25 },
                    { x: 30, y: 15 }
                ],
                backgroundColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });
});

// Revenue Chart
document.addEventListener("DOMContentLoaded", () => {
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Revenue',
                data: [1000, 2000, 3000, 4000, 5000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Months'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Revenue ($)'
                    }
                }
            }
        }
    });

    // Sales Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Sales',
                data: [50, 100, 150, 200, 250],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Months'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales'
                    }
                }
            }
        }
    });
});
