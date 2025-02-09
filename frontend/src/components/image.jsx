import {  IKImage } from "imagekitio-react";


const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;

console.log(urlEndpoint)

const Image = ()=>{
    return (
   

          <IKImage
            urlEndpoint={urlEndpoint}
                src="https://ik.imagekit.io/jfgotvioe/test-upload_UMUokcgcj.png?updatedAt=1738478221391"
                width={300}
                height={300}
            />
    
    )
}

export default Image;