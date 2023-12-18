"use client"
import React from "react";
import { render } from "react-dom";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


function VideoEmbed() {
  return (
    <div className="w-full flex gap-5 items-center justify-center mt-10 mb-10">
        <div className=" w-[300px]">
        <LiteYouTubeEmbed 
            aspectHeight="9"
            aspectWidth="16"
            id="-pSoHQgrxmo"
            title="Prabowo-Gibran Konsolidasi Bahas Pemenangan di Pilpres"
        />
        </div>
        <div className=" w-[300px]">
        <LiteYouTubeEmbed 
            aspectHeight="9"
            aspectWidth="16"
            id="uxxMojzYWt8"
            title="Prabowo-Gibran Konsolidasi Bahas Pemenangan di Pilpres"
        />
    </div>
        <div className=" w-[300px]">
        <LiteYouTubeEmbed 
            aspectHeight="9"
            aspectWidth="16"
            id="obra8jBARQo"
            title="Prabowo-Gibran Konsolidasi Bahas Pemenangan di Pilpres"
        />
    </div>
    </div>
  )
}

export default VideoEmbed