"use client";
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import Spline from '@splinetool/react-spline';
import { useTheme } from "./ThemeProvider";
import { useState, useEffect, useRef } from "react";

// Background 3D - Fixed & No Interaction
const Background3D: React.FC = () => {
  const { theme } = useTheme();

  const darkUrlString = "https://shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%232D7FF9&color2=%23020A1C&color3=%232563EB&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false";

  // โทนตาม URL ที่ผู้ใช้กำหนดมาเอง (ฟ้าพาสเทล + ครีมอ่อน)
  const lightUrlString = "https://shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%2399CFFF&color2=%23B3DCFF&color3=%23FAF2DF&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=plane&uAmplitude=1&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false";

  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0" style={{ viewTransitionName: 'bg3d-container' }}>
      {/* Dark Mode Canvas */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none [&_*]:pointer-events-none [&>canvas]:absolute [&>canvas]:inset-0 [&>canvas]:w-full [&>canvas]:h-full [&>canvas]:object-cover"
        style={{ opacity: theme === 'dark' ? 1 : 0 }}
      >
        <ShaderGradientCanvas>
          <ShaderGradient control="query" urlString={darkUrlString} />
        </ShaderGradientCanvas>
      </div>

      {/* Light Mode Canvas */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none [&_*]:pointer-events-none [&>canvas]:absolute [&>canvas]:inset-0 [&>canvas]:w-full [&>canvas]:h-full [&>canvas]:object-cover"
        style={{ opacity: theme === 'light' ? 1 : 0 }}
      >
        <ShaderGradientCanvas>
          <ShaderGradient control="query" urlString={lightUrlString} />
        </ShaderGradientCanvas>
      </div>
    </div>
  );
};

export default Background3D;
