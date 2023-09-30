const chartConfigurations = {};

let charts = $('.chart-cont canvas'),
    numberRollers = $('.trend-amount');

const parsePercent = (c,v) => {
    let l = c.label || 'Other';
    return (l += `: ${v || c.parsed || '0'}%`);
}

let toolClientCountryPercents = [
    '+216%',
    '+900%',
    '+600%',
    '+135%',
    '+55%',
    '+474%',
]

const parsePercentChange = (c,v1, v2) => {
    let l = 'Q4 → Q1: '
    return (l += `${(v1/v2)*100}%`)
}

chartConfigurations.rcsConfig = {
    id: "rcsChart",
    type: 'doughnut',
    data: {
        labels: [
            'Business Services',
            'Non-Profit',
            'Government',
            'Media and Communications',
            'Transportation and Shipping',
        ],
        datasets: [{
            data: [9, 7, 3, 3, 3, 75],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#fff0',
            ],
            cutout: '0%',
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
        },
        {
            data: [9, 7, 3, 3, 3, 75],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#ffffff14',
            ],
            cutout: '50%',
            radius: '100%',
            borderWidth: 0,
            spacing: 3,
        }
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'Ransomware Customer Sectors',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        },
    }
};

chartConfigurations.cirConfig = {
    id: "cirChart",
    type: 'line',
    data: {
        labels: [
            'Turkey',
            'Switzerland',
            'United States',
            'Germany',
            'Netherlands',
        ],
        datasets: [{
            label: 'Q3',
            data: [12.2, 7.1, 34.4, 11.8, 0.2],
            backgroundColor: '#fa9600',
            borderColor: '#fa9600',
            pointStyle: 'circle',
            pointRadius: 8,
            pointHoverRadius: 12,
        },
        {
            label: 'Q4',
            data: [22.5, 18.5, 12.6, 8.2, 7.5],
            backgroundColor: '#ebc80a',
            borderColor: '#ebc80a',
            pointStyle: 'circle',
            pointRadius: 8,
            pointHoverRadius: 12,
        },
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                },
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            },
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: true,
                position: 'right',

                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'Change in Ransomware Client Countries',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: (d) => {
                        return parsePercent(d.dataset, d.raw)
                    }
                }
            }
        }
    }
};

chartConfigurations.ecsConfig = {
    id: "ecsChart",
    type: 'doughnut',
    data: {
        labels: [
            'Telecom',
            'Transportation and Shipping',
            'Business Services',
            'Government',
            'Non-Profit',
        ],
        datasets: [{
            label: 'Enterprise Customer Sectors',
            data: [47, 27, 8, 7, 6, 5],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#fff0',
            ],
            cutout: 0,
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
        },
        {
            data: [47, 27, 8, 7, 6, 5],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#ffffff14',
            ],
            cutout: '50%',
            radius: '100%',
            borderWidth: 0,
            spacing: 1.5,
        },
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'Enterprise Customer Sectors',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        },
    }
};

chartConfigurations.ecsConfig2 = {
    id: "ecsChart2",
    type: 'doughnut',
    data: {
        labels: [
            'Transportation',
            'Telecom',
            'Consumer',
            'Business Services',
            'Technology',
        ],
        datasets: [{
            data: [62, 16, 6, 5, 4, 7],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#fff0',
            ],
            cutout: 0,
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
        },
        {
            data: [62, 16, 6, 5, 4, 7],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#ffffff14',
            ],
            cutout: '50%',
            radius: '100%',
            borderWidth: 0,
            spacing: 3,
        },
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'Ransomware\nCustomer Sectors',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        }
    }
};

chartConfigurations.avConfig = {
    id: "avChart",
    type: 'doughnut',
    data: {
        labels: [
            'Malware',
            'Unknown',
            'Account Takeover',
            'Vulnerability',
            'Targeted Attack',
        ],
        datasets: [{
            label: 'Attack Vectors',
            data: [46, 19, 16, 10, 8],
            backgroundColor: [
                '#00a5ffff',
                '#00a5ffcc',
                '#00a5ff99',
                '#00a5ff66',
                '#00a5ff33',
            ],
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
            cutout: '75%'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                align: 'start',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'Attack Vectors',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        },
    }
};

chartConfigurations.asConfig = {
    id: "asChart",
    type: 'doughnut',
    data: {
        labels: [
            'Individuals',
            'Healthcare',
            'Technology',
            'Public',
            'Education',
        ],
        datasets: [{
            data: [14, 12, 6, 6, 6, 56],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#fff0',
            ],
            cutout: 0,
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
        },
        {
            data: [14, 12, 6, 6, 6, 56],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#ffffff14',
            ],
            cutout: '50%',
            radius: '100%',
            borderWidth: 0,
            spacing: 3,

        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'Attack Sectors',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        },
    }
};

chartConfigurations.usRansomwareFamiliesConfig = {
    id: "usRansomwareFamilies",
    type: 'doughnut',
    data: {
        labels: [
            'Lockbit',
            'Conti',
            'BlackCat',
            'Ryuk',
        ],
        datasets: [{
            data: [26,13,11,10,40],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                // '#a537b4',
                '#fff0',
            ],
            cutout: '0%',
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
        },
        {
            data: [26,13,11,10,40],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                // '#a537b4',
                '#ffffff14',
            ],
            cutout: '50%',
            radius: '100%',
            borderWidth: 0,
            spacing: 3,
        }
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'U.S. Ransomware Families Q1 2022',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        },
    }
};

