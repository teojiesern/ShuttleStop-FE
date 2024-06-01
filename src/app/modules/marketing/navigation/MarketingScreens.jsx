import { Route } from 'react-router-dom';

import MarketingTestScreen from '../view/CompetitionScreen';
import MarketingCoachEditScreen from '../view/MarketingCoachEditScreen';
import MarketingCoachRegistrationScreen from '../view/MarketingCoachRegistrationScreen';
import MarketingCoachScreen from '../view/MarketingCoachScreen';
import CoachProfile from '../view/component/CoachProfile';

const MarketingScreens = (
    <>
        <Route
            path="/marketing/competitions"
            element={<MarketingTestScreen />}
        />
        <Route
            path="/marketing/coaches"
            element={<MarketingCoachScreen />}
        />
        <Route
            path="/marketing/coach-registration"
            element={<MarketingCoachRegistrationScreen />}
        />
        <Route
            path="/marketing/coach-edit/:coachId"
            element={<MarketingCoachEditScreen />}
        />
        <Route
            path="/marketing/coach-profile/:coachId"
            element={<CoachProfile />}
        />
    </>
);

export default MarketingScreens;
