import { useContext, useRef } from 'react';
import CustomerStatusContext from '../../../../platform/app/data/CustomerStatusContext';
import SellerInfoContext from '../../../../platform/app/data/SellerInfoContext';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import { SubFolder } from '../../../../platform/constants/PlatformConstants';
import SCRegistrationRepositoryImpl from '../../data/SCRegistrationRepositoryImpl';

export default function useSellerCenterRegistration(registrationData) {
    const { setCustomerStatus } = useContext(CustomerStatusContext);
    const { setSellerInfo } = useContext(SellerInfoContext);
    const { setShopInfo } = useContext(ShopInfoContext);

    const repositoryRef = useRef(new SCRegistrationRepositoryImpl());

    const registerSeller = async () => {
        // eslint-disable-next-line no-useless-catch
        try {
            const formData = new FormData();

            formData.append('subfolder', SubFolder.SELLER);
            formData.append('sellerName', registrationData.current.sellerName);
            formData.append('sellerIcNumber', registrationData.current.sellerIC);
            formData.append('shopName', registrationData.current.shopName);
            formData.append('shopPickupAddress', registrationData.current.pickupAddress);
            formData.append('shopEmail', registrationData.current.email);
            formData.append('shopPhoneNumber', registrationData.current.phoneNumber);
            formData.append('file', registrationData.current.files[0]);

            const { data } = await repositoryRef.current.signup(formData);

            setCustomerStatus((prev) => ({
                ...prev,
                registeredSeller: true,
            }));

            setSellerInfo((prev) => ({
                ...prev,
                ...data.seller,
            }));

            setShopInfo((prev) => ({
                ...prev,
                ...data.shop,
            }));

            // clean up file
            URL.revokeObjectURL(registrationData.current.files[0].preview);
        } catch (error) {
            throw error;
        }
    };

    return {
        registerSeller,
    };
}
