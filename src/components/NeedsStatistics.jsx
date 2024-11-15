// src/components/NeedsStatistics.js
import { useContext } from 'react';
import { NeedsContext } from '../context/NeedsContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, Legend, ResponsiveContainer } from 'recharts';

const NeedsStatistics = () => {
  const { needs } = useContext(NeedsContext);

  // Agrupar datos por entidad para contar la cantidad de necesidades
  const needsByEntity = needs.reduce((acc, need) => {
    acc[need.entidad] = (acc[need.entidad] || 0) + 1;
    return acc;
  }, {});

  // Formato de datos para el gráfico de barras de entidades
  const entityData = Object.keys(needsByEntity).map(entity => ({
    name: entity,
    count: needsByEntity[entity]
  })).sort((a, b) => b.count - a.count); // Ordenamos de mayor a menor

  // Agrupar datos por modalidad de contratación
  const needsByContractType = needs.reduce((acc, need) => {
    acc[need.modalidad_de_contratacion] = (acc[need.modalidad_de_contratacion] || 0) + 1;
    return acc;
  }, {});

  // Formato de datos para el gráfico de torta de modalidades de contratación
  const contractTypeData = Object.keys(needsByContractType).map(type => ({
    name: type,
    count: needsByContractType[type]
  }));

  // Preparar los datos para el gráfico de rango de precios, ordenados por precio base
  const priceData = needs
    .filter(need => need.precio_base) // Filtrar las necesidades que tienen un precio definido
    .sort((a, b) => a.precio_base - b.precio_base) // Ordenar de menor a mayor
    .map((need, index) => ({
      name: `Necesidad ${index + 1}`,
      precio: need.precio_base
    }));

  return (
    <div className="needs-statistics">
      <h2>Estadísticas de Necesidades</h2>

      {/* Gráfico de Barras: Número de Necesidades por Entidad */}
      <h3>Número de Necesidades por Entidad</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={entityData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      {/* Gráfico de Torta: Modalidades de Contratación */}
      <h3>Modalidad de Contratación</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={contractTypeData}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {contractTypeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#82ca9d' : '#8884d8'} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* Gráfico de Línea: Rango de Precios de Necesidades */}
      <h3>Rango de Precios (Menor a Mayor)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={priceData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="precio" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NeedsStatistics;
