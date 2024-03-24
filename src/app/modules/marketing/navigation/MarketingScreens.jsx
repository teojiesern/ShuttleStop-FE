import { Route } from 'react-router-dom';
import MarketingTestScreen from '../view/MarketingTestScreen';
import MarketingTestScreenTwo from '../view/MarketingTestScreenTwo';

const MarketingScreens = (
    <>
        <Route
            path="marketing"
            element={<MarketingTestScreen />}
        />
        <Route
            path="marketing/campaigns"
            element={<MarketingTestScreenTwo />}
        />
    </>
);

export default MarketingScreens;
