import React from "react";
import { IconProps } from "Components/Icons/types";

interface Props extends IconProps {
  percentageSkill: string;
}

const SkillBarsIcon: React.FC<Props> = ({ className, percentageSkill }) => (
  <svg
    width="79"
    height="4"
    viewBox="0 0 79 4"
    className={className}
    style={{ clipPath: `inset(0 ${percentageSkill} 0 0)` }}
  >
    <rect x="3" width="12" height="4" />
    <ellipse cx="3" cy="2" rx="3" ry="2" />
    <ellipse cx="15" cy="2" rx="3" ry="2" />
    <rect x="23" width="12" height="4" />
    <ellipse cx="23" cy="2" rx="3" ry="2" />
    <ellipse cx="35" cy="2" rx="3" ry="2" />
    <rect x="44" width="12" height="4" />
    <ellipse cx="44" cy="2" rx="3" ry="2" />
    <ellipse cx="56" cy="2" rx="3" ry="2" />
    <rect x="64" width="12" height="4" />
    <ellipse cx="64" cy="2" rx="3" ry="2" />
    <ellipse cx="76" cy="2" rx="3" ry="2" />
  </svg>
);

export default SkillBarsIcon;
