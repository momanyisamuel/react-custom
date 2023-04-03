import React from "react";

export default function StatsCard(props: any) {
  return (
    <>
      <div className="bg-white shadow p-6 rounded align-middle text-center">
        <h2 className="text-xs font-bold mb-4 uppercase">{props.title}</h2>
        <p className="text-4xl font-bold">{props.value}</p>
      </div>
    </>
  );
}
