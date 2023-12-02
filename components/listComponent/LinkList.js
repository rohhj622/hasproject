import { faDiscord, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const LinkList = ( props ) =>{
    const {itmes, divClassName } = props;

    return(
        <div className={divClassName}>
            {
                itmes.map((item, index) => {
                    return(
                        <div 
                            key={index}
                            className="flex flex-row align-middle w-full items-start p-2 border-gray-900 border-b-1 text-3xl font-bold hover:text-3xl"
                            style={{cursor: 'pointer'}}
                        >
                            <Link href={item.link}>
                                <a className="hover:text-3xl hover:text-gray-400">{item.title}</a>
                            </Link>
                            {
                                item.id == 3 &&
                                <div>   
                                    <FontAwesomeIcon className="w-6 h-6 ml-2 align-middle" style={{ color: 'black' }} icon={faInstagram} />
                                </div>
                            }
                            {
                                item.id == 4 &&
                                <div>
                                    <FontAwesomeIcon className="w-6 h-6 ml-2 align-middle" style={{ color: 'black' }} icon={faTwitter} />
                                </div>
                            }
                            {
                                item.id == 5 &&
                                <div>
                                    <FontAwesomeIcon className="w-6 h-6 ml-2" style={{ color: 'black' }} icon={faDiscord} />
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )

};

export default LinkList;