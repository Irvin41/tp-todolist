import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const InputChange = (event) => {
    setTask(event.target.value);
  };

  const AddTask = () => {
    if (task.trim() === "") return;

    // 1. On crée un objet
    const newTask = {
      id: Date.now(),
      text: task,
    };

    // 2. On ajoute l'OBJET au tableau
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const DeleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Liste des tâches</h1>
      <input
        onChange={InputChange}
        placeholder="ajouter une tâche"
        value={task}
      />
      <button onClick={AddTask}>Ajouter la tâche</button>

      <div>
        {tasks.map((t) => (
          /* 4. On utilise l'ID unique comme clé (key) pour React */
          <p key={t.id}>
            {t.text}
            <button onClick={() => DeleteTask(t.id)}>Supprimer</button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
