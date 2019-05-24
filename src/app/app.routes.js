import {logInPageComponent} from "./pages/logIn-page.component";
import {tabsPageComponent} from "./pages/tabs-page.components";
import {homePageComponent} from "./pages/home-page.component";
import {notFound} from "./common/not-found.component";

export const appRoutes = [
    {path: '', component: logInPageComponent},
    {path: 'tabs', component: tabsPageComponent},
    {path: 'home', component: homePageComponent},
    {path: '**', component: notFound}
]