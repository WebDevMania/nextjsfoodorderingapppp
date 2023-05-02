import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './catalog.module.css'

const Catalog = ({ meals }) => {

  console.log(meals)
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredMeals, setFilteredMeals] = useState([])

  useEffect(() => {
     const filterMeals = () => {
      setFilteredMeals(() => {
        if(activeCategory){
          if(activeCategory === 'all'){
            return meals
          }
          return [...meals].filter((meal) => meal.category === activeCategory)
        }
      })
     }
     activeCategory && filterMeals()
  }, [activeCategory])


  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Pick something delicious</h5>
          <h2>Food and Categories</h2>
        </div>
        <div className={classes.categories}>
          <span onClick={() => setActiveCategory('all')} className={`${classes.category} ${activeCategory === 'all' ? classes.active : ''}`}>
            All
          </span>
          <span onClick={() => setActiveCategory('pizza')} className={`${classes.category} ${activeCategory === 'pizza' ? classes.active : ''}`}>
            Pizza
          </span>
          <span onClick={() => setActiveCategory('burger')} className={`${classes.category} ${activeCategory === 'burger' ? classes.active : ''}`}>
            Burger
          </span>
          <span onClick={() => setActiveCategory('gyros')} className={`${classes.category} ${activeCategory === 'gyros' ? classes.active : ''}`}>
            Gyros
          </span>
          <span onClick={() => setActiveCategory('spaghetti')} className={`${classes.category} ${activeCategory === 'spaghetti' ? classes.active : ''}`}>
            Spaghetti
          </span>
          <span onClick={() => setActiveCategory('bread')} className={`${classes.category} ${activeCategory === 'bread' ? classes.active : ''}`}>
            Bread
          </span>
          <span onClick={() => setActiveCategory('vegetarian')} className={`${classes.category} ${activeCategory === 'vegetarian' ? classes.active : ''}`}>
            Vegetarian
          </span>
        </div>
        {
          filteredMeals?.length > 0
          ? <div className={classes.meals}>
             {filteredMeals?.map((meal) => (
              <Link href={`/meal/${meal?._id}`} key={meal?._id} className={classes.meal}>
                <div className={classes.imgContainer}>
                  <Image src={meal?.image} width='250' height='250' />
                </div>
                <div className={classes.mealData}>
                  <h4>{meal?.title}</h4>
                  <span>${meal?.price}</span>
                </div>
              </Link>
             ))}
          </div>
          : <h2 className={classes.noMeal}>There are no {activeCategory} meals in stock</h2>
        }
      </div>
    </div>
  )
}

export default Catalog