import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
  
import { Home } from '../views/Home';
  
export const AppRouter = () =>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>;
