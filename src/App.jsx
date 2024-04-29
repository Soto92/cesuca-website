/**
 * Nomes: 
 *          Mauricio Soto
 *          Rodrigo Pereira
 *          Thiago Amaral
 * Cadeira:
 *          Desenvolvimento Web
 */
import './App.css'
import Header from './components/header';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header/>
      <div style={{ flexGrow: '1',  boxSizing: 'border-box' }}>
        <h2 style={{ margin: '0' }}>Body</h2>
      </div>
      <div style={{ backgroundColor: 'grey',  }}>
        <p style={{ margin: '0', textAlign: 'center' }}>Footer</p>
      </div>
    </div>
  );
};

export default App;
