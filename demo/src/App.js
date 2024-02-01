import Ayush from './Ayush';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
function App() {
  let condition=true
  let tag;
  if(condition){
    tag=<LoginPage/>
  }else{
    tag=<RegistrationPage/>
  }
  return (<>
      <Ayush />
      <h1>Hello world </h1>
      {tag}
      </>
  );
}

export default App;
