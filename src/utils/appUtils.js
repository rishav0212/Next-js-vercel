

function range(st, end) {
    let list = []
    for (var i = st; i <= end; i++) {
        list.push(i)
    }

    return list
}

const paginationRange = (total, page, limit, sibling) => {
    let totalpage = 7 + sibling
    if (totalpage >= total) {
        return range(1, total)
    }

    let left = Math.max(page - sibling, 1)
    let right = Math.min(page + sibling, total)

    let showLeftDots = left > 2
    let showRightDots = right < total - 2

    if (!showLeftDots && showRightDots) {
        let pages = range(1, 3 + 2 * sibling);
        return [...pages, "...", total]
    } else if (showLeftDots && !showRightDots) {
        let pages = range(total - (3 + 2 * sibling)+1, total);
        return [1, "... ", ...pages];
    } else {
        let pages = range(left, right);
        return [1,"...", ...pages,"...",total]
    }

    return[]
}

export default paginationRange