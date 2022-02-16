import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


const HumorChart = () => {
  return (
    <div className="HumorChart">
        <Doughnut
            data={{
                labels: ['Sufre de seriositis crónica', 'Deficiencia del sentido del humor', 'Sentido del humor un poco deteriorado', 'Sentido del humor promedio y saludable', 'Excelente sentido del humor y actitud'],
                datasets: [
                    {
                        label: '# of votes',
                        data: [12, 19, 10, 5,10],
                        backgroundColor: [
                            'rgba(255, 0, 0, 0.7)',
                            'rgba(255, 159, 64, 0.8)',
                            'rgba(255, 255, 102, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(92, 214, 92, 0.8)',
                        ],
                        borderColor: [
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 255, 102, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(92, 214, 92, 1)',
                        ],
                        borderWidth: 2,
                    },
                ],
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
                plugins: {
                    legend: {
                        position: 'right',
                        labels:{
                            font: {
                                size: 20
                            },
                        },
                    },
                    title: {
                        display: 'true',
                        text: 'Sentido del Humor',
                        position: 'top',
                        font: {
                            size: 28
                        }
                    }    
                }
            }}

        />
    </div>
  )
}

export default HumorChart