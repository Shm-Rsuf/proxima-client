const Footer = () => {
  return (
    <div className="footer-wrapper bg-slate-900 text-slate-50">
      <div className="footer container mx-auto flex justify-between items-center py-10 border-t border-sky-900">
        <p>Copyright &copy;{new Date().getFullYear()} Proxima.</p>
        <p>Powered by Proxima</p>
      </div>
    </div>
  );
};

export default Footer;
