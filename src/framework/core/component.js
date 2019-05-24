import {wfn} from "../tools/util";

export class Component {
    constructor(config){
        this.template = config.template;
        this.selector = config.selector;
        this.el = null;
    }

    render(){
        this.el = document.querySelector(this.selector);
        if(!this.el) throw new Error(`Component with selector ${this.selector} wasn't found`);
        console.log(this.el)
        this.el.innerHTML = this.template;

        this.__initEvent()

    }

    __initEvent() {
        if(wfn.isUndefined(this.events)) return

        let events = this.events();

        Object.keys(events).forEach(key =>{
            let listener = key.split(' ')

            console.log(listener)
            this.el
                .querySelector(listener[1])
                .addEventListener(listener[0],this[events[key]].bind(this))
        })
    }
}