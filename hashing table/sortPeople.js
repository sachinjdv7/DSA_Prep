
function sortPeople(names, heights) {

    const map = new Map();

    for (let i = 0; i < names.length; i++) {

        map.set(heights[i], names[i])
    }

    heights.sort((a, b) => b - a)

    for (let i = 0; i < heights.length; i++) {

        names[i] = map.get(heights[i])
    }


    return names
}

const names = ["mary", "john", "emma"];
const heights = [180, 165, 170]

console.log(sortPeople(names, heights))