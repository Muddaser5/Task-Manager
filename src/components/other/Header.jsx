import React from "react";

const Header = ({data}) => {

const logOut =() =>{
localStorage.setItem('loggedInUser','')
window.location.reload()
}

    return (
        <div className="flex items-center justify-end">

            <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">Lala</span> </h1>
            <button onClick={LogOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-20">Log Out</button>

        </div>
    )
}


export default Header