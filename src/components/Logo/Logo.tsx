import logo from '../../assets/material/reservationLogo.png';
import './style.css'

const Logo = () => {

  return (
    <>
      <div className='d-flex flex-row align-items-center gap-2'>
        <img src={logo} alt="Logo" className="img-logo" />
        <div>
          <h5 className='m-0 fw-bold fst-italic text-laranja-um'>Quick</h5>
          <h5 className='m-0 fw-bold fst-italic text-laranja-um'>Reserve</h5>
        </div>
      </div>
    </>
  )
}

export default Logo