import { Footer, Header } from './app/layout';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      Welcome
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
