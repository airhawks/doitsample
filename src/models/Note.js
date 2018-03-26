// max chars not limited... limit display in list to max rows
class Note {
    text = ""
    id = null
    timestamp = null
    archived = false
    archivedOn = null
    list = []
    actions = {
        create,
        archive, // no deletion allowed
        edit,
        addReminder,
        addToList
    }
}

// max chars not limited... limit display in list to 1 row
class Reminder {
    text = ""
    id = null
    remindTime = null
    timestamp = null
    archived = null
    archivedOn = null
    list = []
    actions = {
        create,
        archive, // no deletion allowed, disable reminder once archived
        edit,
        changeReminder,
        removeReminder,
        addToList
    }
}

//create a root list by default and add the main items under that. 


// TopLevel Functions

const functions = {
    login,
    logout,
    search,
}
