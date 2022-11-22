import { utilService } from './util.service.js'
// import { storageService } from './storage.service.js'
import { storageService } from './async-storage.service.js'

const TOY_LIST = 'toy-list'

function query() {
    return storageService.queryWithDelay(TOY_LIST).then((toys) => {
        // console.log('toys:', toys)
        if (!toys || !toys.length) {
            toys = _createToys()
            storageService.postMany(TOY_LIST, toys)
        }
        return toys
    })
}

function save(toy) {
    return toy._id ? _update(toy) : _add(toy)
}

function _add(addedToy) {
    const newToy = _createToy(addedToy.txt)
    return storageService.post(TOY_LIST, newToy)
}

function _update(updatedToy) {
    updatedToy.modifiedAt = Date.now()
    return storageService.put(TOY_LIST, updatedToy)
}

function remove(toyId) {
    return storageService.remove(TOY_LIST, toyId)
}

function getById(toyId) {
    return storageService.get(TOY_LIST, toyId)
}

export const toyService = {
    query,
    getById,
    save,
    remove,
}

function _createToys() {
    return [
        _createToy('Buba'),
        _createToy('Puki ba'),
    ]
}

function _createToy(name) {
    return {
        _id: utilService.makeId(),
        price: utilService.getRandomInt(20, 100),
        labels: ["Doll", "Battery Powered", "Baby"],
        name,
        inStock: true,
        createdAt: Date.now(),
    }
}
