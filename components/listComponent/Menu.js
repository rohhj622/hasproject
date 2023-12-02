import React from 'react'
import { useRouter } from 'next/router'
import { menuItems } from "../contents/basicData";

const ChangeLanguage = (props) =>  {
  const {setHeight} = props;
  const router = useRouter();

  return menuItems.map((item, index) => {
    if (item.use) {
      return (
        <div key={index} onClick={()=>{
          setHeight(0);
          router.push(item.link);
        }}>
          {item.title}
        </div>
      )
    }
  })
}

export default ChangeLanguage;