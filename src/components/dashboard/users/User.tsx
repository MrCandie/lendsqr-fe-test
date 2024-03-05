import { IData } from "../../../interfaces/dataInterface";
import UserList from "./UserList";
import UserTitle from "./UserTitle";

export default function User({ list }: { list: Array<IData> }) {
  return (
    <div className="user">
      <div className="user-inner">
        <UserTitle />
        <UserList list={list} />
      </div>
    </div>
  );
}
