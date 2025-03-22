import React from "react";

const AnimatedTitle = ({ text }) => {
    return (
        <div className="w-auto text-[12px] sm:text-[14px] h-[12px] sm:h-[14px] font-font5 inline-block overflow-hidden group selection-none uppercase">
            <span className="block group-hover:translate-y-[-100%] transition-all duration-[0.32s] whitespace-nowrap">
                {text}
            </span>
            <span className="block group-hover:translate-y-[-100%] transition-all duration-[0.32s] wh">
                {text}
            </span>
        </div>
    );
};

export default AnimatedTitle;
