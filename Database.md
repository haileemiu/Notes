# Database Best Practices

- table plural; field singular
    - daily_tasks; task
- FK table
    - singular +__s
        - daily_task_completions
    - UPDATE_ON is not often used
- Boolean fields
    - end with 'at' (or something like that)
- time field tip
    - `completed_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()`
- VS Code
    - default MSql highlighting