import { Route } from 'react-router-dom';
import MarketingTestScreenTwo from '../view/MarketingTestScreenTwo';

import MarketingCoachRegistrationScreen from '../view/MarketingCoachRegistrationScreen';
import CompetitionScreen from './CompetitionScreen';

const MarketingScreens = (
    <>
        <Route
            path="/marketing/competitions"
            element={<CompetitionScreen />}
        />

        {/* <Route

            <Route

                index
                element={<MarketingTestScreen />}
            />
            <Route
                path="senior"
                element={<SeniorCompetitionScreen />}

            /> */}

        <Route
            path="/marketing/coaches"
            element={<MarketingTestScreenTwo />}
        />
        <Route
            path="/marketing/coach-registration"
            element={<MarketingCoachRegistrationScreen />}
        />
    </>
);

export default MarketingScreens;
