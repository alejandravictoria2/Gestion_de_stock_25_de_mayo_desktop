import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './StatisticsScreen.css'; // Archivo CSS para estilos

const StatisticsScreen = () => {
  // Datos de ejemplo para gráficos
  const stockData = [12, 19, 10, 5, 3, 8]; // Niveles de inventario por categoría
  const categories = ['Transformadores', 'Cables', 'Medidores', 'Interruptores', 'Fusibles', 'Conectores'];

  // Configuración de datos para gráficos
  const barData = {
    labels: categories,
    datasets: [
      {
        label: 'Niveles de Inventario',
        data: stockData,
        backgroundColor: categories.map(
          () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`
        ),
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Enero', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ventas Mensuales',
        data: [30, 45, 28, 80, 99, 43],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: categories,
    datasets: [
      {
        data: stockData,
        backgroundColor: categories.map(
          () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`
        ),
      },
    ],
  };

  return (
    <div className="container">
      <h1 className="header">Resumen de Estadísticas</h1>

      {/* Gráfico de Barras */}
      <div className="chart-container">
        <h2 className="chart-title">Niveles de Inventario por Categoría</h2>
        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Gráfico de Línea */}
      <div className="chart-container">
        <h2 className="chart-title">Ventas Mensuales</h2>
        <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Gráfico de Pastel */}
      <div className="chart-container">
        <h2 className="chart-title">Distribución de Inventario por Categoría</h2>
        <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default StatisticsScreen;
