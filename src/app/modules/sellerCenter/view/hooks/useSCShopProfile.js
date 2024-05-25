import { useCallback, useContext, useMemo, useRef } from 'react';
import SellerInfoContext from '../../../../platform/app/data/SellerInfoContext';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import { SubFolder } from '../../../../platform/constants/PlatformConstants';
import SellerRepositoryImpl from '../../data/SellerRepositoryImpl';

export default function useSCShopProfile() {
    const { sellerId } = useContext(SellerInfoContext);
    const { setShopInfo } = useContext(ShopInfoContext);
    const repositoryRef = useRef(new SellerRepositoryImpl());

    const updateShopProfile = useCallback(
        async ({ name, description, file }) => {
            const formData = new FormData();

            formData.append('subfolder', SubFolder.SELLER);
            formData.append('sellerId', sellerId);
            formData.append('name', name);
            formData.append('description', description);
            formData.append('file', file[0]);

            const { data } = await repositoryRef.current.updateShopInformationFile(formData);

            setShopInfo((prev) => ({
                ...prev,
                shopName: data.name,
                shopDescription: data.description,
                shopLogoPath: data.logoPath,
            }));
        },
        [sellerId, setShopInfo],
    );

    return useMemo(
        () => ({
            updateShopProfile,
        }),
        [updateShopProfile],
    );
}
