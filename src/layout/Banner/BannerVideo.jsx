import React from "react";
import Button from "../../components/Button/Button";

function BannerVideo({
  urlContent,
  position,
  title,
  content,
  hasButton,
  buttonText,
}) {
  if (position === "left") {
    return (
      <div className=" w-full h-xl relative">
        <div className="Banner__Picture z-0 h-full">
          <video
            loop
            autoPlay
            className="h-full w-full object-cover object-top"
            src={urlContent}
          ></video>
        </div>
        <div className="Banner__Content absolute z-10 top-36 mx-10 text-white w-1/2 left-0">
          <div className="text-left uppercase">
            <h2 className="font-bold text-4xl mb-10">{title}</h2>
            <p className="font-medium text-xl mb-10">{content}</p>
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
            className="h-full w-full object-fill filter brightness-50"
          ></img>
        </div>
        <div className="Banner__Content absolute z-10 top-10 mx-6 text-white w-1/2 right-0">
          <div className="text-right uppercase">
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
            className="h-full w-full object-fill filter brightness-50"
          ></img>
        </div>
        <div className="Banner__Content absolute z-10 top-10 text-white w-full">
          <div className="text-center uppercase">
            <h2 className="font-bold text-3xl mb-10">{title}</h2>
            <p className="font-semibold text-base">{content}</p>
            {hasButton ? <Button text={buttonText} extraStyle="mt-10" /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default BannerVideo;
