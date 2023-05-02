import axios from 'axios'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import classes from '../../styles/meal.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MealDetails = ({ meal }) => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showForm, setShowForm] = useState(false)
    const formRef = useRef()

    const handleCloseForm = () => setShowForm(false)

    const handleEmail = (e) => {
        e.preventDefault()

        // service id, template id, public key
        emailjs.sendForm("service_o1ki47j", "template_w5mthmm", formRef.current, '5T3Wb_hkHjKTOJDYQ')
            .then(() => {
                toast.success('Email has been sent succcessfully to your email ' + email)
                handleCloseForm()
            }, (err) => {
                toast.error(err.text)
            })
    }

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.left}>
                        <Image src={meal?.image} width='250' height='250' />
                    </div>
                    <div className={classes.right}>
                        <h2 className={classes.title}>{meal?.title}</h2>
                        <span className={classes.category}>Category: <span>{meal?.category}</span></span>
                        <p className={classes.desc}>Meal description: <span>{meal?.desc?.length > 70 ? `${meal?.desc.slice(0, 70)}...}` : meal.desc}</span></p>
                        <span className={classes.price}>Price: $<span>{meal?.price}</span></span>
                        <button onClick={() => setShowForm(true)} className={classes.orderButton}>Order Now</button>
                        <span className={classes.readyIn}>Meals are prepared for 30 to 45 minutes</span>
                    </div>
                </div>
                {
                    showForm && (
                        <div className={classes.contactForm} onClick={handleCloseForm}>
                            <div className={classes.contactFormWrapper} onClick={(e) => e.stopPropagation()}>
                                <h2>Order meal</h2>
                                <form onSubmit={handleEmail} ref={formRef}>
                                    <input type="email" placeholder='Your Email' name="to_email" onChange={(e) => setEmail(e.target.value)} />
                                    <textarea type="text" placeholder="Address..." name="message" onChange={(e) => setMessage(e.target.value)} />
                                    <button>Send</button>
                                </form>
                                <AiOutlineClose onClick={handleCloseForm} className={classes.removeIcon} />
                            </div>
                        </div>
                    )
                }
                <ToastContainer />
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(ctx) {
    const id = ctx.params.id

    const { data } = await axios.get(`http://localhost:3000/api/meal/${id}`)

    return {
        props: {
            meal: data
        }
    }
}

export default MealDetails