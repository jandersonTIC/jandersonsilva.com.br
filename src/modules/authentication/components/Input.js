import React from "react";

export default function Input({ type, value, ...others }) {
  return <input type={type} value={value} {...others} />;
}
