// Any basicamente hace que uses typescript evitando el tipado estatico pertinente
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;


//Unknown permite que puedas utilizar cualquier tipo de datos siempre y cuando hagas una confimacion de que dato convertiras la variable
let anyUnknowVar: unknown;

anyUnknowVar = true;
anyUnknowVar = undefined;
anyUnknowVar = null;
anyUnknowVar = 1;
anyUnknowVar = [];
anyUnknowVar = {};

if (typeof anyUnknowVar === 'string') {
    anyUnknowVar.toUpperCase();
}
if (typeof anyUnknowVar === 'boolean') {
    let isNewV2: boolean = anyUnknowVar;
}
const parse = (str: string):unknown => {
    return JSON.parse(str);
}
