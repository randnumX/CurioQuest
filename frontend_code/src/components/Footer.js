import './Footer.css'

export default function Footer() {
    return <>
        <div className='footer-main'>
            <div className='footer-left'><h4>Copyright © {new Date().getFullYear()}</h4></div>
            <div className='footer-right'><h4>View source on{" "}
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a></h4></div>
        </div>
    </>
}