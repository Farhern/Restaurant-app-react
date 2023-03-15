import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WalletIcon from '@mui/icons-material/Wallet';
import HelpIcon from '@mui/icons-material/Help';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PeopleIcon from '@mui/icons-material/People';


function Navbar() {

    const [nav, setNav] = useState(false)
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <MenuIcon size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Best <span>Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/*search input*/}
            <div className="bg-gray-200 rounded-full flex items-center px2 w-[200px] sm:w-[400px] lg:w-[500px] ">
                <SearchIcon size={25} />
                <input className="bg-transparent p-2 focus:outline-none" type="text" placeholder="search foods" />
            </div>

            {/*cart button*/}
            <div>
                <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
                    <ShoppingCartIcon size={20} className="mr-2" /> cart
                </button>
            </div>
            
            {/*mobile menu*/}
            {/*overlay*/}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}

            {/*side-drawer menu*/}
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
             : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <CloseIcon
                 onClick={()=> setNav(!nav)} 
                 size={30} 
                 className="absolute right-4 top-4 cursor-pointer"
                  />
                <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex"><LocalShippingIcon size={25} className="mr-4" /> Orders</li>
                        <li className="text-xl py-4 flex"><FavoriteIcon size={25} className="mr-4" /> Favorite</li>
                        <li className="text-xl py-4 flex"><WalletIcon size={25} className="mr-4" /> Wallet</li>
                        <li className="text-xl py-4 flex"><HelpIcon size={25} className="mr-4" /> Help</li>
                        <li className="text-xl py-4 flex"><LocalOfferIcon size={25} className="mr-4" /> Promotions</li>
                        <li className="text-xl py-4 flex"><ArrowDownwardIcon size={25} className="mr-4" /> Best Ones</li>
                        <li className="text-xl py-4 flex"><PeopleIcon size={25} className="mr-4" /> Help</li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navbar
