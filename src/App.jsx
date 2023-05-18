import './App.css'
import Error from './componennts/shared/Error/Error'
import Footer from './componennts/shared/Footer'
import Header from './componennts/shared/Header'

function App() {

  return (
    <>
      <Header></Header>
      {/* <div className='min-h-[50vh]'> */}
      <Error></Error>
      {/* </div> */}
      <Footer></Footer>
    </>
  )
}

export default App
