import {bootstrap} from "./framework/core/bootstrap";
import {appModule} from "./app/app.module";
import {wfn} from "./framework/index";

wfn.delay(2000).then(()=>{
    bootstrap(appModule);
})
