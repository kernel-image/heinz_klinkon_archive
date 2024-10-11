const getNextIndex = (currentIndex, listLength) => {

    if (currentIndex === listLength - 1) {
        return 0
    }
    return currentIndex + 1
}

const getPreviousIndex = (currentIndex, listLength) => {

    if (currentIndex === 0) {
        return listLength - 1
    }
    return currentIndex - 1
}

const getIndex = (currentIndex, listLength, type) => {
    if (!listLength || listLength < 1) {
        return null
    }
    if (currentIndex == null || currentIndex < 0 || currentIndex >= listLength) {
        return 0
    }
    if (type === 'next') {
        return getNextIndex(currentIndex, listLength)
    } else if (type === 'previous') {
        return getPreviousIndex(currentIndex, listLength)
    }
}

export {getIndex}