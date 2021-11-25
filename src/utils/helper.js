/**
 * Get the child component lists based on employees
 * @param {*} data 
 * @param {*} parentId 
 * @returns 
 */
export const getNodList = (data, parentId) => {
    const filterData = Object.keys(data || {}).filter((key) => {
        return data[key].manager === parentId
    })
    return filterData
}
/**
 * Get all the parents
 * @param {*} data 
 * @param {*} id 
 * @returns  parent ids
 */
export const getParents = (data, id) => {
    let parents = [data[id].manager];
    let rootId = data[id].manager;

    while(rootId !== null) {
        parents.push(data[rootId].manager);
        rootId = data[rootId].manager;
    }
    return parents;
}

/**
 * Search in object based on key value
 * @param {*} obj 
 * @param {*} txt 
 * @returns 
 */
export const search = (obj, txt) => {
    const arr = Object.keys(obj);
    return arr.filter(key => Object.values(obj[key]).some(val => (val || '').toLowerCase().indexOf(txt.toLowerCase()) > -1));
}

/**
 * Ensurerd whether we can drag or not based on parent and child
 * @param {*} obj 
 * @param {*} managerID 
 * @param {*} currentID 
 * @returns 
 */
export const canDrag = (obj, managerID, currentID) => {
    if (managerID === currentID || currentID === null || getParents(obj, managerID).indexOf(currentID) > -1) 
        return false;
    return true;
}