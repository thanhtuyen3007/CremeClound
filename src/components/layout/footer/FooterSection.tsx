const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="space-y-3">
    <h3 className="uppercase text-sm font-semibold tracking-wide">{title}:</h3>
    <ul className="space-y-2 text-sm">{children}</ul>
  </div>
);
export default FooterSection;