import { ReactNode } from 'react';
import { StatsigUser, StorageProvider } from 'uniswap/src/features/gating/sdk/statsig';
type StatsigProviderWrapperProps = {
    user: StatsigUser;
    children: ReactNode;
    onInit?: () => void;
    options?: Partial<StatsigUser>;
    storageProvider?: StorageProvider;
};
export declare function StatsigProviderWrapper({ children, options, user, storageProvider, onInit, }: StatsigProviderWrapperProps): ReactNode;
export {};
//# sourceMappingURL=StatsigProviderWrapper.d.ts.map