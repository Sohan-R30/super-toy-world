import './App.css'
import Footer from './componennts/shared/Footer'
import Header from './componennts/shared/Header'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <Header></Header>
      <div className='min-h-[50vh]'>
        <Login></Login>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
