import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { login } from "../api/login";

export const useLogin = () => {
  const router = useRouter();

  const [input, setInput] = useState({ id: "", password: "" });

  const mutation = useMutation({ mutationKey: ["login"], mutationFn: login });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate(input, {
      onSuccess() {
        router.push("/admin");
      },
    });
  };

  return { input, handleInputChange, handleSubmit };
};
