import { Route } from 'react-router-dom';

import MarketingCoachEditScreen from '../view/MarketingCoachEditScreen';
import MarketingCoachRegistrationScreen from '../view/MarketingCoachRegistrationScreen';
import MarketingTestScreen from '../view/MarketingTestScreen';
import MarketingTestScreenTwo from '../view/MarketingTestScreenTwo';
import CoachProfile from '../view/component/CoachProfile';


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
