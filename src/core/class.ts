export function addClass(
    element: HTMLElement,
    className: string,
    options: { checkIfExists?: boolean } = {},
) {
    if (!(element instanceof HTMLElement)) {
        throw new Error('Invalid element provided.');
    }

    if (typeof className !== 'string' || !className.trim()) {
        throw new Error('Invalid className provided.');
    }

    const { checkIfExists = false } = options;

    if (checkIfExists && element.classList.contains(className)) {
        console.warn(`Class "${className}" already exists on the element.`);
        return;
    }

    element.classList.add(className);
}

export function removeClass(
    element: HTMLElement,
    className: string,
    options: { logChanges?: boolean; preserveState?: boolean } = {},
) {
    if (!(element instanceof HTMLElement)) {
        throw new Error('Invalid element provided.');
    }

    if (typeof className !== 'string' || !className.trim()) {
        throw new Error('Invalid className provided.');
    }

    const { logChanges = false, preserveState = false } = options;

    if (preserveState) {
        element.dataset.previousClassList = element.className;
    }

    element.classList.remove(className);

    if (logChanges) {
        console.log(`Class "${className}" removed from element.`);
    }
}

export function toggleClass(
    element: HTMLElement,
    className: string,
    options: { onAdd?: Function; onRemove?: Function } = {},
) {
    if (!(element instanceof HTMLElement)) {
        throw new Error('Invalid element provided.');
    }

    if (typeof className !== 'string' || !className.trim()) {
        throw new Error('Invalid className provided.');
    }

    const { onAdd, onRemove } = options;

    if (element.classList.toggle(className)) {
        if (typeof onAdd === 'function') {
            onAdd(element);
        }
    } else {
        if (typeof onRemove === 'function') {
            onRemove(element);
        }
    }
}

export function replaceClass(
    element: HTMLElement,
    oldClass: string,
    newClass: string,
    options: { enableUndo?: boolean } = {},
): Function | null {
    if (!(element instanceof HTMLElement)) {
        throw new Error('Invalid element provided.');
    }

    if (
        typeof oldClass !== 'string' ||
        !oldClass.trim() ||
        typeof newClass !== 'string' ||
        !newClass.trim()
    ) {
        throw new Error('Invalid class names provided.');
    }

    const { enableUndo = false } = options;

    removeClass(element, oldClass);
    addClass(element, newClass);

    if (enableUndo) {
        const undo = () => {
            removeClass(element, newClass);
            addClass(element, oldClass);
            console.log(
                `Undo: Class "${newClass}" replaced back with "${oldClass}".`,
            );
        };
        return undo;
    }

    return null;
}

export async function addClasses(
    element: HTMLElement,
    classNames: string[],
    options: { timeout?: number; checkForDuplicates?: boolean } = {},
) {
    if (!(element instanceof HTMLElement)) {
        throw new Error('Invalid element provided.');
    }

    if (
        !Array.isArray(classNames) ||
        classNames.some((name) => typeof name !== 'string' || !name.trim())
    ) {
        throw new Error('Invalid classNames provided.');
    }

    const { timeout = 0, checkForDuplicates = false } = options;

    if (timeout > 0) {
        await new Promise((resolve) => setTimeout(resolve, timeout));
    }

    classNames.forEach((className) => {
        if (!checkForDuplicates || !element.classList.contains(className)) {
            element.classList.add(className);
        }
    });
}

export function replaceClasses(
    element: HTMLElement,
    classMap: { [s: string]: string },
) {
    for (const oldClass in classMap) {
        if (classMap.hasOwnProperty(oldClass)) {
            replaceClass(element, oldClass, classMap[oldClass]);
        }
    }
}

export function toggleClassConditionally(
    element: HTMLElement,
    condition: boolean,
    trueClass: string,
    falseClass: string,
) {
    if (condition) {
        addClass(element, trueClass);
        removeClass(element, falseClass);
    } else {
        addClass(element, falseClass);
        removeClass(element, trueClass);
    }
}

export function hasAnyClass(
    element: HTMLElement,
    classArray: string[],
): boolean {
    for (const className of classArray) {
        if (
            typeof className === 'string' &&
            element.classList.contains(className)
        ) {
            return true;
        }
    }
    return false;
}

export function replaceClassPrefix(
    element: HTMLElement,
    oldPrefix: string,
    newPrefix: string,
) {
    const classNames = Array.from(element.classList);
    classNames.forEach((className) => {
        if (className.startsWith(oldPrefix)) {
            removeClass(element, className);
            addClass(element, className.replace(oldPrefix, newPrefix));
        }
    });
}

export function addUniqueClass(element: HTMLElement, className: string) {
    if (!element.classList.contains(className)) {
        addClass(element, className);
    }
}

