import {bootstrap} from "./framework/core/bootstrap";
import {appModule} from "./app/app.module";
import {wfn} from "./framework/index";

//window.location.href = "#tabs/auth"


wfn.delay(100).then(()=>{
    bootstrap(appModule);
})
