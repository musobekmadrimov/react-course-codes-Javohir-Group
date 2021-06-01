import React from 'react'
import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl, TrafficControl, TypeSelector } from 'react-yandex-maps';
import './yandexStyles.css';

export default function YandexMap() {
    return (
        <YMaps width="900" height="500" className="yandexMapMain">
            <Map
                defaultState={{
                    center: [41.549696, 60.631386],
                    zoom: 17,
                }}
                
            >
                <Placemark geometry={[41.549696, 60.631386]} />
                <FullscreenControl options={{
                    float: 'left'
                }}
                />
                <GeolocationControl options={{
                    float: 'right'
                }}
                />
                <TrafficControl options={{
                    float: 'right'
                }}
                />
                 <TypeSelector options={{ float: 'right' }} />
            </Map>
        </YMaps>

    )
}
