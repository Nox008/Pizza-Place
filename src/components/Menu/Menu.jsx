import React from 'react'
import Food1 from "../../assets/classic.png";
import Food2 from "../../assets/marghertia.png";
import Food3 from "../../assets/pepperoni.png";
import { motion } from 'framer-motion';
import { SlideUp } from '../Hero/Hero';


const MenuData = [
    {
        id: 1,
        name: "Classic",
        img: Food1,
        price: "₹199",
        delay: 0.4,
    },
    {
        id: 2,
        name: "Margherita",
        img: Food2,
        price: "₹249",
        delay: 0.8,
    },
    {
        id: 3,
        name: "Pepperoni",
        img: Food3,
        price: "₹209",
        delay: 1.2,
    },
];

const Menu = () => {
    return (
        <section>
            <div className='container py-12'>
                <motion.h3 
                variants={SlideUp(0)}
                initial="hidden"
                whileInView="show"
                className='text-2xl font-semibold
                text-secondary uppercase py-8'>Our Menu</motion.h3>
                {/* grid section  */}
                <div className='grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 gap-6'>
                    {MenuData.map((item) => {
                        return(
                            <div className='group bg-white/50 shadow-md p-3 flex items-center gap-3 rounded-xl'>
                                <img src={item.img} alt="" className='w-24 
                                img-shadow group-hover:scale-125 transition-all
                                duration-700 '/>
                                <div>
                                <h3 className='text-xl font-semibold'>{item.name}</h3>
                                <p className='text-xl text-primary'>{item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        )
}

export default Menu