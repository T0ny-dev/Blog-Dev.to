
import reactLogo from './assets/react.svg';
import Header from './containers/Header';
import "./App.css";
import Articles from './containers/Articles';
import {UserProvider} from "./contexts/UserContext"
import  ThemeProvider from "./contexts/ThemeContext";
import Layout from './containers/Layout';
import Footer from './containers/Footer';

function App() {

  return (
    <div className="App">
      <UserProvider>
        <ThemeProvider>
          <Layout >
            <Header/>
            <Articles/>
            <Footer/>
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </div>
  )
}

export default App
