const Header = () => {
   
    return (
      <div className='flex w-318 h-20 bg-red-300 justify-between'>
        <div className='font-bold text-3xl flex justify-center items-center'>Aitezaz Ahmed</div>
        <div className='font-bold text-3xl flex justify-center items-center gap-6'>
         <div><Link to={"/"}>Home</Link></div>
          <div><Link to={"/about"}>About</Link></div>
          <div><Link to={"/contact"}>Contacts</Link></div>
          <div><Link to={"/login"}>Login</Link></div>
        </div>
      </div>
    )
  }
  
  export default Header