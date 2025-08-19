document.addEventListener('DOMContentLoaded', function() {
    const skillsChart = document.getElementById('skillsChart');
    
    if (skillsChart) {
        const ctx = skillsChart.getContext('2d');
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Frontend', 'Backend', 'Database', 'DevOps', 'Networking', 'UI/UX', 'Mobile'],
                datasets: [{
                    label: 'Technical Skills',
                    data: [85, 80, 75, 70, 65, 80, 60],
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                    pointRadius: 4
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: {
                            stepSize: 20,
                            backdropColor: 'transparent'
                        },
                        pointLabels: {
                            font: {
                                family: 'Poppins',
                                size: 12
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.1
                    }
                }
            }
        });
    }
});

