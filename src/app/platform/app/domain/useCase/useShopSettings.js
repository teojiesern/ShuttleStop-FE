import { useMemo, useRef } from 'react';
import ShopSettingsFakeRepositoryImpl from '../../data/ShopSettingsFakeRepositoryImpl';

export default function useShopSettings() {
    const repostitoryRef = useRef(new ShopSettingsFakeRepositoryImpl());

    const getShopSettings = async () => {
        const response = await repostitoryRef.current.getShopSettings();

        return response.data;
    };

    return useMemo(
        () => ({
            getShopSettings,
        }),
        [],
    );
}
