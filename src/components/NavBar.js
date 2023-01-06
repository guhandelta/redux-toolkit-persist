import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarLink, MDBNavbarBrand, MDBBadge } from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const { totalCount } = useSelector( ({ cart }) => cart )
  return (
    <MDBNavbar>
        <MDBContainer>
            <MDBNavbarBrand
                style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >Shopping Cart with Redux Persist{" "}</MDBNavbarBrand>
            <MDBNavbarLink>
                <a className="mx-3">
                    <MDBIcon fas icon="shopping-cart" size="lg" color="white">
                        <MDBBadge
                            pill
                            color="danger"
                            notification
                            style={{ fontSize: "12px" }}
                        >{totalCount}</MDBBadge>     
                    </MDBIcon>
                </a>
            </MDBNavbarLink>
        </MDBContainer>
    </MDBNavbar>
  )
}

export default NavBar