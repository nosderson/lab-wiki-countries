
function GoogleMaps({ country }) {
    console.log({ country });
    return (

        <div id="map-container-google-2" class="z-depth-1-half map-container" style={{ height: '300px', width: '100%' }}>
            
            <iframe height="300px" title="maps" src={`https://maps.google.com/maps?q=${country}&t=&z=3&ie=UTF8&iwloc=&output=embed`} frameborder="0"
                allowfullscreen>

            </iframe>
        </div>

    );
}

export default GoogleMaps;