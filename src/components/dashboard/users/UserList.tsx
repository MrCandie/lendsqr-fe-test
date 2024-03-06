import { IData } from "../../../interfaces/dataInterface";
import UserItem from "./UserItem";

export default function UserList({
  list,
  setList,
  setStatData,
}: {
  list: Array<IData>;
  setList: (e: Array<IData>) => void;
  setStatData: (e: Array<IData>) => void;
}) {
  return (
    <div className="user-list">
      {list?.map((el: IData, i: number) => (
        <UserItem
          setStatData={setStatData}
          setList={setList}
          key={i}
          user={el}
          i={i}
        />
      ))}
    </div>
  );
}
