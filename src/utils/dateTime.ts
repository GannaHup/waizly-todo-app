export const dateTime = {
  getDate: (value: Date, options?: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      ...options,
    }).format(new Date(value)),

  getTime: (value: Date, options?: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
      timeZone: "Asia/Jakarta",
      hour12: false,
      ...options,
    }).format(new Date(value)),
};
