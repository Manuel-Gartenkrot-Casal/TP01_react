import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './Formulario.jsx'
import Cita from './Cita.jsx'
import Buscador from './Buscador.jsx'

function App() {
  const [citas] = useState([
    {
      mascota: "Nina",
      dueno: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      dueno: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      dueno: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ]);
  return (
    <>
      <h1>Administrador de pacientes</h1>

      <Formulario />
<Cita citas={citas} />
      <Buscador />
    </>
  )
}
export default App;