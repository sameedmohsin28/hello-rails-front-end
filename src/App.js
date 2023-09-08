import { Route, Routes } from 'react-router-dom';
import Greeting from './Components/Greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
