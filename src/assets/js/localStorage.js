const addToDB = (item) => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1
    } else {
        db[item] = 1
    }
    saveToDB(db);
}

const removeFromDB = (item) => {
    const db = getDb();
    delete db[item];
    saveToDB(db);
}

const saveToDB = (db) => {
    const jsonString = JSON.stringify(db);
    localStorage.setItem('shopping-cart', jsonString);
}

const getDb = () => {
    let savedDB = localStorage.getItem('shopping-cart');
    if (savedDB) {
        savedDB = JSON.parse(savedDB);
    } else {
        savedDB = {};
    }
    return savedDB;
}

export { getDb, addToDB, removeFromDB }