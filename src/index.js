import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
import App from './App'
import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const root = createRoot(document.getElementById("root"));
root.render(<App />);