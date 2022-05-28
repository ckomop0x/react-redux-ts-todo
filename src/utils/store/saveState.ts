export default function saveState<T>(state: T, key: string) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {}
}
