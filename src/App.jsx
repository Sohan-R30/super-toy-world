import './App.css'
import Footer from './componennts/shared/Footer'
import Header from './componennts/shared/Header'
import Registration from './pages/Login/Registration'

function App() {

  return (
    <>
      <Header></Header>
      <div className='min-h-[50vh]'>
        {/* <Login></Login> */}
        <Registration></Registration>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
