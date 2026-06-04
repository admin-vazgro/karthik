import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const go = (id) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <header className="site-header">
      <Link to="/" className="site-wordmark">Karthik Jyothy</Link>

      <ul className="site-nav">
        {[['Work', 'work'], ['Experience', 'experience'], ['About', 'about']].map(([lbl, id]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={e => { e.preventDefault(); go(id); }}>{lbl}</a>
          </li>
        ))}
      </ul>

      <a href="mailto:karthik71.work@gmail.com" className="ks-btn ks-btn-primary"
        style={{ minHeight: 38, padding: '0 20px', fontSize: '.78rem', letterSpacing: '.06em' }}>
        Contact
      </a>
    </header>
  );
}
