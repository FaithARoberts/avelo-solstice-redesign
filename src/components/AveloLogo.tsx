const AveloLogo = ({ showTagline = true }: { showTagline?: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="28" fill="#580081" fontSize="32" fontWeight="600" fontFamily="Signika">avelo</text>
        <path d="M115 8 L98 20 L115 32" stroke="#00C4E4" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M110 11 L98 20 L110 29" stroke="#580081" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M105 14 L98 20 L105 26" stroke="#FECE00" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {showTagline && (
        <p className="text-xs text-avelo-purple font-heading mt-1">Fly With a Smile</p>
      )}
    </div>
  );
};

export default AveloLogo;
