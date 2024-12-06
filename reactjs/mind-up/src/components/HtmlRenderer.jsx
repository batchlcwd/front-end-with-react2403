import React from "react";

const HtmlRenderer = ({ htmlContent }) => {
  return (
    <div className="reset-styles">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default HtmlRenderer;
