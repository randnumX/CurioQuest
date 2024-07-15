import Logo from './Logo'
import UserIcon from './UserIcon'
import './Header.css'

export default function Header() {
    return <>
        <div className='header-main'>
            <Logo className="header-logo header-left"></Logo>
            <h2 className='header-middle'>CurioQuest</h2>
            <div className='header-right'><UserIcon ></UserIcon></div>

        </div>
    </>
}