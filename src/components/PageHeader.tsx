import AveloLogo from "./AveloLogo";

const PageHeader = () => {
  return (
    <header className="bg-background border-b border-border py-4">
      <div className="max-w-md mx-auto px-4">
        <AveloLogo />
      </div>
    </header>
  );
};

export default PageHeader;
