function Navbar(){

    const navbarStyle=
    {
        background:'#e2e2e2',
        padding: '5px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:'5%',
        paddingRight:'5%'
       
    }



    return (
        <div style={navbarStyle}>
            <h1>E-Learn</h1>
            <div  style={
                {
                    display:'flex',
                    justifyContent:'space-between',
                    gap:'10px'
                }
            }>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </div>
        </div>
    )
}

export default Navbar;