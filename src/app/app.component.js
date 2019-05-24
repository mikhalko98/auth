import {WFMComponent} from "../framework/index";

class AppComponent extends WFMComponent{
    constructor(config){
        super(config)
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
<div class = "main">
    <app-header></app-header>
     <router-outlet></router-outlet>
</div>

`
});