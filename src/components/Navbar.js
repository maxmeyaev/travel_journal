import { ReactComponent as Logo2 } from '../icons/T.svg'
export default function Navbar(){
    return (
        <div className="wrapper clear">
            <header className='d-flex align-center justify-between p-20'>
                <div className='headerLeft d-flex align-center'>
                    <Logo2 height={150} width={150}/>
                </div>
                <ul className='headerRight d-flex align-center'>
                    <a href="https://developer.mozilla.org/en-US/" className='login'>
                        <span>Login</span>
                    </a>
                    <button className='sign-up-btn'>
                        <span>Sign Up</span>
                    </button>
                </ul>
            </header>
        </div>
    )
}