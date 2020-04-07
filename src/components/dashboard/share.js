import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookShareCount,
  WhatsappShareButton,
  LinkedinShareButton,
  WhatsappIcon,
} from "react-share";
import { EmailIcon, FacebookIcon, LinkedinIcon } from "react-share";

const Share = () => {
  const shareFBUrl = "https://facebook.com";
  const shareEmailUrl = "https://gmail.com";
  const shareWhatsappUrl = "https://whatsapp.com";
  const shareLinkedIn = "https://linkedin.com";
  const title = "Facebook";
  const emailTitle = "Gmail";
  const whatsappTitle = "Whatsapp";
  const linkedInTitle = "LinkedIn";

  return (
    <div className="Demo_container remove-padding">
      <div className="row">
        <div className="col l3 s6 m3">
          {/* Email share */}
          <EmailShareButton
            url={shareEmailUrl}
            quote={emailTitle}
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>

        {/* whatsapp share */}
        <div className="col l3 s6 m3">
          <WhatsappShareButton
            url={shareWhatsappUrl}
            title={whatsappTitle}
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>

        <div className="col l3 s6 m3">
          <LinkedinShareButton
            url={shareLinkedIn}
            title={linkedInTitle}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>

        {/* facebook share */}
        <div className="col l3 s6 m3">
          <FacebookShareButton
            url={shareFBUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <div>
            <FacebookShareCount
              url={shareFBUrl}
              className="Demo__some-network__share-count"
            >
              {(count) => count}
            </FacebookShareCount>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
