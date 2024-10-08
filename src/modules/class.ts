export * from '@/core/class';

import {
    addClass as add,
    addClassOnInterval as addOnInterval,
    addClassOnViewportEnter as addOnViewportEnter,
    addClasses as addMany,
    addUniqueClass as addUnique,
    hasAnyClass as hasAny,
    removeClass as remove,
    removeClassOnInterval as removeOnInterval,
    replaceClass as replace,
    replaceClassPrefix as replacePrefix,
    replaceClasses as replaceMany,
    toggleClass as toggle,
    toggleClassConditionally as toggleConditionally,
    toggleClassOnConnectionStatus as toggleOnConnectionStatus,
    toggleClassOnCopy as toggleOnCopy,
    toggleClassOnDeviceMotion as toggleOnDeviceMotion,
    toggleClassOnFocus as toggleOnFocus,
    toggleClassOnGeolocationChange as toggleOnGeolocationChange,
    toggleClassOnIdleTime as toggleOnIdleTime,
    toggleClassOnMediaQueryChange as toggleOnMediaQueryChange,
    toggleClassOnOrientationChange as toggleOnOrientationChange,
    toggleClassOnSwipe as toggleOnSwipe,
} from '@/core/class';

const ClassUtils = {
    add,
    addOnInterval,
    addOnViewportEnter,
    addMany,
    addUnique,
    hasAny,
    remove,
    removeOnInterval,
    replace,
    replacePrefix,
    replaceMany,
    toggle,
    toggleConditionally,
    toggleOnConnectionStatus,
    toggleOnCopy,
    toggleOnDeviceMotion,
    toggleOnFocus,
    toggleOnGeolocationChange,
    toggleOnIdleTime,
    toggleOnMediaQueryChange,
    toggleOnOrientationChange,
    toggleOnSwipe,
};

export default ClassUtils;
