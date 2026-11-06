"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button" || target.closest('a') || target.closest('button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovered ? "hovered" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}