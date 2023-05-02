import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { AiOutlineLogout, AiOutlineMail } from 'react-icons/ai'
import classes from './navbar.module.css'

const Navbar = () => {
  const session = useSession()

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link href='/' className={classes.left}>
          <h2>WebDevMania</h2>
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Contact Us</li>
          <li className={classes.listItem}>Featured</li>
        </ul>
        <div className={classes.right}>
          {session.status !== 'authenticated'
            ? (
              <>
                <AiOutlineMail size={30} />
                <button onClick={() => signIn()} className={classes.signIn}>Sign In</button>
              </>
            )
            : <>
              <div className={classes.logout} onClick={() => signOut()}>
                Logout <AiOutlineLogout />
              </div>
              <Link className={classes.addMeal} href='/addMeal'>
                Add Meal
              </Link>
            </>
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar