const AveloLogo = ({ showTagline = true }: { showTagline?: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="45" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Avelo text */}
        <text x="5" y="42" fill="#580081" fontSize="38" fontWeight="600" fontFamily="sans-serif" letterSpacing="-1">avelo</text>
        
        {/* Chevron arrows - three colored stripes pointing left */}
        <g transform="translate(155, 30)">
          {/* Cyan/turquoise arrow - outermost */}
          <path d="M 30 -18 L 10 0 L 30 18" stroke="#00BCD4" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Purple arrow - middle */}
          <path d="M 24 -14 L 10 0 L 24 14" stroke="#580081" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Yellow arrow - innermost */}
          <path d="M 18 -10 L 10 0 L 18 10" stroke="#FECE00" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
      {showTagline && (
        <p className="text-xs text-avelo-purple font-heading mt-1">Fly With a Smile</p>
      )}
    </div>
  );
};

export default AveloLogo;
