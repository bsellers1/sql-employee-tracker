INSERT INTO departments (name)
VALUES  ("Sales"),
        ("Legal"),
        ("Finance"),
        ("Engineering");

INSERT INTO roles (title, salary, departments_id)
VALUES  ("Sales Lead", 100000, 1),
        ("Salesperson", 80000, 1),
        ("Lead Engineer", 150000, 4),
        ("Software Engineer", 120000, 4),
        ("Account Manager", 160000, 3),
        ("Accountant", 125000, 3),
        ("Legal Team Lead", 250000, 2),
        ("Lawyer", 190000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Harry", "Potter", 1, NULL),
        ("Percy", "Jackson", 2, 1),
        ("Zoro", "Roronora", 3, NULL),
        ("Sanji", "Vinsmoke", 4, 3),
        ("Midoriya", "Izuku", 5, NULL),
        ("Naruto", "Uzumaki", 6, 5),
        ("Sasuke", "Uchiha", 7, NULL),
        ("Rock", "Lee", 8, 7);