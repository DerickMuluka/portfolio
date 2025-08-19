document.addEventListener('DOMContentLoaded', function() {
    const skillsChart = document.getElementById('skillsChart');
    
    if (skillsChart) {
        const ctx = skillsChart.getContext('2d');
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Frontend', 'Backend', 'Database', 'DevOps', 'Networking', 'UI/UX', 'Mobile'],
                datasets: [{
                    data: [85, 80, 75, 70, 65, 80, 60],
                    backgroundColor: [
                        '#6a4c93',
                        '#8a6cb3',
                        '#a98fd3',
                        '#c8b1e3',
                        '#e7d9f3',
                        '#f5f0fa',
                        '#ffffff'
                    ],
                    borderWidth: 0,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            font: {
                                family: 'Poppins',
                                size: 12
                            },
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }
});
