import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, SwipeableDrawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import './header.scss'

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className="header">
            <h1>Forgotten Forest</h1>
            <div className="header__menu">
                <Button onClick={() => setIsOpen(true)}>
                    Menu
                    <MenuIcon />
                </Button>
                <SwipeableDrawer
                    anchor={'right'}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    onOpen={() => setIsOpen(true)}
                >
                    <div className="header__menu--drawer">
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                        <Link to="/mission">
                            <p>Our Mission</p>
                        </Link>
                        <Link to="/get-involved">
                            <p>Get Involved</p>
                        </Link>
                    </div>
                </SwipeableDrawer>
            </div>
        </div>
    )
}

export default Header
