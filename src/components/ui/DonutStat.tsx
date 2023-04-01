import React from "react";
import { Donut, DonutValue, DonutLabel } from "react-donut-component";

type DonutStatProps = {
  size?: number;
  value?: number;
  label?: string;
  color?: string | "#000000";
  trackColor?: string;
  indicatorColor?: string;
};

export default function DonutStat({
  label,
  value,
  trackColor = "#D3D8DE",
  indicatorColor = "#111418",
  ...props
}: DonutStatProps) {
  return (
    <div>
      <Donut
        {...props}
        styleTrack={{ strokeWidth: 15, stroke: trackColor }}
        styleIndicator={{ stroke: indicatorColor, strokeLinecap: "round" }}
      >
        <DonutValue
          style={{ fontWeight: "bold" }}
          styleSymbol={{ fontWeight: "bold", fontSize: "22px" }}
          symbolPosition="top-right"
        >
          {value}
        </DonutValue>
        <DonutLabel>{label}</DonutLabel>
      </Donut>
    </div>
  );
}
