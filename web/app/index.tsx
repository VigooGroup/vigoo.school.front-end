import { UiView } from "common/routing/ui";
import React from "react";
import appRoutes from "routes";

export * from './notfound';
export * from './signin';
export * from './signup';

export const App: React.FC = () => {
    return (
        <div>
            <UiView routes={appRoutes} />
        </div>
    )
}

export default App;