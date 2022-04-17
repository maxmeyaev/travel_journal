import { ReactComponent as Logo } from '../icons/fill_213.svg'
export default function Navbar(){
    return (
        <header className='navbar d-flex p-20 align-center'>
            <div className='nav d-flex align-center'>
                <Logo fill="black"/>
                <h3 className='d-flex align-center'>Travel Journal</h3>
                
            </div>  
        </header>
    )
}