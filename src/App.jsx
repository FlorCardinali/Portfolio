import NavBar from "./components/NavBar"
import Hero from "./components/Hero"


function App() {
  return (
    <div className="container-fluid bg-gradient-to-t to-bgColor from-secondary">
      <header className="container-fluid">
        <NavBar/>
        <Hero/>
      </header>
      <main className="bg-bgColor">
        <h2>asdasdasd</h2>
      </main>
      
      <footer>

      </footer>
    </div>
  )
}

export default App
