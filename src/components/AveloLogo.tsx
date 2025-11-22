const AveloLogo = ({ showTagline = true }: { showTagline?: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="28" fill="#580081" fontSize="32" fontWeight="600" fontFamily="Signika">avelo</text>
        <path d="M95 10 L100 20 L95 30" stroke="#00C4E4" strokeWidth="3" fill="none"/>
        <path d="M100 10 L105 20 L100 30" stroke="#580081" strokeWidth="3" fill="none"/>
        <path d="M105 10 L110 20 L105 30" stroke="#FECE00" strokeWidth="3" fill="none"/>
      </svg>
      {showTagline && (
        <p className="text-xs text-avelo-purple font-heading mt-1">Fly With a Smile</p>
      )}
    </div>
  );
};

export default AveloLogo;
