
import { Link } from "@chakra-ui/react"

const Header = () => {
  return (
    <nav>
        <div>
          <Link  href="/">
            <i className="fa-solid fa-house"></i> Coffee & Coding
          </Link>
        </div>
        <div>
          <Link  href="/products">
            <i className="fa-solid fa-mobile-screen-button"></i> Login
          </Link>
          <Link href="/favourite">
            Register
          </Link>
          <Link href="/cart">
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </Link>
        </div>
      </nav>
  )
}

export default Header