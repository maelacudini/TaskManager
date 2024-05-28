import { SetPermissionType } from "@/app/_utils/types";
import Image from "next/image";

export default function WeatherPermission({
  setPermission,
  permission,
}: SetPermissionType) {
  return (
    <div className="flex items-center justify-between gap-2">
      <p className="h4 text-gray-400">Use current location?</p>
      <button
        className="btn"
        style={{ padding: "1rem" }}
        onClick={() => setPermission(true)}
      >
        <Image
          alt="toggle permission"
          src={permission ? "/icons/no.svg" : "/icons/yes.svg"}
          height={15}
          width={15}
          loading="lazy"
        />
      </button>
    </div>
  );
}
