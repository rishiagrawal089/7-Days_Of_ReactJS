import React from 'react'

const Header = () => {
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a  className = "d-inline-flex ml-3 navbar-brand" style={{fontWeight:700, marginLeft:40,fontSize:25}}>
                            Scholarship Portal
                        </a>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Header