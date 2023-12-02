"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

const LinkContactList = ( props ) =>{
    const {itmes, divClassName } = props;

    return (
        <>
            <div>
                <h1 className="text-xs font-bold text-gray-900">Contact Us</h1>
            </div>
            <ul className="flex items-center gap-x-2">
                <li>
                <a
                    href="https://www.instagram.com/hardihooder_angel_society/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className="w-5 h-5" style={{ color: 'black' }} icon={faInstagram} />
                </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/HAngelSociety"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className="w-5 h-5" style={{ color: 'black' }} icon={faTwitter} />
                </a>
                </li>
            </ul>
          </>
    )
    // return(
    //     <div className={divClassName}>
    //         {
    //             itmes.map((item, index) => {
    //                 return(
    //                     <div 
    //                         key={index}
    //                         className="flex flex-row items-start gap-x-2"
    //                     >
    //                         <Link href={item.link}>
    //                             <div className="text-900-gray text-lg font-bold">
    //                                 {item.title}
    //                             </div>
    //                         </Link>
    //                     </div>
    //                 )
    //             })
    //         }
    //     </div>
    // )

};

export default LinkContactList;