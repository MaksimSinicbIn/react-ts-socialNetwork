import React from 'react';
import Preloader from '../components/common/preloader/Preloader';

export const withSuspense = (Component: React.ComponentType<any>) => {
    return (props: any) => {
        return (
            <React.Suspense fallback={<Preloader />}>
                <Component {...props} />
            </React.Suspense>
        )
    }
}