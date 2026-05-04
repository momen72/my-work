import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <div className="pt-10 pb-8 bg-black text-white">
            <div className="text-center">
                <a href="https://prebuiltui.com?utm_source=eliana">
                    <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    
                    
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span href=""> moemenelroweny72@gmail.com</span>
                </div>
                {/* <p>© {new Date().getFullYear()} All rights reserved.</p> */}
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/prebuiltui" className="hover:text-[#A6FF5D]">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/mo-men-elroweny-42b2011bb/" className="hover:text-[#A6FF5D]">LinkedIn</a></li>
                    <li><a target='_blank' href="https://www.behance.net/moemenelroweny" className="hover:text-[#A6FF5D]">Behance</a></li>
                </ul>
            </div>
        </div>
    )
}