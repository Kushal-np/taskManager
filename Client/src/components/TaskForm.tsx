import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type FormData = {
  title: string;
  description: string;
};

export default function TaskForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: Partial<Task>) => createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      reset();
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate({ ...data, status: "todo" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true })} placeholder="Task title" />
      <input {...register("description")} placeholder="Description" />
      <button type="submit">Add Task</button>
    </form>
  );
}
