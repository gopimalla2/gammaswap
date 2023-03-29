const getFavListFromLocalStorage = () => {
    let favList = [];
    const listFromLocalStorage = localStorage.getItem('fav_list');
    if(listFromLocalStorage){
      favList = JSON.parse(listFromLocalStorage);
    }
    return favList;
}

export {
    getFavListFromLocalStorage
}