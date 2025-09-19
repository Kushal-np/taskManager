import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasks, deleteTask, type Task } from "../api/api.tsx";

export default function TaskList() {
  const queryClient = useQueryClient();

  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching tasks</p>;

  return (
    <ul>
      {tasks?.map((task: Task) => (
        <li key={task._id}>
          <strong>{task.title}</strong> — {task.status}
          <button
            onClick={() => deleteMutation.mutate(task._id)}
            style={{ marginLeft: "1rem" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
