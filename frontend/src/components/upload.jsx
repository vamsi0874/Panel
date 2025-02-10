
import { IKContext, IKUpload } from "imagekitio-react";

import { useRef, useState } from "react";
import {ok} from '@/images/assests'
const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;

const authenticator = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/upload`);
    console.log(response)
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};


const Upload = ({ setImageUrl, setUploading }) => {

const [uploaded, setUploaded] = useState(false);
  const ikUploadRef = useRef(null);

  const onError = (err) => {
    console.log("Error", err);
    setUploading(false)
  };

  const onSuccess = (res) => {


    setImageUrl(res.url);
   
      setUploaded(true)
      setUploading(false)
    
    
   
  };

  const handleClick = () => {
    ikUploadRef.current.click();
    setUploading(true)
  };


  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <IKUpload
   
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
       
        style={{ display: "none" }}
        ref={ikUploadRef}
      />
      {
        <label onClick={handleClick}>
          <div className="flex items-center justify-start gap-2 cursor-pointer">
          <img src={`${ok.file}`} alt="" width={20} height={20} />
          {/* <input type="file" accept="image/*" /> */}
          {uploaded && 'Done'}
          
          </div>
        </label>
      }
    </IKContext>
  );
};

export default Upload;