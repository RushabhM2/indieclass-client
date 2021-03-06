import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setExploreCategory } from '../store/actions';
import Constants from 'expo-constants'

function AddressSearch({ setAddress, updateGoogleID }) {
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
        setAddress(data.description);
        updateGoogleID(data.place_id);
      }}
      styles={{
        textInputContainer: {
          width: 300,
          backgroundColor: 'white',
          height: 40,
          width: 300,
          borderColor: '#B1B0AF',
          borderWidth: 1,
          backgroundColor: 'white',
          borderRadius: 10,
          marginLeft: 45,
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
    />
  );
}

export default AddressSearch;
