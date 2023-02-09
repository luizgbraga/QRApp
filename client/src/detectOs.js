export default function getOperatingSystem() {
    if (/windows phone/i.test(navigator.userAgent)) {
        return 'windowsPhone';
    }

    if (/android/i.test(navigator.userAgent)) {
        return 'android';
    }

    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        return 'ios';
    }

    return 'unknown';
}