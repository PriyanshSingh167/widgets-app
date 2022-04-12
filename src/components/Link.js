import React from "react";

const Link = ({ className, href, children }) => {
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);
    // To update the url in address bar

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
