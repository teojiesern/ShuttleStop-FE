import { Route } from 'react-router-dom';
import MarketingTestScreenTwo from '../view/MarketingTestScreenTwo';
import CoachProfile from '../view/component/CoachProfile';

import MarketingCoachRegistrationScreen from '../view/MarketingCoachRegistrationScreen';
import CompetitionScreen from './CompetitionScreen';

const MarketingScreens = (
    <>
        <Route
            path="/marketing/competitions"
            element={<CompetitionScreen />}
        />
        <Route
            path="/marketing/coaches"
            element={<MarketingTestScreenTwo />}
        />
        <Route
            path="/marketing/coach-registration"
            element={<MarketingCoachRegistrationScreen />}
        />
        <Route
            path="/marketing/coach-profile"
            element={<CoachProfile />}
        />
    </>
);

export default MarketingScreens;
