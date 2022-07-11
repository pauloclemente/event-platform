import { useRouter } from "next/router";
import StorageKey from "../../enums/StorageKey";

export default function Event() {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    const localWatchingClass = localStorage.getItem(StorageKey.WatchingClass);

    if (!localWatchingClass) {
      router.push(`/ignite-lab/lesson/abertura-do-evento-ignite-lab`)
    } else {
      router.push(`/ignite-lab/lesson/${localWatchingClass}`)
    }
  }

  return <></>
}