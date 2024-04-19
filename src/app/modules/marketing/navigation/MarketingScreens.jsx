import { Route } from 'react-router-dom';
import MarketingTestScreenTwo from '../view/MarketingTestScreenTwo';

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
    </>
);

export default MarketingScreens;
