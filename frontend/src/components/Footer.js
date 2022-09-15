export default function Footer(props) {
  const currentDate = new Date();
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {currentDate.getFullYear()} Mesto
        Russia</p>
    </footer>
  );
};
