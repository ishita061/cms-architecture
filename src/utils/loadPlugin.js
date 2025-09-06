export async function loadPlugin(path) {
  const module = await import(`../plugins/${path}`);
  return module.default;
}
