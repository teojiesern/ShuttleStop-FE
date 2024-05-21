import { useEffect, useMemo, useState } from 'react';
import useCustomer from '../../../modules/customer/view/hooks/useCustomer';
import useSeller from '../../../modules/sellerCenter/view/hooks/useSeller';
import CustomerInfoContext from '../data/CustomerInfoContext';
import CustomerStatusContext from '../data/CustomerStatusContext';
import SellerInfoContext from '../data/SellerInfoContext';
import ShopInfoContext from '../data/ShopInfoContext';
import ColdStartPendingScreen from '../screen/ColdStartPendingScreen';

export default function ColdStartInitializationProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [customerStatus, setCustomerStatus] = useState(null);
    const [sellerInfo, setSellerInfo] = useState(null);
    const [shopInfo, setShopInfo] = useState(null);
    const [customerInfo, setCustomerInfo] = useState(null);

    // const { getShopSettings } = useShopSettings();
    const { getCustomer } = useCustomer();
    const { getSellerInformation, getShopInformation } = useSeller();

    useEffect(() => {
        async function fetchData() {
            try {
                const customer = await getCustomer();
                setCustomerStatus({ isLogin: true, registeredSeller: customer.seller, setCustomerStatus });
                setCustomerInfo({
                    ...customer,
                    setCustomerInfo,
                });
                console.log(customer);
                // From here on out just put empty even if failed to fetch and dont throw any errors

                if (customer.seller) {
                    const seller = await getSellerInformation();
                    setSellerInfo({
                        ...seller,
                        setSellerInfo,
                    });

                    const shop = await getShopInformation(seller.sellerId);
                    setShopInfo({
                        ...shop,
                        setShopInfo,
                    });
                } else {
                    setSellerInfo(null);
                    setShopInfo(null);
                }
            } catch (error) {
                setCustomerStatus({ isLogin: false, registeredSeller: false, setCustomerStatus });
                setCustomerInfo(null);
                setSellerInfo(null);
                setShopInfo(null);
            }
            setLoading(false);
        }

        fetchData();
    }, [getCustomer, getSellerInformation, getShopInformation]);

    const customerValue = useMemo(() => ({ customerInfo, setCustomerInfo }), [customerInfo, setCustomerInfo]);

    if (loading) {
        return <ColdStartPendingScreen />;
    }

    return (
        <CustomerStatusContext.Provider value={customerStatus}>
            <CustomerInfoContext.Provider value={customerValue}>
                <SellerInfoContext.Provider value={sellerInfo}>
                    <ShopInfoContext.Provider value={shopInfo}>{children}</ShopInfoContext.Provider>
                </SellerInfoContext.Provider>
            </CustomerInfoContext.Provider>
        </CustomerStatusContext.Provider>
    );
}