chartConfigurations.globalRansomwareConfig = {
    id: "globalRansomwareConfig",
    type: 'doughnut',
    data: {
        labels: [
            'Telecom',
            'Business Services',
            'Media & Communications',
            'Finance',
            'Transportation & Shipping',
        ],
        datasets: [{
            data: [53,19,10,5,4,9],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#fff0',
            ],
            cutout: '0%',
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
        },
        {
            data: [53,19,10,5,4,9],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#ffffff14',
            ],
            cutout: '50%',
            radius: '100%',
            borderWidth: 0,
            spacing: 3,
        }
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'U.S. Ransomware Families Q1 2022',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        },
    }
};

chartConfigurations.malwareFamiliesConfig = {
    id: "malwareFamilies",
    type: 'doughnut',
    data: {
        labels: [
            'Phorpiex',
            'Electron Bot',
            'RedLine Stealer',
            'Agent Tesla',
            'Remcos RAT',
        ],
        datasets: [{
            data: [23,13,10,10,9,25],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#fff0',
            ],
            cutout: '0%',
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
        },
        {
            data: [23,13,10,10,9,25],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#ffffff14',
            ],
            cutout: '50%',
            radius: '100%',
            borderWidth: 0,
            spacing: 3,
        }
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        },
    }
};

chartConfigurations.toolClientCountryConfig = {
    id: "toolClientCountry",
    type: 'line',
    data: {
        labels: [
            'Germany',
            'Israel',
            'United\nStates',
            'India',
            'Turkey',
            'United\nKingdom',
        ],
        datasets: [{
            label: 'Q4',
            data: [85,71,61,51,41,41],
            backgroundColor: '#fa9600',
            borderColor: '#fa9600',
            pointStyle: 'circle',
            pointRadius: 8,
            pointHoverRadius: 12,
        },
        {
            label: 'Q1',
            data: [26,7.5,9,3.5,27,7],
            backgroundColor: '#ebc80a',
            borderColor: '#ebc80a',
            pointStyle: 'circle',
            pointRadius: 8,
            pointHoverRadius: 12,
        },
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                },
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            },
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: true,
                align: 'end',
                position: 'top',

                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'Tool Client Country Detections',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                displayColors: false,
                callbacks: {
                    label: (d) => {
                        return d.dataset.label == 'Q4'?
                        `Q4 → Q1: ${toolClientCountryPercents[d.dataIndex]}`
                        :null;
                    }
                }
            }
        }
    }
};

chartConfigurations.toolSectorsConfig = {
    id: "toolSectors",
    type: 'doughnut',
    data: {
        labels: [
            'Telecom',
            'Business Services',
            'Media & Communications',
            'Finance',
            'Transportation & Shipping',
        ],
        datasets: [{
            data: [56,16,10,6,5,7],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#fff0',
            ],
            cutout: '0%',
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
        },
        {
            data: [56,16,10,6,5,7],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#ffffff14',
            ],
            cutout: '50%',
            radius: '100%',
            borderWidth: 0,
            spacing: 3,
        }
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'Tool Sectors Q1 2022 Detections',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        },
    }
};

chartConfigurations.vulnerableDeviceConfig = {
    id: "vulnerableDevice",
    type: 'doughnut',
    data: {
        labels: [
            'Apps',
            'Control Panel',
            'Defibrillator',
            'Diabetes Machine',
            'IV Pumps',
            'Patient Monitor',
            'Portal',
            'Records and Management',
            'Telehealth',
            'Ventilator',
            'Other',
        ],
        datasets: [{
            data: [7,6,5,7,14,7,3,17,6,5,23],
            backgroundColor: [
                '#00a5ff',
                '#5dc93b',
                '#ebc80a',
                '#fa9600',
                '#a537b4',
                '#cd2364',
                '#7ed0fc',
                '#f9e382',
                '#83fc83',
                '#fcc883',
                '#eb8dfc',
            ],
            cutout: '33%',
            radius: '100%',
            borderWidth: 0,
            spacing: 2,
        },
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    boxWidth: 16,
                    boxHeight: 16,
                    color: '#fff',
                    font: {
                        family: '"Aventa", "Arial", sans-serif',
                        weight: '500',
                        size: 16
                    }
                },
            },
            title: {
                display: true,
                align: 'start',
                text: 'Tool Sectors Q1 2022 Detections',
                color: '#fff',
                font: {
                    family: '"Aventa", "Arial", sans-serif',
                    weight: '500',
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: parsePercent
                }
            }
        },
    }
};

const generateChart = (chartElement) => {
    // Get scroll position of page
    let hScroll = $('html').scrollTop();

    let elY = (chartElement.offset().top + chartElement.height()) - (hScroll + window.innerHeight);

    // If element is on screen
    // ie if element is below top of viewport & element is above bottom of viewport
    if (elY < 0) {
        chartConfigId = chartElement.attr('chart-config');
        let newChart = new Chart(chartElement, chartConfigurations[chartConfigId]);
        chartElement.addClass('chart-drawn');
    }
}

const rollNumbers = (numberRoller) => {
    let hScroll = $('html').scrollTop(),
        num = parseInt(numberRoller.html());

    let elY = (numberRoller.offset().top + 100) - (hScroll + window.innerHeight);

    if (elY < 0) {
        numberRoller.addClass('rolled');
        numberRoller.rollNumber({
            number: num,
            speed: 1500,
            space: 36,
            fontStyle: {
                'font-size': '60px',
                color: 'inherit'
            }
        });
    }
}

$(function() {
    charts.each((i, e) => $(window).scroll(function() {
        !$(e).hasClass('chart-drawn') && generateChart($(e));
    }));

    numberRollers.each((i, e) => $(window).scroll(function() {
        !$(e).hasClass('rolled') && rollNumbers($(e));
    }));
})