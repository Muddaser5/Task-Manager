
const data = {


    "employees" : [
        {
            "id": 1,
            "email": "employee1@example.com",
            "password": "1234",
            "tasks": [
                {
                    "title": "Prepare report",
                    "description": "Create monthly sales report",
                    "date": "2026-05-20",
                    "category": "Reporting",
                    "active": true,
                    "new": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Client meeting",
                    "description": "Discuss project requirements",
                    "date": "2026-05-18",
                    "category": "Meeting",
                    "active": false,
                    "new": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "title": "Fix bugs",
                    "description": "Resolve login issues",
                    "date": "2026-05-19",
                    "category": "Development",
                    "active": false,
                    "new": false,
                    "completed": false,
                    "failed": true
                }
            ]
        },
        {
            "id": 2,
            "email": "employee2@example.com",
            "password": "1234",
            "tasks": [
                {
                    "title": "Design UI",
                    "description": "Create dashboard layout",
                    "date": "2026-05-21",
                    "category": "Design",
                    "active": true,
                    "new": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Update docs",
                    "description": "Revise API documentation",
                    "date": "2026-05-17",
                    "category": "Documentation",
                    "active": false,
                    "new": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "title": "Team sync",
                    "description": "Weekly sync-up meeting",
                    "date": "2026-05-16",
                    "category": "Meeting",
                    "active": false,
                    "new": false,
                    "completed": false,
                    "failed": true
                }
            ]
        },
        {
            "id": 3,
            "email": "employee3@example.com",
            "password": "1234",
            "tasks": [
                {
                    "title": "Database backup",
                    "description": "Backup production DB",
                    "date": "2026-05-22",
                    "category": "Maintenance",
                    "active": true,
                    "new": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Optimize queries",
                    "description": "Improve DB performance",
                    "date": "2026-05-19",
                    "category": "Database",
                    "active": false,
                    "new": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "title": "Fix downtime issue",
                    "description": "Investigate server crash",
                    "date": "2026-05-18",
                    "category": "Support",
                    "active": false,
                    "new": false,
                    "completed": false,
                    "failed": true
                }
            ]
        },
        {
            "id": 4,
            "email": "employee4@example.com",
            "password": "1234",
            "tasks": [
                {
                    "title": "Marketing plan",
                    "description": "Prepare Q3 strategy",
                    "date": "2026-05-23",
                    "category": "Marketing",
                    "active": true,
                    "new": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Social media post",
                    "description": "Publish campaign",
                    "date": "2026-05-20",
                    "category": "Marketing",
                    "active": false,
                    "new": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "title": "Ad analysis",
                    "description": "Analyze campaign performance",
                    "date": "2026-05-19",
                    "category": "Analytics",
                    "active": false,
                    "new": false,
                    "completed": false,
                    "failed": true
                }
            ]
        },
        {
            "id": 5,
            "email": "employee5@example.com",
            "password": "1234",
            "tasks": [
                {
                    "title": "Test features",
                    "description": "Perform QA testing",
                    "date": "2026-05-22",
                    "category": "Testing",
                    "active": true,
                    "new": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Bug report",
                    "description": "Document issues",
                    "date": "2026-05-20",
                    "category": "Testing",
                    "active": false,
                    "new": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "title": "Regression testing",
                    "description": "Verify fixes",
                    "date": "2026-05-18",
                    "category": "Testing",
                    "active": false,
                    "new": false,
                    "completed": false,
                    "failed": true
                }
            ]
        }
    ],
        "admin" : {
            "id": 100,
            "email": "admin@example.com",
            "password": "1234"
        }
}



export const setLocalStorage = () => {
    localStorage.setItem('employes', JSON.stringify(employees))
}

export const getLocalStorage = () => {

}