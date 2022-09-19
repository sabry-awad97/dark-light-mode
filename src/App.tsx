import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Theme } from './components/Theme';

const App = () => {
  return (
    <>
      <Theme />
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
