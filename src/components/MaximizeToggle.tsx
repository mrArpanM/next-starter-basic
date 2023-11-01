"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import useFullscreen from "@/components/hooks/fullscreen";
import { Expand, Shrink } from "lucide-react";

export function FullScreenToggle() {
    const [ isFullscreen, toggleFullscreen ] = useFullscreen();
  return (
    <Button variant="outline" size="icon"
      onClick={toggleFullscreen}
    >
        {isFullscreen ? 
        <Shrink className="hover:scale-110 transition-all" />
        : <Expand className="hover:scale-110 transition-all" /> }
      <span className="sr-only">Toggle Fullscreen</span>
    </Button>
  )
}