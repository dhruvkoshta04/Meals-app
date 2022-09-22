import "./App.css";
import Favourites from "./components/Favourites";
import { useGlobalContext } from './context'
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
function App() {
  const { showModal, favorites } = useGlobalContext()

  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favourites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
