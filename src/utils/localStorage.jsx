
const employees = [
    {
        id: 1,
        firstname: "Arjun",
        email: "employee1@example.com",
        password: "1234",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                taskNumber: 101,
                title: "Prepare report",
                description: "Create monthly sales report",
                date: "2026-05-20",
                category: "Reporting",
                active: true,
                new: true,
                completed: false,
                failed: false
            },
            {
                taskNumber: 102,
                title: "Client meeting",
                description: "Discuss project requirements",
                date: "2026-05-18",
                category: "Meeting",
                active: false,
                new: false,
                completed: true,
                failed: false
            },
            {
                taskNumber: 103,
                title: "Fix bugs",
                description: "Resolve login issues",
                date: "2026-05-19",
                category: "Development",
                active: false,
                new: false,
                completed: false,
                failed: true
            }
        ]
    },

    {
        id: 2,
        firstname: "Rahul",
        email: "employee2@example.com",
        password: "1234",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                taskNumber: 201,
                title: "Design UI",
                description: "Create dashboard layout",
                date: "2026-05-21",
                category: "Design",
                active: true,
                new: true,
                completed: false,
                failed: false
            },
            {
                taskNumber: 202,
                title: "Update docs",
                description: "Revise API documentation",
                date: "2026-05-17",
                category: "Documentation",
                active: false,
                new: false,
                completed: true,
                failed: false
            },
            {
                taskNumber: 203,
                title: "Team sync",
                description: "Weekly sync-up meeting",
                date: "2026-05-16",
                category: "Meeting",
                active: false,
                new: false,
                completed: false,
                failed: true
            }
        ]
    },

    {
        id: 3,
        firstname: "Vikram",
        email: "employee3@example.com",
        password: "1234",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                taskNumber: 301,
                title: "Database backup",
                description: "Backup production DB",
                date: "2026-05-22",
                category: "Maintenance",
                active: true,
                new: true,
                completed: false,
                failed: false
            },
            {
                taskNumber: 302,
                title: "Optimize queries",
                description: "Improve DB performance",
                date: "2026-05-19",
                category: "Database",
                active: false,
                new: false,
                completed: true,
                failed: false
            },
            {
                taskNumber: 303,
                title: "Fix downtime issue",
                description: "Investigate server crash",
                date: "2026-05-18",
                category: "Support",
                active: false,
                new: false,
                completed: false,
                failed: true
            }
        ]
    },

    {
        id: 4,
        firstname: "Karan",
        email: "employee4@example.com",
        password: "1234",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                taskNumber: 401,
                title: "Marketing plan",
                description: "Prepare Q3 strategy",
                date: "2026-05-23",
                category: "Marketing",
                active: true,
                new: true,
                completed: false,
                failed: false
            },
            {
                taskNumber: 402,
                title: "Social media post",
                description: "Publish campaign",
                date: "2026-05-20",
                category: "Marketing",
                active: false,
                new: false,
                completed: true,
                failed: false
            },
            {
                taskNumber: 403,
                title: "Ad analysis",
                description: "Analyze campaign performance",
                date: "2026-05-19",
                category: "Analytics",
                active: false,
                new: false,
                completed: false,
                failed: true
            }
        ]
    },

    {
        id: 5,
        firstname: "Rohan",
        email: "employee5@example.com",
        password: "1234",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                taskNumber: 501,
                title: "Test features",
                description: "Perform QA testing",
                date: "2026-05-22",
                category: "Testing",
                active: true,
                new: true,
                completed: false,
                failed: false
            },
            {
                taskNumber: 502,
                title: "Bug report",
                description: "Document issues",
                date: "2026-05-20",
                category: "Testing",
                active: false,
                new: false,
                completed: true,
                failed: false
            },
            {
                taskNumber: 503,
                title: "Regression testing",
                description: "Verify fixes",
                date: "2026-05-18",
                category: "Testing",
                active: false,
                new: false,
                completed: false,
                failed: true
            }
        ]
    }
];

const admin = {
    id: 100,
    firstname: "Admin",
    email: "admin@example.com",
    password: "1234"
};




export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

return {employees, admin}
}