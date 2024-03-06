import { IData } from "../../../interfaces/dataInterface";
import UserItem from "./UserItem";

export default function UserList({
  list,
  setList,
}: {
  list: Array<IData>;
  setList: (e: Array<IData>) => void;
}) {
  return (
    <div className="user-list">
      {list?.map((el: IData, i: number) => (
        <UserItem setList={setList} key={i} user={el} i={i} />
      ))}
    </div>
  );
}
