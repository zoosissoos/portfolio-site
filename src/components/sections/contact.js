import React, {useState} from 'react';
import IconHappy from "../../images/icons/iconHappy";
import IconSmile from "../../images/icons/iconSmile";
import IconGithub from "../../images/icons/iconGithub";
import IconLinkedin from "../../images/icons/iconLinkedin";
import IconGoogleDrive from "../../images/icons/iconGoogleDrive";
import IconGoogleGmail from "../../images/icons/iconGoogleGmail";


const Contact = () => {

  const [ open, setIsOpen ] = useState(false);

  return (
    <>
      {
        // open menu if face is clicked
        open && (
          <div className="fixed bottom-0 right-0 w-full h-screen flex">
            <div className="flex flex-col sm:flex-row m-auto w-2/4 bg-gray-200 p-2 rounded-md">
              <div className="flex w-1/4 justify-center items-center p-2">
                <IconGithub/>
              </div>
              <div className="flex w-1/4 justify-center items-center p-2">

                <IconLinkedin/>
              </div>
              <div className="flex w-1/4 justify-center items-center p-2">
                <IconGoogleDrive/>

              </div>
              <div className="flex w-1/4 justify-center items-center p-2">

                <IconGoogleGmail/>

              </div>
            </div>
          </div>
        )
      }
      <div className="fixed bottom-0 right-0 h-20 w-20 flex">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold cursor-pointer"
          onClick={() => setIsOpen(!open)}
        >
          {open ? <IconHappy/> : <IconSmile/>}
        </div>
      </div>
    </>
  );
};

export default Contact;