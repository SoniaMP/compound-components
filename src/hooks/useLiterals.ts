import { useCallback } from "react";

export const useLiterals = () => {
  const literals: Record<string, string> = {
    "dialog.yes": "Yes",
    "dialog.no": "No",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",
    maybe: "Maybe",
  };

  const getLiteral = useCallback((key: string, defaultValue?: string) => {
    return literals[key] || defaultValue || key;
  }, []);

  return literals;
};
