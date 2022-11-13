import 'primereact/resources/themes/md-dark-deeppurple/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './App.css';
import Layout from './layout/Layout';
import { Form } from './form/Form';
import { Crud } from './crud/Crud';

function App() {

  return (
    <div className="App">
      <Layout>
        {/* <Form />
        <Form /> */}
        <Crud />
      </Layout>
    </div>
  );
}

export default App;
