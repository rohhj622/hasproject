/**
 * 로고 이미지 컴포넌트
 * @param {*} props 
 * @returns 
 */
import Link from "next/link";
import Image from "next/image";

const LogoComponent = (props) => {
    const {imageLink, className, useLink} = props;
    if(useLink==undefined||useLink==null||useLink==true){
        return(
            <Link href="/" passHref>
                <img src={imageLink} alt="logo" className={className} />
            </Link>
        )
    }else{
        return(
            <div>
                <img src={imageLink} alt="logo" className={className} />
            </div>
        )
    }
};
export default LogoComponent;