import { Route } from 'react-router-dom';
import MarketingTestScreen from '../view/MarketingTestScreen';
import MarketingTestScreenTwo from '../view/MarketingTestScreenTwo';
import SeniorCompetitionScreen from '../view/SeniorCompetitionScreen';
import CompetitionScreen from './CompetitionScreen';

const MarketingScreens = (
    <>
        <Route
            path="/marketing/competitions"
            element={<CompetitionScreen />}
        >
            <Route
                index
                element={<MarketingTestScreen />}
            />
            <Route
                path="senior"
                element={<SeniorCompetitionScreen />}
            />
        </Route>
        <Route
            path="/marketing/coaches"
            element={<MarketingTestScreenTwo />}
        />
    </>
);

export default MarketingScreens;
