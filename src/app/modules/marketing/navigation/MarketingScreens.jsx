import { Route } from 'react-router-dom';
import MarketingTestScreen from '../view/MarketingTestScreen';
import MarketingTestScreenTwo from '../view/MarketingTestScreenTwo';

const MarketingScreens = (
    <>
        <Route
            path="marketing/competitions"
            element={<MarketingTestScreen />}
        />
        <Route
            path="marketing/coaches"
            element={<MarketingTestScreenTwo />}
        />
    </>
);

export default MarketingScreens;
