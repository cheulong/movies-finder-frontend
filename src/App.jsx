import { useState } from "react"
import Search from "./components/Search"

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <main>

      <div className="wrapper">
        <header>
          <img src="./film.jpeg" alt="Hero banner" />
          <h1 data-testid="title">You'll Enjoy the <span className="text-gradient">Movies</span><br/> You find</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  )
}

export default App
