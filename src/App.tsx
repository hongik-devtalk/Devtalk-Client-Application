import './App.css';
import { Button } from './components/Button/Button';
import { ButtonExSeminar } from './components/Button/ButtonExSeminar';
import { ChipSeminar } from './components/Chip/ChipSeminar';
import { ChipTimePlace } from './components/Chip/ChipTimePlace';

function App() {
  return (
    <>
      <div className="flex flex-col gap-8 pt-10">
        <Button variant="home" />
        <Button variant="default" />
        <Button variant="sub" />
        <Button variant="disabled" />
        <ButtonExSeminar />
        <ChipSeminar />
        <ChipTimePlace />
      </div>
    </>
  );
}

export default App;
