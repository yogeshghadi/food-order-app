import Header from './components/layout/Header';
import MealsSummary from './components/meal/MealsSummary';
import AvailableMeals from './components/meal/AvailableMeals';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
