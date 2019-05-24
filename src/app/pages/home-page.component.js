import {WFMComponent} from "../../framework/index";

class HomePageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
<div class="admin-page" style="text-align: center">
    <p>Hello, Admin!</p>
</div>
`
});
