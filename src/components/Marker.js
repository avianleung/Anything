import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash.isempty';

// examples:
import GoogleMap from '../components/GoogleMap';

// consts: [34.0522, -118.2437]
import LOS_ANGELES_CENTER from '../const/la_center';

const getInfoWindowString = (place) => `
    <div>
      <div style="font-size: 16px;">
        ${place.name}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
        ${place.rating}
        </span>
        <span style="color: orange;">${String.fromCharCode(9733).repeat(Math.floor(place.rating))}</span><span style="color: lightgrey;">${String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}</span>
      </div>
      <div style="font-size: 14px; color: grey;">
        ${place.types[0]}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${'$'.repeat(place.price_level)}
      </div>
      <div style="font-size: 14px; color: green;">
        ${place.opening_hours.open_now ? 'Open' : 'Closed'}
      </div>
    </div>`;

// Refer to https://github.com/google-map-react/google-map-react#use-google-maps-api
const handleApiLoaded = (map, maps, places) => {
  const markers = [];
  const infowindows = [];

  places.forEach((place) => {
    markers.push(new maps.Marker({
      position: {
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
      },
      map,
    }));

    infowindows.push(new maps.InfoWindow({
      content: getInfoWindowString(place),
    }));
  });

  markers.forEach((marker, i) => {
    marker.addListener('click', () => {
      infowindows[i].open(map, marker);
    });
  });
};



const MarkerInfoWindowGmapsObj = () => {
  const placeArray = [{
    "formatted_address": "3818 Sunset Blvd, Los Angeles, CA 90026, USA",
    "geometry": {
      "location": {
        "lat": 34.091158,
        "lng": -118.2795188
      },
      "viewport": {
        "northeast": {
          "lat": 34.09258172989272,
          "lng": -118.2780556701073
        },
        "southwest": {
          "lat": 34.08988207010728,
          "lng": -118.2807553298927
        }
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
    "id": "1113d3dd7339f965caae39387dd808a9e877bc2e",
    "name": "Flore Vegan",
    "opening_hours": {
      "open_now": false,
      "weekday_text": []
    },
    "photos": [{
      "height": 2336,
      "html_attributions": [
        "<a href=\"https://maps.google.com/maps/contrib/100540448898812651487/photos\">Roman Roze</a>"
      ],
      "photo_reference": "CmRaAAAA69UVwaJnUQXQUSSX9IfB3b29opNIohkexsGAGoHTD5Lyg24lhpBtaiNlrgihstR-k7Su9Vgbc8-eE5qHEdeLVY1QTfiuyS9TPp3e2GMM_grW2FtrgrFQGtMJSeJ336cPEhCVHYfFzoOgrrKdXlk34rJiGhSXSv_XG1q1CtOrWJjWQrxJmLvIPg",
      "width": 3504
    }],
    "place_id": "ChIJj62e80jHwoARusJT4mjohWw",
    "price_level": 2,
    "rating": 4.6,
    "reference": "CmRbAAAAM9_YQ6Dt9T69zucczidzOd6HU2vmzaXvTG-lJ89KyBlJVBJ0aEfar2Exre4iDWKHjExUshYSpAXEzA-YqotVnOt4XznKY_vkD520XK5nzFz5v5IefUe6FDBqZPzYlxRDEhAgQvwzNjwC49WWlyoMKza5GhS6r-VIl1lXdMl_JEW67yL7fPkZdg",
    "types": [
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
    ]
  },
  {
    "formatted_address": "1700 Sunset Blvd, Los Angeles, CA 90026, USA",
    "geometry": {
      "location": {
        "lat": 34.0771192,
        "lng": -118.2587199
      },
      "viewport": {
        "northeast": {
          "lat": 34.07856197989273,
          "lng": -118.2573112201073
        },
        "southwest": {
          "lat": 34.07586232010728,
          "lng": -118.2600108798928
        }
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
    "id": "d8bc8d867ccf72cbc552e100238a0820628963ee",
    "name": "Sage Plant Based Bistro and Brewery Echo Park",
    "opening_hours": {
      "open_now": false,
      "weekday_text": []
    },
    "photos": [{
      "height": 3024,
      "html_attributions": [
        "<a href=\"https://maps.google.com/maps/contrib/105756638182226336287/photos\">Anurag Singhai</a>"
      ],
      "photo_reference": "CmRaAAAAW6v0EyZa77vrG5Aq8zbnU1sR7pljqfoDpSxXhISFgWoYWLkFY5hh7YCFbzYLj1XzflTJOrCXJa-q5jPT4L0vMY8cjXrhCzB5y7Z--qJTWOO_NxaRUBbB5QhpxyUT-R6tEhBru_ZZ_xcCxFueYrRxI6pFGhRgiExnWWOhU2Ii_NnW6M8R4xs4IQ",
      "width": 4032
    }],
    "place_id": "ChIJ6T9ggBvHwoARc3aegK3PBe0",
    "price_level": 2,
    "rating": 4.6,
    "reference": "CmRbAAAAy5CT3sE8bRlADeIeMYtC7NRdE58vKOCjOvhZNUs0QwBD7kSS6WIfo3wmxvt4EGZm5TJ6WdqOCRSnnnFoXAVpz9F3EyZPosUDCN2LJIvtYxwS3BYkwh6uVQRSj-OPLak6EhBRf8xOpcuc5WWWBgGNbGGbGhSYiomy4iNV-g_KzzqNrpymm3MxQw",
    "types": [
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
    ]
  }]

  const [places, setPlaces] = useState(placeArray)
  const [userCoords, setUserCoords] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords)
      setUserCoords(position.coords);

      const placesCopy = [...places]
      placesCopy[0].geometry.location.lat = position.coords.latitude
      placesCopy[0].geometry.location.lng = position.coords.longitude
    });
  }, [])



    return (
      <>
        {!isEmpty(places) && (
          <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 34.0522, lng: 118.2437 }}
            center={{ lat: userCoords.latitude, lng: userCoords.longitude }}
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, places)}
          />
        )}
      </>
    );
}

export default MarkerInfoWindowGmapsObj;