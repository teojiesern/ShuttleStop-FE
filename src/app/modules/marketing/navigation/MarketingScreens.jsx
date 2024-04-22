import { Route } from 'react-router-dom';
import MarketingTestScreenTwo from '../view/MarketingTestScreenTwo';
import CoachProfile from '../view/component/CoachProfile';

import MarketingCoachRegistrationScreen from '../view/MarketingCoachRegistrationScreen';
import MarketingTestScreen from '../view/MarketingTestScreen';
import RegisterCompetitionScreen from '../view/RegisterCompetitionScreen';

const MarketingScreens = (
    <>
        <Route
            path="/marketing/competitions"
            element={<MarketingTestScreen />}
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

        <Route
            path="/marketing/register-competition"
            element={<RegisterCompetitionScreen />}
        />
    </>
);

export default MarketingScreens;
