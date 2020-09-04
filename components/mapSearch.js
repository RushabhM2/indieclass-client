import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants'

function MapSearch({ setPlaceID }) {
  return (
    <GooglePlacesAutocomplete
      listViewDisplayed={false}
      query={{
        key: Constants.manifest.extra.googleKey,
        language: 'en',
      }}
      onFail={(error) => console.error(error)}
      placeholder="Search"
      onPress={(data, details = null) => {
        console.log(data.place_id);
        setPlaceID(data.place_id);
      }}
    />
  );
}

export default MapSearch;
