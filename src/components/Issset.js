// const  Issset = (value) => {
//     if (typeof value !== 'undefined') {
//         if (Array.isArray(value)) { 
//             if (value.length != 0) return true; else return false;
//         } else {
//             if (value != null) return true; else return false;
//         }
//     } else return false;
// }

// export {Issset}


///////////////////////////////////
const Issset = (value, array = null) => {
    if (array != null) {
        if ("value" in array) return true; else return false
    } else if (typeof value !== 'undefined') {
        if (Array.isArray(value)) {
            if (value.length != 0) return true; else return false;
        } else {
            if (value != null) return true; else return false;
        }
    } else return false;
}

export { Issset }