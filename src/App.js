import Currencys from './component/Currencys/Currencys';
import Converter from './component/Converter/Converter';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <Currencys />
      <Converter />
    </div>
  );
}