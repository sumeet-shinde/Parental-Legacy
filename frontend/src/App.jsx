import React, { useState } from 'react';
import './App.css'; // Import CSS for styling
import { useEffect } from 'react';

function App() {
  const [selectedDate, setSelectedDate] = useState(1);
  const [motherValues, setMotherValues] = useState([]);
  const [fatherValues, setFatherValues] = useState([]);
  const [totalValues, setTotalValues] = useState([]);
  const [minValues, setMinValues] = useState([]);
  const [maxValues, setMaxValues] = useState([]);
  const [overallTotal, setOverallTotal] = useState([]);

  // Mock API call (replace with your actual backend endpoint)
  const fetchParentalData = async (day) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/api/parental-legacy?day=${day}`); // Replace with your API URL
      const data = await response.json();
      setMotherValues([data.GeneticInheritance[0], data.ConstitutionalVitality[0], data.MentalPatterns[0], data.IntellectualCapacity[0], data.EmotionalFoundation[0], data.SpiritualLineage[0], data.SoulConnections[0]]);
      setFatherValues([data.GeneticInheritance[1], data.ConstitutionalVitality[1], data.MentalPatterns[1], data.IntellectualCapacity[1], data.EmotionalFoundation[1], data.SpiritualLineage[1], data.SoulConnections[1]]);
      setTotalValues([data.GeneticInheritance[2], data.ConstitutionalVitality[2], data.MentalPatterns[2], data.IntellectualCapacity[2], data.EmotionalFoundation[2], data.SpiritualLineage[2], data.SoulConnections[2]]);
      setMinValues([data.GeneticInheritance[3], data.ConstitutionalVitality[3], data.MentalPatterns[3], data.IntellectualCapacity[3], data.EmotionalFoundation[3], data.SpiritualLineage[3], data.SoulConnections[3]]);
      setMaxValues([data.GeneticInheritance[4], data.ConstitutionalVitality[4], data.MentalPatterns[4], data.IntellectualCapacity[4], data.EmotionalFoundation[4], data.SpiritualLineage[4], data.SoulConnections[4]]);
      setOverallTotal([data.OverallTotal[0], data.OverallTotal[1], data.OverallTotal[2]]);
    } catch (error) {
      console.log(error);
      alert('Error fetching data:', error);
    }
  };

  const handleDateChange = (day) => {
    setSelectedDate(day);
    fetchParentalData(day); // Call API when date changes
  };

  useEffect(() => {
    handleDateChange(new Date().getDate());
  }, []);

  return (
    <div className="app">
      <h1>Parental Legacy Calculator</h1>

      <div>
        <label htmlFor="datePicker">Select Day:</label>&nbsp;&nbsp;
        <select id="datePicker" value={selectedDate} onChange={(e) => handleDateChange(parseInt(e.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
          <option value={31}>31</option>
        </select>
      </div>

      <div>
        <h2>Parental Values</h2>
        <table>
          <thead>
            <tr>
              <th>LIFE FACTORS</th>
              <th>MOTHER</th>
              <th>FATHER</th>
              <th>TOTAL</th>
              <th>MINIMUM</th>
              <th>MAXIMUM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Genetic Inheritance</td>
              <td>{motherValues[0]}</td>
              <td>{fatherValues[0]}</td>
              <td>{totalValues[0]}</td>
              <td>{minValues[0]}</td>
              <td>{maxValues[0]}</td>
            </tr>
            <tr>
              <td>Constitutional Vitality</td>
              <td>{motherValues[1]}</td>
              <td>{fatherValues[1]}</td>
              <td>{totalValues[1]}</td>
              <td>{minValues[1]}</td>
              <td>{maxValues[1]}</td>
            </tr>
            <tr>
              <td>Mental Patterns</td>
              <td>{motherValues[2]}</td>
              <td>{fatherValues[2]}</td>
              <td>{totalValues[2]}</td>
              <td>{minValues[2]}</td>
              <td>{maxValues[2]}</td>
            </tr>
            <tr>
              <td>Intellectual Capacity</td>
              <td>{motherValues[3]}</td>
              <td>{fatherValues[3]}</td>
              <td>{totalValues[3]}</td>
              <td>{minValues[3]}</td>
              <td>{maxValues[3]}</td>
            </tr>
            <tr>
              <td>Emotional Foundation</td>
              <td>{motherValues[4]}</td>
              <td>{fatherValues[4]}</td>
              <td>{totalValues[4]}</td>
              <td>{minValues[4]}</td>
              <td>{maxValues[4]}</td>
            </tr>
            <tr>
              <td>Spiritual Lineage</td>
              <td>{motherValues[5]}</td>
              <td>{fatherValues[5]}</td>
              <td>{totalValues[5]}</td>
              <td>{minValues[5]}</td>
              <td>{maxValues[5]}</td>
            </tr>
            <tr>
              <td>Soul Connections</td>
              <td>{motherValues[6]}</td>
              <td>{fatherValues[6]}</td>
              <td>{totalValues[6]}</td>
              <td>{minValues[6]}</td>
              <td>{maxValues[6]}</td>
            </tr>
            <tr>
              <td>Overall Total</td>
              <td>{overallTotal[0]}</td>
              <td>{overallTotal[1]}</td>
              <td>{overallTotal[2]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
