import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Joe Johnson',
        email: 'joe@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jane Johnson',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users