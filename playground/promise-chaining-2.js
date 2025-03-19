require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('67c0c2fc74ce110748320453').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('67be214709cb1b639030a460').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})