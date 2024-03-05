import { IData } from "../../../interfaces/dataInterface";
import UserItem from "./UserItem";

export default function UserList({ list }: { list: Array<IData> }) {
  return (
    <div className="user-list">
      {list?.map((el: IData, i: number) => (
        <UserItem key={i} user={el} i={i} />
      ))}
    </div>
  );
}
