import UserList from "./UserList";
import UserTitle from "./UserTitle";

export default function User() {
  return (
    <div className="user">
      <div className="user-inner">
        <UserTitle />
        <UserList />
      </div>
    </div>
  );
}
