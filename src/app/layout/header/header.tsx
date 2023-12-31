import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, SwipeableDrawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import logo from '../../assets/logo.png'

import './header.scss'

const Header = () => {
    let location = useLocation()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<string>('')
    const [hasScrolled, setHasScrolled] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // TODO: Add event listener for scroll and change hasScrolled to true
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (location?.pathname) {
            setCurrentPage(location.pathname)
        }
    }, [location])

    return (
        <div
            className={`header ${hasScrolled ? 'scrolled' : ''}`}
            // TODO: Fix this
            onScroll={() => setHasScrolled(true)}
        >
            <Link to="/">
                <div className="header__logo">
                    <img src={logo} alt="coffee bean logo" />
                    <h3>
                        Forgotten <br />
                        Forest
                    </h3>
                </div>
            </Link>
            <div className="header__menu">
                {currentPage === '/' || screenWidth < 1280 ? (
                    <>
                        <Button
                            onClick={() => setIsOpen(true)}
                            className="header__menu--btn"
                        >
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
                                    <span>
                                        <h3>Home</h3>
                                    </span>
                                </Link>
                                <Link to="/mission">
                                    <span>
                                        <h3>Our Mission</h3>
                                    </span>
                                </Link>
                                <Link to="/get-involved">
                                    <span>
                                        <h3>Get Involved</h3>
                                    </span>
                                </Link>
                            </div>
                        </SwipeableDrawer>
                    </>
                ) : (
                    <div className="header__menu--regular">
                        <Link to="/">
                            <div className="header__menu--item">
                                Home <KeyboardArrowDownIcon />
                            </div>
                        </Link>
                        <Link to="/mission">
                            <div className="header__menu--item">
                                Our Mission <KeyboardArrowDownIcon />
                            </div>
                        </Link>
                        <Link to="/get-involved">
                            <div className="header__menu--item">
                                Get Involved <KeyboardArrowDownIcon />
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
