export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function delaySync(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {};
}
