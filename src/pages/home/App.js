import '../../styles/home/general.css';

import Header from './Header';
import Hero from './Hero';
import Experience from './Experience';
import Organize from './Organize';
import Action from './Action';
import Secure from './Secure';
import Started from './Started';
import Footer from './Footer';

const App = () => {
  return (
    <main>
      <Hero />
      <Experience />
      <Organize />
      <Action />
      <Secure />
      <Started />
      <Footer />
    </main>
  );
}

export {
  App,
  Header,
};
