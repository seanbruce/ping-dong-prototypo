"use client";

import { useFormState } from "react-dom";
import { test } from "@/actions/dummy-action";
import { Button } from "@/components/ui/button";

export default function TestFormAction() {
  const [state, formAction] = useFormState(test, null);
  console.log({ state });
  return (
    <form action={formAction}>
      <Button type="submit">Submit</Button>
    </form>
  );
}
