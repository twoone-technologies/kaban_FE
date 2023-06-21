import logo from "../../../../assets/h.s/Logo.svg"
//type Props = {}

function Navigation() {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
        <span>Kaban</span>
      </div>
      <ul>
        <li><a href="">Property</a></li>
        <li><a href="">Realtors</a></li>
        <li><a href="">Company</a></li>
        <li><a href="">Blog</a></li>
        <li><button>Register</button></li>
      </ul>
    </div>
  )
}

export default Navigation;