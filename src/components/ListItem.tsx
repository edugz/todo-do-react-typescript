import { TodoItem } from "./App";

interface ListItemProps {
  items: TodoItem[];
  deleteItem: (id: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ items, deleteItem }) => {
  return (
    <div className={`task-list ${items.length === 0 ? "empty" : ""}`}>
      {items.length === 0 ? (
        <div> No pending tasks!</div>
      ) : (
        <ul>
          {items.map((item) => (
            <li className="list-item" key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListItem;
