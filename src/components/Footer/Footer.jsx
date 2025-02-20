import React from 'react'
import Logo from "../../assets/Plogo.png"
import { motion } from 'framer-motion'
import fb from '../../assets/facebook.png'
import ig from '../../assets/instagram.png'
import tw from '../../assets/twitter.png'


const Footer = () => {
    return (
        <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='bg-primary rounded-t-3xl'
        >
            <div className='container py-14'>
                <div className='grid grid-cols-1 md:grid-cols-3
                gap-12'>
                    {/* Brand info  */}
                    <div className='space-y-3 lg:max-w-[300px]'>
                        <img src={Logo} alt="" className='w-24'/>
                        <p>No matter what the situation, pizza always helps. Especially a pizza that gives you the freedom to choose your toppings - from crisp capsicum, onion, grilled mushroom, golden corn, black olives</p>
                            <a href="#" className='inline-block mt-6 text-sm'>info@nomail.com</a>
                    </div>
                    {/* Quick Links  */}
                    <div className='col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
                        <div>
                            <h1 className='text-xl font-semibold'>Quick Links</h1>
                            <ul className='space-y-3 mt-6'>
                                <li className='footer-link'>Home</li>
                                <li className='footer-link'>Menu</li>
                                <li className='footer-link'>About</li>
                                <li className='footer-link'>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Company</h1>
                            <ul className='space-y-3 mt-6'>
                                <li className='footer-link'>Blog</li>
                                <li className='footer-link'>Feedback</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Socials</h1>
                            <ul className='space-y-3 mt-6'>
                                <img src={fb} alt="" className='w-8' />
                                <img src={ig} alt="" className='w-8' />
                                <img src={tw} alt="" className='w-8' />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
        )
}

export default Footer