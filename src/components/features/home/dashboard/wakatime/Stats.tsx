import { WakaTimeMapSats } from "@/lib/mappers";

const Stats = () => {
  return (

    <div className="grid">
      {WakaTimeMapSats().map(item => {
        return ''
      })}
    </div>
  );
};

export default Stats;
