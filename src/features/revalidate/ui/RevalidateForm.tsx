import { revalidatePath } from "next/cache";

import { Button } from "@/shared/ui";

type Props = {
  label: string;
  path: string;
};

export function RevalidateForm({ label, path }: Props) {
  const revalidatePage = async () => {
    "use server";
    revalidatePath(path, "page");
  };

  return (
    <form action={revalidatePage}>
      <Button>{label}</Button>
    </form>
  );
}
