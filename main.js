const user = {
    name: 'Elnur',
    height: 179,
    phone: {
        model: 'Iphone',
    },
    orders: ['book', 'mouse', 'mousepad']
}

user.height++

user.phone.model = "Samsung"

user.phone.marka = "s22"

delete user.name

delete user.orders[0]

// delete user.orders.length[-1]    ???

user.orders[0] = "ball"

user.orders[-1] = "headphones"

console.log(user)