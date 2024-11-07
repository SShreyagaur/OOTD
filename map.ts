declare global {
    interface Window {
    google: any;
    }
}

async function initMap(): Promise<void> {
    const { Map } = await google.maps.load();
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    });
}

window.onload = initMap;