import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <div className='App'>
      <Header/>
      <div className='mainApp'>
        <Navigation/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default App
