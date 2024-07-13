# To-Do List Application

This is a comprehensive and classy To-Do List application built with React. The application allows users to add, edit, complete, remove, and filter tasks. Tasks are stored in localStorage, ensuring persistence across page refreshes. The application also displays the current date and time.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as complete/incomplete
- Remove tasks
- Filter tasks (all, completed, incomplete)
- Sort tasks (A-Z, Z-A)
- LocalStorage integration for task persistence
- Display current date and time
- Reset tasks for a new day

## Testing the Application

This section provides instructions for testing the To-Do List component to ensure it meets all specified functionalities: task addition, removal, completion marking, input validation, dynamic task display, sorting, filtering, and localStorage integration.

### 1. Task Addition

- **Step 1:** Open the application in your browser.
- **Step 2:** Enter a task in the input field.
- **Step 3:** Click the "Add Task" button.

**Expected Result:** The new task should appear in the task list below the input field.

### 2. Task Removal

- **Step 1:** Add a few tasks to the list.
- **Step 2:** Click the "Remove" button next to a task.

**Expected Result:** The selected task should be removed from the task list.

### 3. Task Completion Marking

- **Step 1:** Add a few tasks to the list.
- **Step 2:** Click the "Complete" button (checkmark) next to a task.

**Expected Result:** The task should be visually marked as completed, typically by showing a checkmark next to it.

### 4. Task Editing

- **Step 1:** Add a few tasks to the list.
- **Step 2:** Click the "Edit" button next to a task.
- **Step 3:** Modify the task text in the input field.
- **Step 4:** Click the "Save" button.

**Expected Result:** The task should be updated with the new text.

### 5. Input Validation

- **Step 1:** Attempt to add an empty task.
- **Step 2:** Check the behavior of the application.

**Expected Result:** The application should prevent adding an empty task.

### 6. Dynamic Task Display

- **Step 1:** Add, edit, remove, and complete tasks.

**Expected Result:** The task list should dynamically update to reflect these changes without requiring a page refresh.

### 7. Sorting Tasks

- **Step 1:** Add multiple tasks with different names.
- **Step 2:** Use the sort button to sort tasks alphabetically (A-Z or Z-A).

**Expected Result:** Tasks should reorder accordingly.

### 8. Filtering Tasks

- **Step 1:** Add several tasks and mark some as completed.
- **Step 2:** Use the filter button to view all tasks, only completed tasks, or only incomplete tasks.

**Expected Result:** The task list should update to show tasks based on the selected filter.

### 9. LocalStorage Integration

- **Step 1:** Add several tasks to the list.
- **Step 2:** Open Developer Tools (F12 or Ctrl+Shift+I) and go to the "Application" tab.
- **Step 3:** Verify that tasks are stored in localStorage under your application's domain.
- **Step 4:** Refresh the page.

**Expected Result:** Tasks should persist across page refreshes and be loaded from localStorage.

### 10. Reset Tasks for a New Day

- **Step 1:** Add several tasks to the list.
- **Step 2:** Click the "Reset" button.

**Expected Result:** All tasks should be cleared from the list and localStorage, preparing the list for a new day.
