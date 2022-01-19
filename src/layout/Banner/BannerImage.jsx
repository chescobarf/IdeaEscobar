import React from "react";
import Button from "../../components/Button/Button";

function BannerImage({
  urlContent,
  objectFit,
  position,
  title,
  content,
  contentStyle,
  hasButton,
  buttonText,
}) {
  if (position === "left") {
    return (
      <div className=" w-full h-96 relative">
        <div className="Banner__Picture z-0 h-full">
          <img
            src={urlContent}
            alt="/"
            className={`${objectFit ? objectFit : "object-fit"} h-full w-full`}
          ></img>
        </div>
        <div className="Banner__Content absolute z-10 top-10 mx-6 text-white w-1/2 left-0">
          <div className={`${contentStyle} text-left uppercase`}>
            <h2 className="font-bold text-3xl mb-10">{title}</h2>
            <p className="font-semibold text-base">{content}</p>
            {hasButton ? <Button text={buttonText} extraStyle="mt-10" /> : null}
          </div>
        </div>
      </div>
    );
  }
  if (position === "right") {
    return (
      <div className=" w-full h-96 relative">
        <div className="Banner__Picture z-0 h-full">
          <img
            src={urlContent}
            alt="/"
            className={`${objectFit ? objectFit : "object-fit"} h-full w-full`}
          ></img>
        </div>
        <div className="Banner__Content absolute z-10 top-10 mx-6 text-white w-1/2 right-0">
          <div className={`${contentStyle} text-right uppercase`}>
            <h2 className="font-bold text-3xl mb-10">{title}</h2>
            <p className="font-semibold text-base">{content}</p>
            {hasButton ? <Button text={buttonText} extraStyle="mt-10" /> : null}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" w-full h-96 relative">
        <div className="Banner__Picture z-0 h-full">
          <img
            src={urlContent}
            alt="/"
            className={`${objectFit ? objectFit : "object-fit"} h-full w-full`}
          ></img>
        </div>
        <div className="Banner__Content absolute z-10 top-10 w-full">
          <div className={`${contentStyle} text-center uppercase`}>
            <h2 className="font-bold text-3xl mb-10">{title}</h2>
            <p className="font-semibold text-base">{content}</p>
            {hasButton ? <Button text={buttonText} extraStyle="mt-10" /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default BannerImage;
