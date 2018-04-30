export default function getStartCities() {
  return dispatch => {
    const arrName = ['London', 'Kiev', 'Moscow', 'Prague']
    dispatch({ type: 'FETCH_CITIES', payload: arrName });
  };
}
