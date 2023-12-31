import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, SwipeableDrawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import './header.scss'
//

const Header = () => {
    let location = useLocation()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<string>('')

    const isMobile = false

    useEffect(() => {
        if (location?.pathname) {
            setCurrentPage(location.pathname)
        }
    }, [location])

    return (
        <div className="header">
            <Link to="/">
                <h1>Forgotten Forest</h1>
            </Link>
            <div className="header__menu">
                {currentPage === '/' ? (
                    <>
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
                            <div
                                className="header__menu--drawer"
                                onClick={() => setIsOpen(false)}
                            >
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
                    </>
                ) : (
                    <div className="header__menu--regular">
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
                )}
            </div>
        </div>
    )
}

export default Header
