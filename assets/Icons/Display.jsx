
const Display = ({ className ,onMouseLeave , onMouseEnter }) => {


    return (
        <svg onMouseMove={onMouseEnter} onMouseLeave={onMouseLeave}  className={`svg-icon ${className}`} width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" >
            <rect x="8" y="8" width="48" height="36" rx="4" /><line x1="16" y1="56" x2="48" y2="56" />
            <line x1="28" y1="44" x2="24" y2="56" />
            <line x1="36" y1="44" x2="40" y2="56" />
            <line x1="8" y1="36" x2="56" y2="36" />
        </svg>

    )
}

export default Display