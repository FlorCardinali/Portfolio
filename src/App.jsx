import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
//  bg-gradient-to-t to-bgColor from-secondary

function App() {
  return (
    <div className="container-fluid">
      <header className="container-fluid">
        <NavBar/>
        <Hero/>
      </header>
      <main className="bg-secundary">
        <h2>asdasdasd</h2>
      </main>
      
      <footer>

      </footer>
    </div>
  )
}

export default App
