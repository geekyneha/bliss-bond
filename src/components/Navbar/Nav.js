import React from 'react'
import style from './navbar.module.css'

const Nav = () => {
  return (
   <>
   <nav>
    <div className={style.container}>
        <div >
            <img src="https://cdn.dribbble.com/users/1985786/screenshots/5363979/gif.gif" alt="bliss-bond" width={50} height={50} className={style.logo}/>
            <figcaption>Bliss Bond</figcaption>

        </div>

        <div>
            serch
        </div>

        <div>
            account
        </div>

    </div>
   </nav>
   </>
  )
}

export default Nav