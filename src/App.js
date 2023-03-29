import logo from './logo.svg';
import './App.css';
import Addbooks from './Components/Addbooks';

function App() {
  return (
    <div className="App">
      <Libraray/>
      <Routes>
        <Route path='/' element={<ViewStudent/>}/>
        <Route path='/add'element={<AddStudents data={{Bookno:'', Bookname:''}}method="post"/>}/>
        </Routes>
    </div>
  );
}

export default App;
