const getOperatingSystem = () => {
    if (/windows phone/i.test(navigator.userAgent)) {
        return 'Windows Phone';
    }

    if (/android/i.test(navigator.userAgent)) {
        return 'Android';
    }

    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        return 'iOS';
    }

    return 'unknown';
}

export default getOperatingSystem;