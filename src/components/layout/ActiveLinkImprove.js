import { withRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

export default withRouter(
  ({
    router,
    children,
    as,
    href,
    activeClassName,
    activeSubClassName,
    ...rest
  }) => {
    const child = Children.only(children);
    const childClassName = child.props.className || "";
    // remove URL parameters
    const sanitizedPath = router.asPath.split("#")[0].split("?")[0];
    // activeClassName and activeSubClassName are optional and default to "active" and "active-sub"
    const activeClass = activeClassName || "active";
    const activeSubClass = activeSubClassName || "active-sub";
    // remove trailing slash if present
    href =
      href && href !== "/" && href.endsWith("/") ? href.slice(0, -1) : href;
    as = as && as !== "/" && as.endsWith("/") ? as.slice(0, -1) : as;
    // check if the link or a sub-page is active and return the according class name
    const activityClassName =
      sanitizedPath === href || sanitizedPath === as
        ? activeClass
        : sanitizedPath.startsWith(href + "/") ||
          sanitizedPath.startsWith(as + "/")
        ? activeSubClass
        : "";
    // combine the child class names with the activity class name
    const className = `${childClassName} ${activityClassName}`.trim();
    return (
      <Link href={href} as={as} {...rest}>
        {React.cloneElement(child, {
          className: className || null,
        })}
      </Link>
    );
  }
);
