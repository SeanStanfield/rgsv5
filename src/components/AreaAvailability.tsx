"use client";
import React, { useState, useRef, useEffect } from "react";
import { Typography, Grid, Stack, Box, useTheme } from "@mui/material";
import styles from "./AreaAvailability.module.scss"; // Import the SCSS module
import mapboxgl, { Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// // eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass =
//     require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const AreaAvailability = () => {
    mapboxgl.accessToken =
        "pk.eyJ1Ijoic2Vhbi1zdGFuZmllbGQiLCJhIjoiY2xlNHMwbm5kMDYyNTN1bzdqMjY2N3k5eiJ9.fQBlvOS7fKOau7kAwzRCRQ";

    const PIN_LAT = 51.56637;
    const PIN_LNG = 0.2184;

    const mapContainer = useRef(null);
    const map = React.useRef<mapboxgl.Map | null>(null);
    const [lng, setLng] = useState(PIN_LNG);
    const [lat, setLat] = useState(PIN_LAT);
    const [zoom, setZoom] = useState(15);

    const theme = useTheme();

    useEffect(() => {
        if (map.current) return; // initialize map only once
        if (mapContainer.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [lng, lat],
                zoom: zoom,
                attributionControl: false,
            }).addControl(
                new mapboxgl.AttributionControl({
                    customAttribution: "RGS ROOFING",
                })
            );
        }
        if (map.current) {
            const shop = new Marker({ color: theme.palette.primary.main })
                .setLngLat([PIN_LNG, PIN_LAT])
                .addTo(map.current);
        }

        const markerHeight = 50;
        const markerRadius = 10;
        const linearOffset = 25;
        const popupOffsets: {[_: string]: [number, number]} = {
            "top": [0, 0],
            "top-left": [0, 0],
            "top-right": [0, 0],
            "bottom": [0, -markerHeight],
            "bottom-left": [
                linearOffset,
                (markerHeight - markerRadius + linearOffset) * -1,
            ],
            "bottom-right": [
                -linearOffset,
                (markerHeight - markerRadius + linearOffset) * -1,
            ],
            "left": [markerRadius, (markerHeight - markerRadius) * -1],
            "right": [-markerRadius, (markerHeight - markerRadius) * -1],
        };

        if (map.current) {
            const popup = new mapboxgl.Popup({
                offset: popupOffsets,
                className: "my-class",
            })
                .setLngLat([lng, lat])
                .setHTML(
                    "<a target='_blank' href='https://www.google.com/maps/place/RGS+Roofing+Services/@51.5663466,0.2097272,15z/data=!4m14!1m7!3m6!1s0x47d8a10a1870c1c9:0x52122ec37290fa05!2sRGS+Roofing+Services!8m2!3d51.5663466!4d0.2184819!16s%2Fg%2F1td2t4nw!3m5!1s0x47d8a10a1870c1c9:0x52122ec37290fa05!8m2!3d51.5663466!4d0.2184819!16s%2Fg%2F1td2t4nw' style='font-size: 16px; border: none; outline: none; color: black;'>Open in maps</a>"
                )
                .setMaxWidth("300px")
                .addTo(map.current);
        }
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current != null &&
            map.current.on("move", () => {
                if (map.current !== null) {
                    setLng(+map.current.getCenter().lng.toFixed(4));
                    setLat(+map.current.getCenter().lat.toFixed(4));
                    setZoom(+map.current.getZoom().toFixed(2));
                }
            });
    });

    return (
        <Box sx={{ padding: (theme) => theme.spacing(8, 0) }}>
            <Stack
                className={styles.wrapper}
                sx={{ padding: (theme) => theme.spacing(2) }}
            >
                <Typography variant="h2">Hornchurch and Essex</Typography>
                {/* ... Other content */}
            </Stack>

            <Grid container className={styles.mapSection} spacing={4}>
                <Grid item md={6} lg={7} xs={12} className={styles.map}>
                    <div ref={mapContainer} className={styles.mapContainer} />
                </Grid>

                <Grid item md={6} lg={5} xs={12} className={styles.details}>
                    <Stack>
                        <Typography variant="h3" sx={{ fontSize: 20 }}>
                            Find us today
                        </Typography>
                        {/* ... Other details */}
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AreaAvailability;
