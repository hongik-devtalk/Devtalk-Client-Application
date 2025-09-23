import './App.css';
import { Button } from './components/Button/Button';

function App() {
  return (
    <>
      <div className="flex flex-col gap-8 pt-10">
        <Button variant="home" />
        <Button variant="default" />
        <Button variant="sub" />
        <Button variant="disabled" />
      </div>
    </>
  );
}

export default App;
