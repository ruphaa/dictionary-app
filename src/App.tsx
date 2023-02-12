import styles from './App.module.css';
import { Search } from "./components/search/search";
import { Definition } from "./components/definition/definition";
import { DictionaryProvider } from "./context/dictionaryContext";
import { Header } from "./components/header/header";

function App() {
  
  return (
    <div className={styles.App}>
      <Header/>
      <main className={styles.main}>
        <DictionaryProvider>
          <Search/>
          <Definition/>
        </DictionaryProvider>
      </main>
    </div>
  );
}

export default App;
