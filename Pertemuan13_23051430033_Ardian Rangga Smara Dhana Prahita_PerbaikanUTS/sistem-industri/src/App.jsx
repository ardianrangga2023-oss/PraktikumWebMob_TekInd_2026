import {Routes, Route, Link} from 'react-router-dom'

import Dashboard from './Halaman/Dashboard'
import InputLaporan from './Halaman/InputLaporan'
import RiwayatData from './Halaman/RiwayatData'

function App () {
  return(
    <>
      <nav classname= 'navbar navbar-expand-lg navbar-dark bg-dark'>
          <div classname= 'container'>
            <Link classname='navbar-brand fw-bold' to={'/dashboard'} >PT Manufaktur Jaya Abadi</Link>
            <button classname=' navbar-toggler' type='button' data-bs-toggle= 'collapse' data-bs-target= '#navbarNav'>
              <span classname=' navbar-toggler-icon'></span>
            </button>

            <div classname=' collapse navbar-collapse' id='navbarNav'>
              <ul classname=' navbar-nav ms-auto'>
                <li classname='nav-item'><Link classname='nav-link' to={'/dashboard'}>Dashboard</Link></li>
                <li classname='nav-item'><Link classname='nav-link' to={'/InputLaporan'}>Input Laporan</Link></li>
                <li classname='nav-item'><Link classname='nav-link' to={'/RiwayatData'}>Riwayat Data</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='/dashboard' element= {<Dashboard/>}></Route>
          <Route path='/InputLaporan' element= {<InputLaporan/>}></Route>
          <Route path='/RiwayatData' element= {<RiwayatData/>}></Route>
        </Routes>
    </>
      
  )
}