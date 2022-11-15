"use client";
import { useRouter } from "next/navigation";

export const Form: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const input = e.target.input.value;
    router.push(`/search/${input}`);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input type="text" name="input" />
      <input type="submit" />
    </form>
  );
};
