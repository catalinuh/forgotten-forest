import { Footer, Header } from './app/layout';
import { GetInvolved, Home } from './app/pages';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <GetInvolved />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
