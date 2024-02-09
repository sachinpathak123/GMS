import './index.css';
import Navbar from './navbar'
import Header from './header';
import Content from './content'
import CardList from './Cards';
import Pagination from './pagination';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Content/>
      <h1 className=' mt-24 px-48 font-bold text-2xl'>All Blogs</h1>
      <CardList/>
      <Pagination/>
    </>
  );
}

export default App;
