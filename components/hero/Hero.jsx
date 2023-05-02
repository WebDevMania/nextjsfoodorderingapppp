import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'
import womanEating from '../../public/assets/womaneating.jpg'

const Hero = () => {
  return (
    <div className={classes.container}>
       <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>What better than a meal with <br />your loved ones</h2>
          <h5>
            We can help you with the experience by providing you<br /> with amazing food.
            Burgers, Pizza, Spaghetti, <br/>You Can Get Everything Here
          </h5>
          <div className={classes.buttons}>
            <button className={classes.orderNow}>Order Now</button>
            <button className={classes.seeMore}>See More</button>
          </div>
          <div className={classes.disclaimer}>
            We close earlier on Monday
          </div>
        </div>
        <div className={classes.right}>
          <Image src={womanEating} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Hero