import React, {useState} from 'react';
import {graphql, useStaticQuery} from "gatsby";
import IconHappy from "../../images/icons/iconHappy";
import IconSmile from "../../images/icons/iconSmile";
import IconGithub from "../../images/icons/iconGithub";
import IconLinkedin from "../../images/icons/iconLinkedin";
import IconGoogleDrive from "../../images/icons/iconGoogleDrive";
import IconGoogleGmail from "../../images/icons/iconGoogleGmail";
import useKeypress from "../../hooks/useKeypress";

const Contact = () => {
  const {site} = useStaticQuery(graphql`
      query GithubQuery {
          site {
              siteMetadata {
                  gitHubLink
                  resumeLink
                  emailAddress
                  linkedInLink
              }
          }
      }
  `);

  const [open, setIsOpen] = useState(false);

  useKeypress('Escape', () => {
    setIsOpen(false)
  });

  return (
    <>
      {
        // open menu if face is clicked
        open && (
          <div className="fixed bottom-0 right-0 w-full h-screen flex">
            <div className="flex flex-col sm:flex-row m-auto w-2/4 bg-gray-200 p-2 rounded-md">
              <div className="flex sm:flex-col flex-row sm:w-1/4 w-full justify-center items-center p-2 hover:bg-gray-400 rounded-md">
                <a target="_blank" rel="noopener noreferrer" href={site.siteMetadata.gitHubLink}
                   className="w-2/4 h-auto">
                  <IconGithub/>
                </a>
                <div className="w-2/4 sm: w-full text-center">
                  <p>GitHub</p>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:w-1/4 w-full justify-center items-center p-2 hover:bg-gray-400 rounded-md">
                <a target="_blank" rel="noopener noreferrer" href={site.siteMetadata.linkedInLink}
                   className="w-2/4 h-auto">
                  <IconLinkedin/>
                </a>
                <div className="w-2/4 sm: w-full text-center">
                  <p>LinkedIn</p>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:w-1/4 w-full justify-center items-center p-2 hover:bg-gray-400 rounded-md">
                <a target="_blank" rel="noopener noreferrer" href={site.siteMetadata.resumeLink}
                   className="w-2/4 h-auto">
                  <IconGoogleDrive/>
                </a>
                <div className="w-2/4 sm: w-full text-center">
                  <p>Resume</p>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:w-1/4 w-full justify-center items-center p-2 hover:bg-gray-400 rounded-md">
                <a target="_blank" rel="noopener noreferrer" href={`mailto:${site.siteMetadata.emailAddress}`}
                   className="w-2/4 h-auto">
                  <IconGoogleGmail/>
                </a>
                <div className="w-2/4 sm: w-full text-center">
                  <p>Email</p>
                </div>
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