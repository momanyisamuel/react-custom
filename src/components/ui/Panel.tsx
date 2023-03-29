import React, { ReactNode } from "react";

type PanelProps = {
    title: string,
}

export default function Panel({title, ...props}: PanelProps) {
  const hasTitle = Boolean(title);

  if (hasTitle) {
    return (
      <>
        <div className="h-full border bg-white">
          <div className="title border-b py-2 text-center text-sm font-semibold text-gray-700">
            {title ? `${title}` : ""}
          </div>
          <div className="body" {...props}/>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="h-full border bg-white">
      <div className="body" {...props}/>
      </div>
    </>
  );
}
