import Users from "../models/users.js"
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await Users.find({});
        if (allUsers.length > 0) {
            return res.status(200).send(allUsers);
        }
        return res.status(204).json({ message: "No users to fetch" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server error" });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await Users.findOneAndDelete({ _d: req.body.userId })
        if (user) {
            return res.status(200).send("User deleted successfully");
        }
        return res.status(404).send(`No user with id ${req.body.userId}`);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server error" });
    }

}

const deleteAllUsers = async (req, res) => {
    try {
        const count = await Users.deleteMany({});

        if (count.deletedCount > 0) {
            return res.status(200).json({ message: ` ${count.deletedCount}  users deleted!` })
        }
        return res.status(204).json({ message: "No users to delete " });
    } catch (error) {
        console.log(error.message);
    }
}


export {
    getAllUsers,
    deleteAllUsers,
    deleteUser,

}
