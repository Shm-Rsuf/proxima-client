const Footer = () => {
  return (
    <div className="footer-wrapper ">
      <div className="footer container mx-auto flex justify-between items-center py-10 border-t border-sky-900">
        <p>Copyright &copy;{new Date().getFullYear()} Proxima.</p>
        <p>Powered by Proxima</p>
      </div>
    </div>
  );
};

export default Footer;
