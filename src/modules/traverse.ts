export * from '@/core/traverse';

import {
    findAll,
    getChildren,
    getClosest,
    getNextSibling,
    getParent,
    getPreviousSibling,
    selectElem as select,
} from '@/core/traverse';

const Traverse = {
    findAll,
    getChildren,
    getClosest,
    getNextSibling,
    getParent,
    getPreviousSibling,
    select,
};

export default Traverse;
