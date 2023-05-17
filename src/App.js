import First_Task from './components/First_Task';
import Second_Task from './components/Second_Task';
import Third_Task from './components/Third_Task';
import Fourth_Task from './components/Fourth_Task';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h4 className='text-center mt-3 text-success '><i class="bi bi-boxes"></i> <u>React Routing</u></h4>
      <BrowserRouter>
        <Routes>
          <Route path='/First_Task' element={<First_Task />} />
          <Route path='/Second_Task' element={<Second_Task />} />
          <Route path='/Third_Task' element={<Third_Task /> } />
          <Route path='/Fourth_Task' element={<Fourth_Task />} />
        </Routes>
      </BrowserRouter>
      {/* <First_Task /><hr></hr>
      <Second_Task /><hr></hr>
      <Third_Task /><hr></hr>
      <Fourth_Task /> */}
    </>
  );
}

export default App;
