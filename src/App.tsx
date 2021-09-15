import './App.css';
import MyProvider from './Components/contextProvider';
import { Parent } from './Components/Parent-component';

function App() {
  return (
    <MyProvider fruits={[]} vegetales={[]}>
      <div className='App-header'>
        <Parent />
      </div>
    </MyProvider>
  );
}

export default App;
