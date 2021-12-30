import Books from './components/page/Books';
import BookDetail from './components/page/BookDetail';
import BookSearch from './components/page/BookSearch';
import About from './components/page/About'
import Home from './components/page/Home'


const routes = [
  {title:"Home",  path:"/",  element:Home, isNav:true },
  {title:"About",  path:"about",  element:About, isNav:true },
  {title:"Books",  path:"books",  element:Books, isNav:true },
  {title:"Book Detail",  path:"books/:abbrev",  element:BookDetail, isNav:false },
  {title:"Search",  path:"arama",  element:BookSearch, isNav:false }
  

]

export default routes;