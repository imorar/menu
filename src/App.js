import './App.css';
import { Menu } from './components/Menu';

const data = [
  {
    "slug": "we-connect",
    "title": "We-Conect Home page",
    "url": "https://www.we-conect.com/",
    "children": [
      {
        "slug": "live-events",
        "title": "Live Event",
        "url": "https://www.we-conect.com/liveevents",
      },
      {
        "slug": "digital-managed-events",
        "title": "Digital Managed Events",
        "url": "https://www.we-conect.com/digital-managed-events",
      }
    ]
  },
  {
    "slug": "google",
    "title": "Google",
    "url": "https://www.google.de"
  }
];

function App() {
  return (
    <div className="App">
      <Menu data={data} />
    </div>
  );
}

export default App;