export function addClassOnViewportEnter(
    element: HTMLElement,
    className: string,
) {
    const handleScroll = () => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            addClass(element, className);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

export function toggleClassOnFocus(element: HTMLElement, className: string) {
    element.addEventListener('focus', () => {
        addClass(element, className);
    });

    element.addEventListener('blur', () => {
        removeClass(element, className);
    });
}

export function toggleClassOnMediaQueryChange(
    element: HTMLElement,
    className: string,
    mediaQuery: string,
) {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const handleMediaQueryChange = (event: any) => {
        if (event.matches) {
            toggleClass(element, className);
        }
    };

    mediaQueryList.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQueryList);
}

export function toggleClassOnCopy(element: HTMLElement, className: string) {
    element.addEventListener('copy', () => {
        toggleClass(element, className);
    });
}

export function toggleClassOnIdleTime(
    element: HTMLElement,
    className: string,
    idleTime: number = 30000,
) {
    let idleTimer: NodeJS.Timeout;
    const resetIdleTimer = () => {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            toggleClass(element, className);
        }, idleTime);
    };

    document.addEventListener('mousemove', resetIdleTimer);
    document.addEventListener('keypress', resetIdleTimer);
    resetIdleTimer();
}

export function addClassOnInterval(
    element: HTMLElement,
    className: string,
    interval: number = 1000,
) {
    setInterval(() => {
        addClass(element, className);
    }, interval);
}

export function removeClassOnInterval(
    element: HTMLElement,
    className: string,
    interval: number = 1000,
) {
    setInterval(() => {
        removeClass(element, className);
    }, interval);
}

export function toggleClassOnDeviceMotion(
    element: HTMLElement,
    className: string,
) {
    window.addEventListener('deviceorientation', (event: any) => {
        const tiltThreshold = 20;
        const isTilted =
            Math.abs(event.beta) > tiltThreshold ||
            Math.abs(event.gamma) > tiltThreshold;
        if (isTilted) {
            toggleClass(element, className);
        }
    });
}

export function toggleClassOnOrientationChange(
    element: HTMLElement,
    className: string,
) {
    const handleOrientationChange = () => {
        const orientation = window.matchMedia('(orientation: portrait)').matches
            ? 'portrait'
            : 'landscape';
        toggleClass(element, `${className}-${orientation}`);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    handleOrientationChange();
}

export function toggleClassOnSwipe(element: HTMLElement, className: string) {
    let startX: number, startY: number;

    element.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    });

    element.addEventListener('touchend', (event) => {
        const deltaX = event.changedTouches[0].clientX - startX;
        const deltaY = event.changedTouches[0].clientY - startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal Swipe
            toggleClass(element, `${className}-horizontal`);
        } else {
            // Vertical Swipe
            toggleClass(element, `${className}-vertical`);
        }
    });
}

export function toggleClassOnConnectionStatus(
    element: HTMLElement,
    trueClass: string,
    falseClass: string,
) {
    const handleConnectionChange = () => {
        const isOnline = navigator.onLine;
        toggleClassConditionally(element, isOnline, trueClass, falseClass);
    };

    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);
    handleConnectionChange();
}

export function toggleClassOnGeolocationChange(
    element: HTMLElement,
    className: string,
    options: {
        enableThrottling?: boolean;
        throttleInterval?: number;
        onClassToggle?: Function;
        onError?: Function;
        geoOptions?: object;
    } = {},
) {
    if (!(element instanceof HTMLElement)) {
        throw new Error('Invalid element provided.');
    }

    if (typeof className !== 'string' || !className.trim()) {
        throw new Error('Invalid className provided.');
    }

    const {
        enableThrottling = true,
        throttleInterval = 5000,
        onClassToggle = null,
        onError = null,
        geoOptions = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
        },
    } = options;

    let lastToggleTime = 0;
    let classToggled = false;

    const toggleClassWithConditions = (position: any) => {
        const currentTime = Date.now();

        // Throttling logic to avoid excessive toggling
        if (
            enableThrottling &&
            currentTime - lastToggleTime < throttleInterval
        ) {
            console.log('Throttling geolocation updates, skipping toggle.');
            return;
        }

        toggleClass(element, className);
        if (typeof onClassToggle === 'function') {
            onClassToggle(position, classToggled);
        }
        classToggled = !classToggled;
        lastToggleTime = currentTime;
    };

    const handleGeolocationError = (error: any) => {
        console.error('Geolocation error occurred:', error.message);

        if (typeof onError === 'function') {
            onError(error);
        }
    };

    const geoWatchId = navigator.geolocation.watchPosition(
        toggleClassWithConditions,
        handleGeolocationError,
        geoOptions,
    );

    console.log('Started watching geolocation changes with ID:', geoWatchId);

    return () => {
        navigator.geolocation.clearWatch(geoWatchId);
        console.log('Stopped watching geolocation changes.');
    };
}
