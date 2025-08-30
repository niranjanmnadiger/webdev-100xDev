import { useEffect, useState } from "react";
import { Todos } from "./api/todos";

export default function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setItems(await Todos.list());
      } catch (e) {
        setErr(String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function addTodo(e) {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const created = await Todos.create(title.trim());
      setItems((p) => [...p, created]);
      setTitle("");
    } catch (e) { setErr(String(e)); }
  }

  async function startEdit(id) {
    setEditingId(id);
    const t = await Todos.get(id);
    setTitle(t?.title ?? "");
  }

  async function saveEdit(e) {
    e.preventDefault();
    try {
      const updated = await Todos.update(editingId, title.trim());
      setItems((p) => p.map((t) => (t.id === updated.id ? updated : t)));
      setEditingId(null);
      setTitle("");
    } catch (e) { setErr(String(e)); }
  }

  async function del(id) {
    try {
      await Todos.remove(id);
      setItems((p) => p.filter((t) => t.id !== id));
    } catch (e) { setErr(String(e)); }
  }

  return (
    <main style={{ maxWidth: 520, margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>Todos</h1>

      <form onSubmit={editingId ? saveEdit : addTodo} style={{ display: "flex", gap: 8 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={editingId ? "Edit title…" : "New todo…"}
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit">{editingId ? "Save" : "Add"}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setTitle(""); }}>Cancel</button>}
      </form>

      {loading && <p>Loading…</p>}
      {err && <p style={{ color: "crimson" }}>{err}</p>}

      <ul style={{ padding: 0, listStyle: "none", marginTop: 16 }}>
        {items.map((t) => (
          <li key={t.id} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
            <span style={{ flex: 1 }}>{t.title}</span>
            <button onClick={() => startEdit(t.id)}>Edit</button>
            <button onClick={() => del(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
