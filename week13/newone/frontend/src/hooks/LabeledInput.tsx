import React from 'react';

type Props<T extends object> = {
  title: string;
  type?: string;
  placeholder?: string;
  name: keyof T; // 👈 identify which field to update
  dispatchFn: (state: T) => void;
  currState: T;
};

const LabeledInput = <T extends object>({
  title,
  type = "text",
  placeholder,
  name,
  dispatchFn,
  currState
}: Props<T>) => {
  const inputId = `labeled-input-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={inputId}>{title}</label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder || title}
        value={currState[name] as string | number | undefined} // controlled input
        onChange={(e) => {
          dispatchFn({
            ...currState,
            [name]: e.target.value, // 👈 dynamic field update
          });
        }}
        className="border rounded px-2 py-1"
      />
    </div>
  );
};

export default LabeledInput;
