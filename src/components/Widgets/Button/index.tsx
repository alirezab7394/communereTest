import React, { CSSProperties, useRef, useState } from "react";
import "./style.scss";

interface Props {
  title?: any;
  style?: CSSProperties;
  onClick?: (event?: React.MouseEvent) => void;
  buttonType?: "white";
  className?: string;
  children?: any;
  shape?: "iconButton" | "normal";
  type?: "button" | "reset" | "submit";
}
export default function Button({
  title,
  style = {},
  onClick = () => {},
  buttonType = "white",
  className = "",
  children,
  shape = "normal",
  type,
}: Props) {
  const rippleAnimation = useRef("1");
  const [rippleStyle, setRippleStyle] = useState<CSSProperties>({});
  let onButtonClick = (e: React.MouseEvent) => {
    onClick(e);
    let d = Math.max(e.currentTarget.getBoundingClientRect().width, e.currentTarget.getBoundingClientRect().height);
    let x = e.pageX - e.currentTarget.getBoundingClientRect().left - d / 2;
    let y = e.pageY - e.currentTarget.getBoundingClientRect().top - d / 2;
    rippleAnimation.current = rippleAnimation.current === "1" ? "2" : "1";
    setRippleStyle({
      left: x,
      top: y,
      width: d,
      height: d,
      animation: `rippleAnimation${rippleAnimation.current} 0.65s linear`,
    });
  };

  return (
    <button
      className={`myCustomButtonClass ${buttonType} ${className} ${shape}`}
      style={style}
      onClick={(e) => onButtonClick(e)}
      type={type}
    >
      {children ? children : title}
      <div className={`myCustomButtonClass--ripple`} style={rippleStyle}></div>
    </button>
  );
}
