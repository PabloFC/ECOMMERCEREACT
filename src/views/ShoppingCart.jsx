import CartItems from "../components/CartItems"
import IconsSection from "../components/IconsSection"
import ShoppingCartMenu from "../components/ShoppingCartMenu"



const ShoppingCart = () => {
  return (
    <div>
        <ShoppingCartMenu/>
        <CartItems/>
        <IconsSection/>
    </div>
  )
}

export default ShoppingCart
