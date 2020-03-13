import { UiView } from "common/routing/ui";
import React from "react";
import appRoutes from "routes";

export const App: React.FC = () => {
    return (
        <div>
            <UiView routes={appRoutes} />
        </div>
    )
}

export default App;