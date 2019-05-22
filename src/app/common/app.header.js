import {WFMComponent} from "../../framework/index";

class AppHeader extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
<nav class ="indigo">
  <div class="nav-wrapper">
    <a href="#" class="brand-logo" style = "margin-left: 50px;">Logo</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="#">Main</a></li>
      <li><a href="#tabs">Tabs<span class="new badge">4</span></a></li>
      <li><a href="#">sass</a></li>
    </ul>
  </div>
</nav>`
});