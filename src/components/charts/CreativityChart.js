import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


const CreativityChart = () => {
  return (
    <div className="CreativityChart">
        <Doughnut
            data={{
                labels: ['Nada de creatividad', 'Creatividad Pobre', 'Creatividad Promedio', 'Ligeramente mejor que el promedio', 'Buen índice de creatividad', 'Creatividad Excepcional'],
                datasets: [
                    {
                        label: '# of votes',
                        data: [12, 19, 10, 5,10, 10],
                        backgroundColor: [
                            'rgba(128, 128, 128, 0.8)',
                            'rgba(172, 115, 57, 0.8)',
                            'rgba(0, 230, 115, 0.8)',
                            'rgba(77, 166, 255, 0.8)',
                            'rgba(255, 153, 187, 0.8)',
                            'rgba(166, 77, 255, 0.9)'
                        ],
                        borderColor: [
                            'rgba(128, 128, 128, 1)',
                            'rgba(172, 115, 57, 1)',
                            'rgba(0, 230, 115, 1)',
                            'rgba(77, 166, 255, 1)',
                            'rgba(255, 153, 187, 1)',
                            'rgba(166, 77, 255, 1)'
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
                        text: 'Creatividad',
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

export default CreativityChart