
import ContactForm from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/projects'

function App() {
  

  return (
    
    <main className="bg-[#F2F4F7] scroll-smooth overflow-y-scroll h-lvh ">
      <Navbar/>
      <Home/>
      <Projects/>
      <ContactForm/>

    </main>
    
  )
}

export default App
