import { useNavigate } from 'react-router-dom';
import NavbarTab from '../elements/NavbarTab';

interface Tab {
  label: string;
  path: string;
}

const tabs: Tab[] = [
  { label: 'Home', path: '/' },
  { label: 'Eventos', path: '/events' },
  { label: 'Tienda y subasta', path: '#' },
  { label: 'Financiación colectiva', path: '#' },
  { label: 'Streaming', path: '#' },
];

export default function NavbarTabs() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end items-center gap-6">
      {tabs.map((tab) => (
        <NavbarTab
          key={tab.label}
          label={tab.label}
          onClick={() => tab.path !== '#' && navigate(tab.path)}
        />
      ))}
    </div>
  );
}
