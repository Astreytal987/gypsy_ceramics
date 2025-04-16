export default function ({children, padding = 180, style, className}) {
    return (
        <div style={{ padding: `0px ${padding}px`, ...style}} className={className}>
            {children}
        </div>
    )    
}

// color, lowerStrip, LeftStar