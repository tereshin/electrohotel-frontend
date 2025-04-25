import { ReactNode } from "react";

interface FeatureIconProps {
  icon: string | ReactNode;
  text: string;
  caption?: string;
}

const FeatureIcon = ({ icon, text, caption }: FeatureIconProps) => {
    return (
        <div className="flex items-center gap-4 md:gap-9">
          {typeof icon === 'string' ? (
            <div className="min-w-[82px] w-[82px] h-[82px] rounded-full border border-[#021A13] flex items-center p-4 justify-center">
              <img src={icon} alt={text} className="w-12 h-12" />
            </div>
          ) : (
            <div className="min-w-[82px] w-[82px] h-[82px] rounded-full border border-[#021A13] flex items-center justify-center">
              {icon}
            </div>
          )}
          <div className="flex flex-col gap-2">
            <p className="uppercase text-[#021A13] text-sm md:text-base tracking-[0.02em] leading-[1.4em]">{text}</p>
            {caption && <p className="text-[#021A13] text-sm md:text-base tracking-[0.02em] leading-[1.4em]">{caption}</p>}
          </div>
        </div>
      );
}

export default FeatureIcon;