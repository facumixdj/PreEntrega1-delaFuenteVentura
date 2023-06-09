import React from 'react'

export const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <button className='btn btn-secondary'>
                    <a className="nav-link" href="#">Vodka<i className="fas fa-home fa-lg"></i></a>
                </button>
            </li>
            <li className="nav-item">
                <button className='btn btn-secondary'>
                    <a className="nav-link" href="#">Vinos<i className="fas fa-laptop fa-lg"></i></a>
                </button>
            </li>
            <li className="nav-item">
                <button className='btn btn-secondary'>
                    <a className="nav-link" href="#">Licores<i className="fas fa-mobile fa-lg"></i></a>
                </button>
            </li>
            <li className="nav-item">
                <button className='btn btn-secondary'>
                    <a className="nav-link" href="#">Whisky<i className="fas fa-tv fa-lg"></i></a>
                </button>
            </li>
        </ul>
    )
}
