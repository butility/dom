export * from '@/core/attribute';
import {
    attributesToQueryString as toQueryString,
    compareAttributes as compare,
    copyAttributes as copy,
    findElementByAttribute as findElement,
    getAllAttributes as getAll,
    getAttribute as get,
    getAttributesByPrefix as getByPrefix,
    hasAnyAttributes as hasAny,
    hasAttribute as has,
    removeAllAttributes as removeAll,
    removeAttribute as remove,
    removeAttributesByName as removeByName,
    removeAttributesByPrefix as removeByPrefix,
    setAttribute as set,
    setAttributesFromQueryString as setFromQueryString,
    toggleAttribute as toggle,
    toggleAttributes as toggleMany,
} from '@/core/attribute';

const Attribute = {
    toQueryString,
    compare,
    copy,
    findElement,
    getAll,
    get,
    getByPrefix,
    hasAny,
    has,
    removeAll,
    remove,
    removeByName,
    removeByPrefix,
    set,
    setFromQueryString,
    toggle,
    toggleMany,
};

export default Attribute;
