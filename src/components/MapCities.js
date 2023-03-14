const MapCities = (props) => {
    return (
        props.cities.map(cities =>
            <ul key={cities.key} >
                <li>{cities.englishName}, {cities.administrativeArea.id}, {cities.country.id}</li>
            </ul>
        ))
}

export default MapCities;