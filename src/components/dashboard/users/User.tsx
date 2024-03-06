import { IData } from "../../../interfaces/dataInterface";
import UserList from "./UserList";
import UserTitle from "./UserTitle";

export default function User({
  list,
  setList,
}: {
  list: Array<IData>;
  setList: (e: Array<IData>) => void;
}) {
  return (
    <div className="user">
      <div className="user-inner">
        <UserTitle setList={setList} />
        <UserList setList={setList} list={list} />
      </div>
    </div>
  );
}
