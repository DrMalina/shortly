type Copyable = string | number;

export const copyToClipboard = (element: Copyable): void => {
  navigator.clipboard.writeText(`${element}`);
};
